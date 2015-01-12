'use strict';

/**
 * @ngdoc function
 * @name angularjokerApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the angularjokerApp
 */
angular.module('angularjokerApp')
  .controller('LoginCtrl', ['$scope', '$log', 'loginService', function ($scope, $log ,loginService) {
  	$scope.data={
		username:'COMACLE.PATRICE@gmail.com',
		password:'password'
  	}

    $scope.post = function(data) {
        loginService.post(data).then(
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

    $scope.logout = function() {
        loginService.logout().then(
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

    $scope.post($scope.data);
    // $scope.logout();
}]);
