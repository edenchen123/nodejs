'use strict';


// Declare app level module which depends on filters, and services
var myApp = angular.module('myApp', ['ngRoute','ngResource']).
  config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/', {templateUrl: 'partials/home.html', controller: 'HomeController'});
    $routeProvider.when('/post', {templateUrl: 'partials/post.html', controller: 'PostController'});
    $routeProvider.otherwise({redirectTo: '/'});
  }]);