var app = angular.module('myApp', ['ngRoute']); 

/**
 * 配置路由的步骤：
 * 1.首先引入angular-route.js文件
 * 2.自定义模块时需要注入ngRoute模块
 * 3.在模块配置中配置路由，需要注入$routeProvider服务
 * 4.使用$routeProvider服务
 */
app.config(['$routeProvider',function($routeProvider){
	$routeProvider
		.when('/first',{templateUrl:'pages/1.html'})
		.when('/second',{templateUrl:'pages/2.html'})
		.when('/third',{
			templateUrl:'pages/3.html',
			controller:['$scope','$routeParams',function($scope,$routeParams){
				// console.log('参数name:'+$routeParams.name);
				// console.log('参数age:'+$routeParams.age);
				$scope.name=$routeParams.name;
				$scope.age=$routeParams.age;
			}],
		})
		.when('/fourth/:name/:height/:weight',{
			templateUrl:'pages/4.html',
			controller:['$scope','$routeParams',function($scope,$routeParams){
				console.log($routeParams.name);
				console.log($routeParams.height);
				console.log($routeParams.weight);
			}],	
		});
}]);


app.controller('RouteController', ['$scope', function($scope) {
	
}]);
