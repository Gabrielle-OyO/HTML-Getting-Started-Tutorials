/**
 * v1.3及之后的版本不支持全局控制器，使用模块Module封装控制器Controller
 * 必须先定义模块，然后在模块中定义控制器
 */

/**
 * 定义一个模块
 * 第一个参数表示模块名，用于ng-app指令
 * 第二个参数表示要注入的内容，指定依赖模块
 */
var app=angular.module('myApp',[]);


/**
 * 在模块中定义一个控制器
 * 第一个参数表示控制器名，用于ng-controller指令
 * 第二个参数有两种写法：
 * 	方式1：直接传递一个回调函数
 * 	方式2：传递一个数组，包含两个元素（推荐）
 * 		第一个元素表示要注入的参数
 * 		第二个元素表示一个回调函数
 * 	注：方式2可防止压缩js后看不懂形参
 */
/*app.controller('MyController',($scope)=>{
	$scope.name='tom cruise';
});*/
app.controller('MyController',['$scope',function(a){
	a.name='jack';
}]);