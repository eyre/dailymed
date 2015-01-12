'use strict';

/**
 * @ngdoc service
 * @name angularjokerApp.cliniqueService
 * @description
 * # cliniqueService
 * Service in the angularjokerApp.
 */
angular.module('angularjokerApp')
  .service('cliniqueService', ['$http','$q' , function ($http, $q) {
    return {
        timeline : function(data)  {
            var deferred = $q.defer();
            // Simple POST request example (passing data) :
            $http({
			        method:'JSONP',
			        url:Host+'/timeline/'+data.page+'/'+data.per_page,
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
        item : function(data)  {
            var url = Host+'/item/'+data.idItem;
            if(typeof(data.public) != "undefined"){
                url = Host+'/item/public/'+data.idItem;
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
        items : function(data)  {
            var url = Host+'/items/'+data.page+'/'+data.per_page;
            if(typeof(data.idDoctor) != "undefined"){
                url = Host+'/items/'+data.idDoctor+'/'+data.page+'/'+data.per_page;
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
        share : function(data)  {
            var url = Host+'/item/share/'+data.idItem;
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
        add : function(data)  {
            var url = Host+'/add/item';
            var deferred = $q.defer();
            // Simple POST request example (passing data) :
            $http({
                    method:'POST',
                    url:url,
                    data:data,
                    // withCredentials: true,
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
        edit : function(data)  {
            var url = Host+'/item/edit'+data.idItem;
            var deferred = $q.defer();
            // Simple POST request example (passing data) :
            $http({
                    method:'POST',
                    url:url,
                    data:data
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
        delete : function(data)  {
            var url = Host+'/item/delete'+data.idItem;
            var deferred = $q.defer();
            // Simple POST request example (passing data) :
            $http({
                    method:'DELETE',
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
    }
}]);
