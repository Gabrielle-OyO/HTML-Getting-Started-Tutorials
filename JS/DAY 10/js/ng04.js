var app = angular.module('myApp', []);

/**
 * 选项：scope，三种取值
 * 1.false
 * 从父作用域继承，是同一个作用域，双向
 * 2.true
 * 从父作用域继承并创建一个新的作用域（指令作用域、子作用域），单向
 * 父作用域中数据的修改会影响子作用域，而子作用域中数据的修改不会影响父作用域
 * 3.{}空对象
 * 指令会创建一个独立的作用域，默认无法互相访问
 * 
 */
app.directive('first', [function(){
	return {
		// scope: {}, // {} = isolate, true = child, false/undefined = no change
		// scope: false,
		// scope: true,
		scope: {},
		controller: function($scope, $element, $attrs, $transclude) {
			// $scope.name='jack'; //在指令作用域中修改数据
		},
		template: '<h2>name:{{name}}</h2>',
	};
}]);

//访问对象属性，需要注意的是对象为引用类型，不同于简单类型
/*app.directive('second', [function(){
	return {
		scope: true,
		controller: function($scope, $element, $attrs, $transclude) {
			//
			$scope.user.username='bbb';
			$scope.user.password='456';
			$scope.user={username:'ccc',password:'333'};
		},
		template: '<h2>username:{{user.username}}，password:{{user.password}}</h2>',
	};
}]);*/



app.controller('DirectiveController', ['$scope', function($scope) {
	$scope.name='tom';

	$scope.user={'username':'aaa','password':'123'};
}])
