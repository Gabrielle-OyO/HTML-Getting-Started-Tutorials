
var app=angular.module('myApp', []);

app.controller('DirectiveController', ['$scope', function($scope){

	$scope.doSubmit=function(){
		console.log($scope.user);
	};
	
}])