'use strict';

/**
 * @ngdoc function
 * @name angularjokerApp.controller:ProfileCtrl
 * @description
 * # ProfileCtrl
 * Controller of the angularjokerApp
 */
angular.module('angularjokerApp')
  .controller('ProfileCtrl', ['$scope', '$log', 'profileService', function ($scope, $log ,profileService) {
  	$scope.data={
		page:0,
		per_page:10
  	}

    $scope.profile = function(data) {
        profileService.profile(data).then(
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

    $scope.notifications = function(data) {
        profileService.notifications(data).then(
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
  	$scope.profile($scope.data);
    $scope.notifications($scope.data);

}]);
