'use strict';

myApp.controller("HomeController", ['$scope', '$http', '$location', function ($scope, $http, $location) {

    $scope.logType = "";
    $scope.primaryLog = [];
    $scope.getLog = function () {
         $http({method: 'GET', url: '/api/getLog/'+$scope.logType}).
            success(function (data, status, headers, config) {
                 $scope.primaryLog = data;
            }).
            error(function (data, status, headers, config) {

            });
    };

    $scope.gridOptions = {
        data: 'primaryLog',
        showFilter: true,
        columnDefs: [
            {field: 'level', displayName: 'Level',width:'8%'},
            {field: 'timestamp', displayName: 'Timestamp',width:'16%'},
            {field: 'message', displayName: 'Message',width:'*'}
        ]
    };
    $scope.$watch('searchStr',function(newval,oldVal){
        if(newval){
            $scope.gridOptions.selectedItems = [];
            $scope.selectRow(newval);
        }
    });
    $scope.selectRow = function(searchStr){
           angular.forEach($scope.primaryLog, function(data, index){
               if(angular.lowercase(data.message).indexOf(angular.lowercase(searchStr)) != -1){
                   $scope.gridOptions.selectItem(index, true);
               }
           });
       };
}]);

