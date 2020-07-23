/**
 *  Module
 *
 * Description
 */
var app = angular.module('myApp', []);

/**
 * 自定义一个指令
 */
// app.directive('myDir', function(){
app.directive('hello', function() {
    return {
        // restrict: 'AEC', // E = Element, A = Attribute, C = Class, M = Comment，默认AE
        link: function($scope, iElm, iAttrs, controller) {
            console.log('自定义指令myDir');
        }
    };
});

/**
 * 指令的生命周期：加载、编译、链接
 * 在compile编译时会自动调用执行link链接
 *
 * 执行顺序：compile --> controller --> link
 * 
 * 
 */
app.directive('myDir2', [function() {
    // Runs during compile
    return {
        // name: '',
        // priority: 1,
        // terminal: true,
        // scope: {}, // {} = isolate, true = child, false/undefined = no change
        controller: function($scope, $element, $attrs, $transclude) {
        	console.log('controller');
        },
        // require: 'ngModel', // Array = multiple requires, ? = optional, ^ = check parent elements
        restrict: 'A', // E = Element, A = Attribute, C = Class, M = Comment
        // template: '',
        // templateUrl: '',
        // replace: true,
        // transclude: true,
        /*compile: function(){
        	console.log('compile');
        },*/
        link: function($scope, iElm, iAttrs, controller) {
            console.log('link');
        }
    };
}]);

app.controller('DirectiveController', ['$scope', function($scope) {

}])
