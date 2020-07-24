var app=angular.module('serviceApp',[]);

app.factory('GeneralService', ['$http',function($http){
	return {
		calc:function(num1,num2){
			return num1+num2;
		},
		getData:function(url){
			return $http({
				method:'get',
				url:url,
			});
		},
	};
}])