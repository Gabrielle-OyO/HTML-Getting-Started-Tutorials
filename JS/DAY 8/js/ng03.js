
var app=angular.module('myApp', []);

//$timeout是AngularJS中对原生JS的setTimeout的封装
app.controller('DirectiveController', ['$scope','$timeout', function($scope,$timeout){
	$timeout(()=>{
		$scope.url='http://www.baidu.com';
	},3000);

	$scope.readonly=true;
	$scope.doReadyOnly= ()=>{
		$scope.readonly=!$scope.readonly;
	};

	$scope.cls="red";
	$scope.doClass=()=>{
		$scope.cls="blue";
	};


}])