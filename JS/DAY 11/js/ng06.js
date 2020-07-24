var app = angular.module('myApp', ['serviceApp']); //注入依赖模块


app.controller('ServiceController', ['$scope', 'GeneralService', function($scope, GeneralService) {
	
	console.log(GeneralService.calc(5,3));

	GeneralService.getData('user.json')
		.then((resp)=>{
			console.log(resp.data);
		},(resp)=>{
			console.log(resp.status);
		});


}]);
