'use strict';

/**
 * @ngdoc function
 * @name angularjokerApp.controller:SpecialityCtrl
 * @description
 * # SpecialityCtrl
 * Controller of the angularjokerApp
 */
angular.module('angularjokerApp')
  .controller('SpecialityCtrl', ['$scope', '$log', 'specialityService', function ($scope, $log ,specialityService) {
  	$scope.data={
  		which:'SM03',
		page:0,
		per_page:10
  	}

    $scope.all = function() {
        specialityService.all().then(
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
    $scope.detail = function(data) {
        specialityService.detail(data).then(
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

    $scope.members = function(data) {
        specialityService.members(data).then(
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

    $scope.followers = function(data) {
        specialityService.followers(data).then(
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

    $scope.items = function(data) {
        specialityService.items(data).then(
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

	$scope.all();
    $scope.detail($scope.data);
    $scope.members($scope.data);
    $scope.followers($scope.data);
    $scope.items($scope.data);
}]);
