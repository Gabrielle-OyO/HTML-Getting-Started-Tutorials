var app=angular.module('myApp',[]);

/**
 * 控制器命名规则：
 * 1.采用帕斯卡式命名法，即每个单词首字母大写
 * 2.以Controller结尾
 */
app.controller('FirstController', ['$scope', function($scope){
	$scope.name='tom';
	$scope.age=21;
	$scope.user={
		name:'唐伯虎',
		age:19,
		sex:'男'
	};
}]);

app.controller('SecondController', ['$scope', function($scope){
	$scope.name='alice';
}]);

/**
 * 添加多个控制器，使用链接操作，类似于jQuery语法
 * AngularJS内置了jqLite库，jqLite是jQuery库的子集，只包含jQuery的部分方法，相当于jQuery的简化版，更轻量
 */
app.controller('ThirdController', ['$scope', function($scope){
	$scope.hobby='eat';
}]).controller('FourthController', ['$scope', function($scope){
	$scope.address='南京';
}]);