window.onload=function(){
	document.getElementById('btn').onclick=function(){
		console.log(this); //事件源
	};
};

var app=angular.module('myApp',[]);

app.controller('EventController', ['$scope', function($scope){
	$scope.name='tom';
	$scope.show=function(e){
		// console.log(this); //this表示当前作用域对象，即$scope，不是事件源
		// console.log(this===$scope);
		// console.log($scope.name);
		// console.log(this.name);
		
		/*for(var index in e){
			console.log(index+'='+e[index]);
		}*/
		// console.log(e.target); //事件源

		// console.log(e.target.innerHTML);
		// console.log($(e.target).html()); //AngularJS虽然内置了jqLite，但没有暴露出来，不能直接使用
		// var obj=angular.element(e.target);
		// console.log(obj.html());
		// obj.css('color','red'); //调用jQuery中的方法

		//AngularJS也可以结合jQuery一起使用
		console.log($(e.target).html()); 
	};
}])
