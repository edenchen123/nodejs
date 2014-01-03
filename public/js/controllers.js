'use strict';

myApp.controller("HomeController", ['$scope', 'DAO','$location', function ($scope, DAO,$location) {

    $scope.posts = DAO.queryData('posts', {}).query();

    $scope.getPost = function (id) {
        $location.url('/post');
    };


}]);

myApp.controller("PostController", ['$scope', 'DAO','$location', function ($scope, DAO,$location) {

    $scope.getPost = function (id) {
        $scope.post = DAO.getData('post/:id', {id: id}).get();
    };
}]);
