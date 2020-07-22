
var app=angular.module('myApp', []);

app.controller('DirectiveController', ['$scope','$timeout', function($scope,$timeout){

	$scope.flag=true;

	$scope.doChange=function(){
		$scope.flag=!$scope.flag;
	};

	// $scope.score='A';

}])