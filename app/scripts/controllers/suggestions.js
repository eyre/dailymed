'use strict';

/**
 * @ngdoc function
 * @name angularjokerApp.controller:SuggestionsCtrl
 * @description
 * # SuggestionsCtrl
 * Controller of the angularjokerApp
 */
angular.module('angularjokerApp')
  .controller('SuggestionsCtrl', ['$scope', '$log', 'suggestionservice', function ($scope, $log ,suggestionservice) {
  	$scope.data={
  		which:'SM03',
		page:0,
		per_page:10
  	}

    $scope.recommand_friends = function(data) {
        suggestionservice.recommand_friends(data).then(
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

    $scope.recommand_items = function(data) {
        suggestionservice.recommand_items(data).then(
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

    $scope.similar_friends = function(data) {
        suggestionservice.similar_friends(data).then(
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

    $scope.similar_items = function(data) {
        suggestionservice.similar_items(data).then(
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

    $scope.recommand_friends($scope.data);
    $scope.recommand_items($scope.data);
  	$scope.sfdata={
  		idDoctor:'550594146578989056',
		page:0,
		per_page:10
  	}
  	$scope.sidata={
  		idItem:'550594346240442368',
		page:0,
		per_page:10
  	}
    $scope.similar_friends($scope.sfdata);
    $scope.similar_items($scope.sidata);
}]);
