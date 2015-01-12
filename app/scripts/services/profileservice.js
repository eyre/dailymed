'use strict';

/**
 * @ngdoc service
 * @name angularjokerApp.profileService
 * @description
 * # profileService
 * Service in the angularjokerApp.
 */
angular.module('angularjokerApp')
  .service('profileService', ['$http','$q' , function ($http, $q) {
    return {
        profile : function(data)  {
        	var url = Host+'/profile';
        	if(typeof(data.idDoctor) != "undefined"){
        		url = Host+'/profile/'+data.idDoctor;
        	}
        	if(typeof(data.public) != "undefined" && typeof(data.idDoctor) != "undefined"){
        		url = Host+'/profile/public/'+data.idDoctor;
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
                    console.log('success:'+data);
                    deferred.resolve(data);
                })
                .error(function (data, status, headers, config) {
                    // called asynchronously if an error occurs
                    // or server returns response with an error status.
                    console.log('error:'+data+status);
                    deferred.reject(data);
                });
            return deferred.promise;
        },
        notifications : function(data)  {
            var deferred = $q.defer();
            // Simple POST request example (passing data) :
            $http({
                    method:'JSONP',
                    url:Host+'/notifications/'+data.page+'/'+data.per_page,
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
        // add : function(data)  {
        //     var deferred = $q.defer();
        //     // Simple POST request example (passing data) :
        //     $http({
			     //    method:'POST',
			     //    url:Host+'/add/bookmark/'+data.idItem,
		      // 	})
        //         .success(function (data, status, headers, config) {
        //             // this callback will be called asynchronously
        //             // when the response is available
        //             //$scope.profile = data;
        //             deferred.resolve(data);
        //         })
        //         .error(function (data, status, headers, config) {
        //             // called asynchronously if an error occurs
        //             // or server returns response with an error status.
        //             deferred.reject(data);
        //         });
        //     return deferred.promise;
        // },
        // delete : function(data)  {
        //     var deferred = $q.defer();
        //     // Simple POST request example (passing data) :
        //     $http({
			     //    method:'POST',
			     //    url:Host+'/delete/bookmark/'+data.idItem,
		      // 	})
        //         .success(function (data, status, headers, config) {
        //             // this callback will be called asynchronously
        //             // when the response is available
        //             //$scope.profile = data;
        //             deferred.resolve(data);
        //         })
        //         .error(function (data, status, headers, config) {
        //             // called asynchronously if an error occurs
        //             // or server returns response with an error status.
        //             deferred.reject(data);
        //         });
        //     return deferred.promise;
        // },

    }
}]);
