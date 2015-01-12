'use strict';

/**
 * @ngdoc service
 * @name angularjokerApp.bookmarkservice
 * @description
 * # bookmarkservice
 * Service in the angularjokerApp.
 */
angular.module('angularjokerApp')
  .service('bookmarkservice', ['$http','$q' , function ($http, $q) {
    return {
        all : function(data)  {
            var deferred = $q.defer();
            // Simple POST request example (passing data) :
            $http({
			        method:'JSONP',
			        url:Host+'/bookmarks/'+data.page+'/'+data.per_page,
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
        add : function(data)  {
            var deferred = $q.defer();
            // Simple POST request example (passing data) :
            $http({
			        method:'POST',
			        url:Host+'/add/bookmark/'+data.idItem,
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
        delete : function(data)  {
            var deferred = $q.defer();
            // Simple POST request example (passing data) :
            $http({
			        method:'DELETE',
			        url:Host+'/delete/bookmark/'+data.idItem,
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
