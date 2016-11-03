var myapp = angular.module("myApp", []);

myapp.controller("myController", ["$scope","$http", function($scope, $http){   

    var refresh=function(){
    	$http.get("/candidateInfo").success(function(response){
        $scope.candidateInfo = response;

    })
}
refresh();

$scope.add = function(checkBox){

	var checkboxes = document.querySelectorAll('input[name="' + checkBox + '"]:checked'), values = [];
    Array.prototype.forEach.call(checkboxes, function(el) {
        values.push(el.value);
    });
   alert(values);

   angular.forEach(values,function(value,key){
    alert(value);
    $http.post("/selectCandidates",value).success(function(response){
         console.log(response);
         
   })


   })


  
   

   }

}]);