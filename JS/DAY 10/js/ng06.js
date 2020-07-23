var app = angular.module('myApp', []);

app.controller('DirectiveController', ['$scope', function($scope) {
	$scope.name='tom';
	$scope.age=21;

	$scope.show=function(){
		console.log('show');
	};

}]);

//选项：link
app.directive('first', [function(){
	return {
		scope:false,
		template: '<h3>{{name}}</h3>',
		//此处形参名可自定义，随意写
		link: function($scope, element, attribute) {
			console.log($scope.name);
			console.log(element); //此处的element是一个jQuery对象
			console.log(element.css('color','red'));
			console.log(attribute.id);
			console.log(attribute.name);

			//调用方法
			// $scope.show();

			//
			element.on('mouseover',()=>{
				// $scope.show();
				// console.log(attribute.method);
				// $scope.$apply(attribute.method);
				// $scope.$apply('show()');

				// console.log(attribute.doShow);
				$scope.$apply(attribute.doShow);

			});

		}
	};
}]);

//选项：controller
app.directive('second', [function(){
	return {
		//此处参数不能随意修改，根据名称进行自动注入
		controller: ['$scope','$element','$attrs',function($scope, element, attribute) {
			// console.log('controller');
			console.log($scope.age);
			console.log(element); //此处的element是一个jQuery对象
			console.log(attribute.id);
		}],
		template: '<h3>{{age}}</h3>',
	};
}]);






