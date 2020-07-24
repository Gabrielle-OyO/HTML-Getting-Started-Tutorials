var app = angular.module('myApp', []);

app.controller('ServiceController', ['$scope', '$http', function($scope, $http) {
    /*$scope.city='南京';
    $scope.bus=58;
    //http://op.juhe.cn/189/bus/busline?key=810f9a0095caf327d7dd0df96ca250c8&city=%E5%8D%97%E4%BA%AC&bus=817
    $http.jsonp('http://op.juhe.cn/189/bus/busline?key=810f9a0095caf327d7dd0df96ca250c8&callback=JSON_CALLBACK&city='+$scope.city+'&bus='+$scope.bus)
    .then((resp)=>{
    	// console.log(resp.data);
    	$scope.result=resp.data.result[0];
    },(resp)=>{
    	console.log(resp.status+','+resp.statusText);
    });*/

    /**
     * 实现监视用户输入
     * $watch()方法
     */
    $scope.obj={
    	city:'南京',
    	bus:'58'
    };
    $scope.$watch('obj', (newValue, oldValue, scope) => {
        $http.jsonp('http://op.juhe.cn/189/bus/busline?key=810f9a0095caf327d7dd0df96ca250c8&callback=JSON_CALLBACK&city=' + $scope.obj.city + '&bus=' + $scope.obj.bus)
            .then((resp) => {
            	$scope.flag=true;
                // console.log(resp.data);
                if(resp.data.result!=null){
                	$scope.result = resp.data.result[0];
                	$scope.flag=false;
                }
            }, (resp) => {
                console.log(resp.status + ',' + resp.statusText);
            });
    }, true);


}]);
