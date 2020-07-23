var app = angular.module('myApp', []);

//选项：transclude
app.directive('first', [function(){
	return {
		template: '<h1>welcome to itany<mark ng-transclude></mark></h1>',
		transclude: true,
	};
}]);

//选项：priority、terminal
app.directive('second', [function(){
	return {
		priority: 4,
		controller: function($scope, $element, $attrs, $transclude) {
			console.log('second controller');
		},
	};
}]);

app.directive('third', [function(){
	return {
		priority: 666,
		controller: function($scope, $element, $attrs, $transclude) {
			console.log('third controller');
		},
		terminal:true,
	};
}]);


app.controller('DirectiveController', ['$scope', function($scope) {

}])
