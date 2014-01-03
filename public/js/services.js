'use strict';

myApp.service('DAO', ["$resource", "$http", function ($resource, $http) {
    this.getData = function (service, param) {
        return $resource('/api/' + service, {}, {
            get: {
                method: 'GET',
                isArray: false,
                params: param,
                cache: false
            }
        });
    };
    this.queryData = function (service, param) {
        return $resource('/api/' + service, {}, {
            query: {
                method: 'GET',
                isArray: true,
                params: param,
                cache: false
            }
        });
    };
}]);
