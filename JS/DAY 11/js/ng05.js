var app = angular.module('myApp', []);

/**
 * 三种方式：
 * 1.使用Module.factory()方法，最常用
 * 2.使用Module.service()方法
 * 3.使用Module.provider()方法，最复杂，功能更强大
 */
//1.使用Module.factory()方法，必须有返回值，一般返回一个包含各种方法定义的对象
app.factory('FirstService', [function(){
	return {
		fun:function(){
			console.log('执行FirstService中的fun()');
		},
		calc:function(num1,num2){
			return num1+num2;
		}
	};
}]);

//2.使用Module.service()方法
app.service('SecondService', [function(){
	this.fun=function(){
		console.log('执行SecondService中的fun()');
	};
}]);

//3.使用Module.provider()方法，最复杂，功能更强大
app.provider('ThirdService',{
	$get:function(){
		return {
			fun:function(){
				console.log('执行ThirdService中的fun()');
			},
			show:function(){
				console.log('show');
			}
		};
	}
});



app.controller('ServiceController', ['$scope', 'FirstService','SecondService','ThirdService', function($scope, FirstService, SecondService, ThirdService) {
	
	// FirstService.fun();
	// console.log(FirstService.calc(3,7));

	// SecondService.fun();

	ThirdService.fun();
	ThirdService.show();


}]);
