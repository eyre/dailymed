'use strict';

/**
 * @ngdoc service
 * @name angularjokerApp.suggestionservice
 * @description
 * # suggestionservice
 * Service in the angularjokerApp.
 */
angular.module('angularjokerApp')
  .service('suggestionservice', ['$http','$q' , function ($http, $q) {
    return {
        recommand_friends : function(data)  {
            var deferred = $q.defer();
            // Simple POST request example (passing data) :
            $http({
			        method:'JSONP',
			        url:Host+'/recommand/friends/'+data.page+'/'+data.per_page,
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
        recommand_items : function(data)  {
            var deferred = $q.defer();
            // Simple POST request example (passing data) :
            $http({
			        method:'JSONP',
			        url:Host+'/recommand/items/'+data.page+'/'+data.per_page,
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
        similar_friends : function(data)  {
            var deferred = $q.defer();
            // Simple POST request example (passing data) :
            $http({
			        method:'JSONP',
			        url:Host+'/similar/friends/'+data.idDoctor+'/'+data.page+'/'+data.per_page,
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
        similar_items : function(data)  {
            var deferred = $q.defer();
            // Simple POST request example (passing data) :
            $http({
			        method:'JSONP',
			        url:Host+'/similar/items/'+data.idItem+'/'+data.page+'/'+data.per_page,
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
