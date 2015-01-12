'use strict';

/**
 * @ngdoc function
 * @name angularjokerApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularjokerApp
 */
angular.module('angularjokerApp')
  .controller('MainCtrl', function ($scope,$http) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ]; 
    $scope.status=200;   
    $scope.login = function() {
	    $http({
        method:'POST',
        url:Host+'/login',
        params:{
          username:'COMACLE.PATRICE@gmail.com',
          password:'password'
        }
      }).success(function(data,status,headers,config){
	        $scope.status=status;
	        // $scope.account = angular.copy(data['info']);
	    }).error(function(data,status,headers,config){
          $scope.status=status;
	    });
    }
    $scope.profile = function(id) {
      $http({
        method:'GET',
        url:Host+'/profile/'+id,
      }).success(function(data,status,headers,config){
          $scope.status=status;
          // $scope.account = angular.copy(data['info']);
      }).error(function(data,status,headers,config){
          $scope.status=status;
      });
    }
    $scope.login();
    // $scope.profile('539455804751740928');
  });
