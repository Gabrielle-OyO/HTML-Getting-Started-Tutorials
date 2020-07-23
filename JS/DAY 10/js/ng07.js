var app = angular.module('myApp', []);

app.controller('DirectiveController', ['$scope', function($scope) {
	

}]);

app.directive('first', [function(){
	return {
		controller: function($scope, $element, $attrs, $transclude) {
			//定义公开方法，可以被其他指令所调用，结合require使用
			this.play=()=>{
				console.log('play');
			};
			this.sleep=()=>{
				console.log('sleep');
			};
			//非公开方法，属性当前指令作用域
			$scope.show=()=>{
				console.log('show');
			};
		},
	};
}]);

app.directive('second', [function(){
	return {
		require: '?^first', // Array = multiple requires, ? = optional, ^ = check parent elements
		link: function($scope, iElm, iAttrs, controller) {
			if(controller){
				console.log(controller);
				controller.play(); //调用依赖指令的控制器中的公开方法
				controller.sleep();
				// controller.show();
				$scope.show();
			}
		}
	};
}]);
