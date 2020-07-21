
var app=angular.module('myApp', []);

/**
 * 自定义一个过滤器
 * 使用模块的filter服务
 * 语法：模块对象.filter(过滤器名称,回调函数);
 * 		回调函数返回一个函数的定义，该函数的每一个参数表示要过滤的数据
 * 		第二个及其后的其他参数表示过滤器需要的参数
 * 		该函数的返回值就是过滤后的数据
 */
app.filter('reverse',function(){
	return function(data,splitChar){
		//功能1：将字符串进行反转
		/*var arr=data.split('');
		arr.reverse();
		return arr.join('');*/

		//功能2：可以指定分隔符
		/*if(!splitChar){
			splitChar='';
		}
		var arr=data.split(splitChar);
		arr.reverse();
		return arr.join(splitChar);*/

		//功能3：将字符串、数值、数组等反转
		if(typeof data === 'string'){
			if(!splitChar){
				splitChar='';
			}
			var arr=data.split(splitChar);
			arr.reverse();
			return arr.join(splitChar);
		}else if(typeof data === 'number'){
			var arr=(data+'').split('');
			arr.reverse();
			return parseFloat(arr.join(''));
		}else if(angular.isArray(data)){ //angular提供的isArray()方法，判断是否是数组
			return data.reverse();
		}
	};
});

app.controller('FilterController', ['$scope','$filter', function($scope,$filter){
	$scope.str=$filter('reverse')('itany');
}])