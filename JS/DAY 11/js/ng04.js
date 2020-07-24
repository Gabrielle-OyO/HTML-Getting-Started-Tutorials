var app = angular.module('myApp', []);

/**
 * $q承诺/延迟(promise/defered)
 * 用来处理异步操作的，在客户端异步操作主要有两种形式：AJAX和setTimeout()
 * 作用：减少代码的嵌套，让代码更整洁、更易读
 * 实现：使用defered和promise，
 */
app.controller('ServiceController', ['$scope', '$q', function($scope, $q) {
	//异步操作存在的问题：嵌套黑洞
	/*$.ajax({
		type:'get',
		url:'getData',
		success:function(result){
			$.ajax({
				type:'get',
				url:'sendData',
				data:{data:result}
				success:function(result){
					$.ajax({
						type:'get',
						url:'sendData',
						data:{data:result}
						success:function(result){
							
						},
					});
				},
			});
		},
	});*/
	
	var sayHelloAsync=function(name){
		var defer=$q.defer();
		setTimeout(()=>{
			defer.notify('即将问候：'+name);
			if(name){
				defer.resolve('你好：'+name);
			}else{
				defer.reject('拒绝问候：'+name);
			}
		},2000);
		return defer.promise;
	};
	
	var promise=sayHelloAsync('张三');

	promise.then((hello)=>{
		setTimeout(()=>{
			console.log('成功，'+hello);
		},3000);
	},(reason)=>{
		console.log('失败，'+reason);
	},(message)=>{
		console.log('通知，'+message);
	});









}]);
