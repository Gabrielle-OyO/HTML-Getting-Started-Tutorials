var app = angular.module('myApp', []);

app.controller('DirectiveController', ['$scope', function($scope) {
	$scope.name='tom';
	$scope.age=21;

	$scope.user={
		name:'jack',
		age:18,
	};

	$scope.study=function(){
		console.log('welcome to itany');
	};

}])

/**
 * @，用于简单类型数据
 * 将父作用域中的特定变量绑定到隔离作用域中，单向绑定
 * 
 */
app.directive('first', [function(){
	return {
		scope: {
			//将父作用域中的name绑定到隔离作用域，实现访问父作用域中的name
			// name:'@username', //@符号后面的名称必须与html中指令里面添加的属性名相同
			name:'@', //简写，如果省略则html中指令里面添加的属性名必须为name
			age:'@',
		},
		controller: function($scope, $element, $attrs, $transclude) {
			
			
		},
		template: 'name: <input type="text" ng-model="name"><br>'+
	 				'age: <input type="text"  ng-model="age"><br>'+
	 				'name={{name}}，age={{age}}',
	};
}]);

/**
 * =，用于对象
 * 将父作用域中的对象绑定到隔离作用域中，双向绑定
 */
app.directive('second', [function(){
	return {
		scope: {
			user:'=',
		},
		controller: function($scope, $element, $attrs, $transclude) {
			
		},
		template: 'user.name: <input type="text" ng-model="user.name"><br>'+
					 'user.age: <input type="text" ng-model="user.age"><br>'+
					 'user.name={{user.name}},user.age={{user.age}}',
	};
}]);


/**
 * &，用于方法
 * 将父作用域中的方法绑定到隔离作用域中
 */
app.directive('third', [function(){
	return {
		scope: {
			study:'&',
		},
		controller: function($scope, $element, $attrs, $transclude) {
			
		},
		template: '<input type="button" value="按钮1" ng-click="study()">',
	};
}]);





