'use strict';

/**
 * @ngdoc function
 * @name angularjokerApp.controller:FollowCtrl
 * @description
 * # FollowCtrl
 * Controller of the angularjokerApp
 */
angular.module('angularjokerApp')
  .controller('FollowCtrl', ['$scope', '$log', 'followService', function ($scope, $log ,followService) {
  	$scope.data={
		page:0,
		per_page:10
  	}

    $scope.followers = function(data) {
        followService.followers(data).then(
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

    $scope.following = function(data) {
        followService.following(data).then(
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

    $scope.follow = function(data) {
        followService.follow(data).then(
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

    $scope.unfollow = function(data) {
        followService.unfollow(data).then(
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

  	$scope.doctordata={
  		idDoctor:'550594146578989056',
		page:0,
		per_page:10
  	}
  	$scope.followers($scope.doctordata);
    $scope.following($scope.doctordata);

    $scope.follow($scope.doctordata);
    $scope.unfollow($scope.doctordata);
}]);
