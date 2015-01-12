'use strict';

/**
 * @ngdoc function
 * @name angularjokerApp.controller:SubscribeCtrl
 * @description
 * # SubscribeCtrl
 * Controller of the angularjokerApp
 */
angular.module('angularjokerApp')
  .controller('SubscribeCtrl', ['$scope', '$log', 'subscribeService', function ($scope, $log ,subscribeService) {
  	$scope.rppsData = {
  		firstname:'EMILIE',
		lastname:'MERLE',
		rpps:'10002280344'
  	}

    $scope.getRpps = function(postData) {
        subscribeService.getRpps(postData).then(
            function(data) {
                $scope.profile = data;
                $log.debug("it's ok");
            },
            function(reason) {
                $scope.profile = [];
                $log.debug("it's ko: " + reason);
            }
        )
    };
    $scope.countries = function() { 
        subscribeService.countries().then(
            function(data) {
                $scope.profile = data;
                $log.debug("it's ok");
            },
            function(reason) {
                $scope.profile = [];
                $log.debug("it's ko: " + reason);
            }
        )
    };
    $scope.specialities = function() {
        subscribeService.specialities().then(
            function(data) {
                $scope.profile = data;
                $log.debug("it's ok");
            },
            function(reason) {
                $scope.profile = [];
                $log.debug("it's ko: " + reason);
            }
        )
    };
    $scope.subSpecialities = function() {
        subscribeService.subSpecialities().then(
            function(data) {
                $scope.profile = data;
                $log.debug("it's ok");
            },
            function(reason) {
                $scope.profile = [];
                $log.debug("it's ko: " + reason);
            }
        )
    };
    $scope.departements = function() {
        subscribeService.departements().then(
            function(data) {
                $scope.profile = data;
                $log.debug("it's ok");
            },
            function(reason) {
                $scope.profile = [];
                $log.debug("it's ko: " + reason);
            }
        )
    };
    $scope.universities = function() {
        subscribeService.universities().then(
            function(data) {
                $scope.profile = data;
                $log.debug("it's ok");
            },
            function(reason) {
                $scope.profile = [];
                $log.debug("it's ko: " + reason);
            }
        )
    };
    $scope.verifyMail = function(mail) {
        subscribeService.verifyMail(mail).then(
            function(data) {
                $scope.profile = data;
                $log.debug("it's ok");
            },
            function(reason) {
                $scope.profile = [];
                $log.debug("it's ko: " + reason);
            }
        )
    };
    $scope.verifyRpps = function(rpps) {
        subscribeService.verifyRpps(rpps).then(
            function(data) {
                $scope.profile = data;
                $log.debug("it's ok");
            },
            function(reason) {
                $scope.profile = [];
                $log.debug("it's ko: " + reason);
            }
        )
    };
    $scope.mail={
    	identifier:'VERONIQUE.LABOURDETTE@gmail.com'
    }
    $scope.rpps={
    	rpps:'10001341931'
    }


    $scope.getRpps($scope.rppsData);
    $scope.countries();
    $scope.specialities();
    $scope.subSpecialities();
    $scope.departements();
    $scope.universities();
    $scope.verifyMail($scope.mail);
    $scope.verifyRpps($scope.rpps);

}]);
