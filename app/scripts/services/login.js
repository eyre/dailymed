'use strict';

/**
 * @ngdoc service
 * @name angularjokerApp.loginService
 * @description
 * # loginService
 * Service in the angularjokerApp.
 */
angular.module('angularjokerApp')
  .service('loginService', ['$http','$q' , function ( $http, $q) {

    return {
        post : function(data)  {
            var deferred = $q.defer();
            // Simple POST request example (passing data) :
            $http({
			        method:'POST',
			        url:Host+'/login',
			        params:data
		      	})
                .success(function (data, status, headers, config) {
                    // this callback will be called asynchronously
                    // when the response is available
                    //$scope.profile = data;
                    deferred.resolve(data);
                })
                .error(function (data, status, headers, config) {
                    // called asynchronously if an error occurs
                    // or server returns response with an error status.
                    deferred.reject(data);
                });
            return deferred.promise;
        },
        logout : function()  {
            var deferred = $q.defer();
            // Simple POST request example (passing data) :
            $http({
			        method:'GET',
			        url:Host+'/logout'
		      	})
                .success(function (data, status, headers, config) {
                    // this callback will be called asynchronously
                    // when the response is available
                    //$scope.profile = data;
                    deferred.resolve(data);
                })
                .error(function (data, status, headers, config) {
                    // called asynchronously if an error occurs
                    // or server returns response with an error status.
                    deferred.reject(data);
                });
            return deferred.promise;
        }
    }
}]);
