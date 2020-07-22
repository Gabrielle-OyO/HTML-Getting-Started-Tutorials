/*  Module
*
* Description
*/
var app=angular.module('myApp', []);

app.controller('FilterController', ['$scope', function($scope){
	$scope.users=[
		{name:'tom',age:25,pwd:'123'},
		{name:'jack',age:21,pwd:'abc'},
		{name:'mike',age:29,pwd:'cba'},
		{name:'alice',age:16,pwd:'111'},
		{name:'alex',age:211,pwd:'111'},
	];

	//定义一个排序函数，返回一个整数，默认会根据返回的整数值进行排序（升序）
	$scope.sortName=function(value){ //value表示数组中的每个元素
		// console.log(value);
		return value.name.length;
	};
}])