'use strict';

/**
 * @ngdoc function
 * @name angularjokerApp.controller:CliniquesCtrl
 * @description
 * # CliniquesCtrl
 * Controller of the angularjokerApp
 */
angular.module('angularjokerApp')
  .controller('CliniquesCtrl',['$scope', '$log', 'cliniqueService', function ($scope, $log ,cliniqueService) {
  	$scope.data={
		page:0,
		per_page:10
  	}

    $scope.timeline = function(data) {
        cliniqueService.timeline(data).then(
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
    $scope.item = function(data) {
        cliniqueService.item(data).then(
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
        cliniqueService.items(data).then(
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
    $scope.share = function(data) {
        cliniqueService.share(data).then(
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
        cliniqueService.add(data).then(
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

    $scope.idata={
        idItem:'550594346240442368',
        page:0,
        per_page:10
    }
    $scope.pidata={
        idItem:'550594346240442368',
        public:true,
        page:0,
        per_page:10
    }
    $scope.ddata={
        idDoctor:'550594146578989056',
        page:0,
        per_page:10
    }

    // $scope.timeline($scope.data);
    // $scope.item($scope.idata);
    // $scope.item($scope.pidata);
    // $scope.items($scope.data);
    // $scope.items($scope.ddata);
    $scope.share($scope.idata);
    $scope.add($scope.data);
    // $scope.delete($scope.idata);
    
}]);
