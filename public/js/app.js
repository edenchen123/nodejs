'use strict';


// Declare app level module which depends on filters, and services
var myApp = angular.module('myApp', ['ngRoute','ngResource','ngGrid']).
  config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/', {templateUrl: 'index.html', controller: 'HomeController'});
    $routeProvider.otherwise({redirectTo: '/'});
  }]);