var app = angular.module('myApp', []);

//使用$templateCache存储模板缓存数据
app.run(['$templateCache',function($templateCache){
	$templateCache.put('tc1','<h2>welcome to itany</h2>');
	$templateCache.put('tc2','<h2>欢迎来到南京网博</h2>');
}]);

//选项：template、replace
app.directive('first', [function(){
	return {
		restrict: 'AE', // E = Element, A = Attribute, C = Class, M = Comment
		template: '<section><h3>welcome to itany</h3><h4>wbs16102</h4></section>',
		// templateUrl: '',
		replace: true, //默认为false，不替换当前标签
		// transclude: true,
		// compile: function(tElement, tAttrs, function transclude(function(scope, cloneLinkingFn){ return function linking(scope, elm, attrs){}})),
		link: function($scope, iElm, iAttrs, controller) {
			console.log('link');
		}
	};
}]);

app.directive('second', ['$templateCache', function($templateCache){
	return {
		template: $templateCache.get('tc1'),
	};
}]);

app.directive('third', ['$templateCache', function($templateCache){
	return {
		template: $templateCache.get('tc1'),
	};
}]);

//选项：templateUrl
app.directive('fourth', [function(){
	return {
		templateUrl:'template/t1.html',
	};
}]);

app.controller('DirectiveController', ['$scope', function($scope) {

}])
