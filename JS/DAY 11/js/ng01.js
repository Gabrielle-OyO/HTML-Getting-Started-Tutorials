var app = angular.module('myApp', []);

/**
 * 使用ng的$timeout服务
 * 当使用ng服务时会监视作用域中数据的变化，当监视到变化时会自动进行更新操作
 * 当：ng中监视数据变化是使用$watch服务实现的
 */
/*app.run(['$timeout','$rootScope', function($timeout,$rootScope){
	$timeout(()=>{
		$rootScope.name='tom';
	},3000);
}]);*/

/**
 * 使用原生js的setTimeout
 * 当使用非ng服务时不会自动更新，因为监视更新操作只对ng上下文中的操作有效
 * 此时需要调用该作用域对象的$apply()或$digest()方法通知监控服务$watch进行更新操作
 */
app.run(['$rootScope', function($rootScope){
	setTimeout(()=>{
		console.log('时间到了');
		$rootScope.name='tom';
		console.log($rootScope.name);	

		// $rootScope.$apply();
		$rootScope.$digest();
	},3000);
}]);


app.controller('ServiceController', ['$scope', function($scope) {
	
}]);
