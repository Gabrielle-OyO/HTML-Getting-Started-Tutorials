var app = angular.module('myApp', []);

app.controller('ServiceController', ['$scope','$http', function($scope,$http) {
	//使用$http发送AJAX请求
	/*$http({
		method:'get',
		url:'user.jsonaa',
		responseType:'json'
	}).then(function(resp){
		for(var index in resp){
			console.log(index+'='+resp[index]);
		}
		$scope.user=resp.data;
	},function(resp){
		console.log('请求失败：'+resp.status+','+resp.statusText);
	});*/
	
	//强烈不建议的方式
	/*$http({
		method:'get',
		url:'user.json',
		responseType:'json'
	}).success(function(data){
		console.log(data);
	}).error(function(data,status,headers,config){
		console.log(status);
	});*/

	$http.get('user.json')
		.then((resp)=>{
			console.log(resp.data);
		},(resp)=>{
			console.log(resp.status);
		});
}]);
