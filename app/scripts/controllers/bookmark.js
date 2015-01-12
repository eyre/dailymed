'use strict';

/**
 * @ngdoc function
 * @name angularjokerApp.controller:BookmarkCtrl
 * @description
 * # BookmarkCtrl
 * Controller of the angularjokerApp
 */
angular.module('angularjokerApp')
  .controller('BookmarkCtrl', ['$scope', '$log', 'bookmarkservice', function ($scope, $log ,bookmarkservice) {
  	$scope.data={
		page:0,
		per_page:10
  	}

    $scope.all = function(data) {
        bookmarkservice.all(data).then(
            function(data) {
                $scope.profile = data;
                $log.debug(data);
                $log.debug("it's ok");
            },
            function(reason) {
                $scope.profile = [];
                $log.debug("it's ko: " + reason);
            }
        )
    };

    $scope.add = function(data) {
        bookmarkservice.add(data).then(
            function(data) {
                $scope.profile = data;
                $log.debug(data);
                $log.debug("it's ok");
            },
            function(reason) {
                $scope.profile = [];
                $log.debug("it's ko: " + reason);
            }
        )
    };

    $scope.delete = function(data) {
        bookmarkservice.delete(data).then(
            function(data) {
                $scope.profile = data;
                $log.debug(data);
                $log.debug("it's ok");
            },
            function(reason) {
                $scope.profile = [];
                $log.debug("it's ko: " + reason);
            }
        )
    };

  	$scope.sidata={
  		idItem:'550594346240442368',
		page:0,
		per_page:10
  	}
    
    $scope.all($scope.data);
    $scope.add($scope.sidata);
    $scope.delete($scope.sidata);
}]);
