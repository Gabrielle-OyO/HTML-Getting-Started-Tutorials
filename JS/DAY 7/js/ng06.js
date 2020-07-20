var app=angular.module('myApp',[]);

/**
 * 根作用域对象$rootScope，全局作用域，每个app只有一个
 * run()方法用于初始化全局数据，仅对全局作用域起作用
 */
 app.run(['$rootScope', function($rootScope){
 	$rootScope.height='180.5';
 	$rootScope.name='alice';
 }]);

app.controller('FirstController', ['$scope', function($scope){
	$scope.name='tom';
	$scope.age=21;
	
}]);

app.controller('SecondController', ['$scope', function($scope){
	$scope.name='zhangsan';
}]);