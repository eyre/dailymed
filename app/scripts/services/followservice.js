'use strict';

/**
 * @ngdoc service
 * @name angularjokerApp.followService
 * @description
 * # followService
 * Service in the angularjokerApp.
 */
angular.module('angularjokerApp')
  .service('followService', ['$http','$q' , function ($http, $q) {
    return {
        followers : function(data)  {
        	var url = Host+'/followers/'+data.page+'/'+data.per_page;
        	if(typeof(data.idDoctor) != "undefined"){
        		url = Host+'/followers/'+data.idDoctor+'/'+data.page+'/'+data.per_page;
        	}
            var deferred = $q.defer();
            // Simple POST request example (passing data) :
            $http({
			        method:'JSONP',
			        url:url,
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
        following : function(data)  {
        	var url = Host+'/following/'+data.page+'/'+data.per_page;
        	if(typeof(data.idDoctor) != "undefined"){
        		url = Host+'/following/'+data.idDoctor+'/'+data.page+'/'+data.per_page;
        	}
            var deferred = $q.defer();
            // Simple POST request example (passing data) :
            $http({
			        method:'JSONP',
			        url:url,
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
        follow : function(data)  {
            var deferred = $q.defer();
            // Simple POST request example (passing data) :
            $http({
			        method:'POST',
			        url:Host+'/follow/'+data.idDoctor,
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
        unfollow : function(data)  {
            var deferred = $q.defer();
            // Simple POST request example (passing data) :
            $http({
			        method:'POST',
			        url:Host+'/unfollow/'+data.idDoctor,
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
