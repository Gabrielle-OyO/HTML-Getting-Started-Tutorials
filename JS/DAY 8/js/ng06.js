
var app=angular.module('myApp', []);

app.controller('DirectiveController', ['$scope','$timeout', function($scope,$timeout){

	$scope.arr=['tom','mike','alice','jack','alex'];

	$scope.users=[
		{id:1001,name:'tom',age:21,sex:'male',pwd:'123',height:180.5},
		{id:1008,name:'jack',age:19,sex:'female',pwd:'123',height:160.5},
		{id:2003,name:'alice',age:22,sex:'male',pwd:'333',height:178.5},
		{id:2001,name:'mike',age:18,sex:'female',pwd:'111',height:182.5},
	];
}])