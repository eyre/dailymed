'use strict';

/**
 * @ngdoc function
 * @name angularjokerApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the angularjokerApp
 */
angular.module('angularjokerApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
