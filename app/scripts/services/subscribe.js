'use strict';

/**
 * @ngdoc service
 * @name angularjokerApp.subscribeService
 * @description
 * # subscribeService
 * Service in the angularjokerApp.
 */
angular.module('angularjokerApp')
  .service('subscribeService', ['$http','$q' , function ( $http, $q) {

    return {
        getRpps : function(postData)  {
            var deferred = $q.defer();
            // Simple POST request example (passing data) :
            $http({
			        method:'POST',
			        url:Host+'/findme',
			        data:postData
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
        countries : function()  {
            var deferred = $q.defer();
            // Simple POST request example (passing data) :
            $http({
			        method:'JSONP',
			        url:Host+'/countries'
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
        specialities : function()  {
            var deferred = $q.defer();
            // Simple POST request example (passing data) :
            $http({
			        method:'JSONP',
			        url:Host+'/specialities'
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
        subSpecialities : function()  {
            var deferred = $q.defer();
            // Simple POST request example (passing data) :
            $http({
			        method:'JSONP',
			        url:Host+'/subSpecialities'
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
        departements : function()  {
            var deferred = $q.defer();
            // Simple POST request example (passing data) :
            $http({
			        method:'JSONP',
			        url:Host+'/departements'
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
        universities : function()  {
            var deferred = $q.defer();
            // Simple POST request example (passing data) :
            $http({
			        method:'JSONP',
			        url:Host+'/universities'
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
        verifyMail : function(postData)  {
            var deferred = $q.defer();
            // Simple POST request example (passing data) :
            $http({
			        method:'POST',
			        url:Host+'/verify/mail',
			        data:postData
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
        verifyRpps : function(postData)  {
            var deferred = $q.defer();
            // Simple POST request example (passing data) :
            $http({
			        method:'POST',
			        url:Host+'/verify/rpps',
			        data:postData
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

    }
}]);
