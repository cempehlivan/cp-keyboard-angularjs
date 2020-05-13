var app = angular.module("ExampleApp", ["cp.keyboard"])

.controller("HomeCtrl", function($scope){

    $scope.model1 = '';
    $scope.model2 = '';
    $scope.model3 = '';
    $scope.model4 = '';

    $scope.fnSearch = function(q){
        alert('Search for : ' + q);
    }

})