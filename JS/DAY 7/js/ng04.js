var app=angular.module('myApp',[]);

app.controller('MyController', ['$scope', function($scope){
	$scope.username='张三';
	// var username='aaa';
	// console.log($scope.username);
}])