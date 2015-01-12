'use strict';


/**
 * @ngdoc overview
 * @name angularjokerApp
 * @description
 * # angularjokerApp
 *
 * Main module of the application.
 */
angular
  .module('angularjokerApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(['$httpProvider', function($httpProvider){
    // $httpProvider.defaults.withCredentials = true;
    $httpProvider.defaults.headers.post={'Content-Type':'application/x-www-form-urlencoded'};
    $httpProvider.defaults.transformRequest=function(obj){
      var str=[];
      for(var p in obj) 
        str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
      return str.join("&");
    }
  }])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/login', {
        templateUrl: 'views/login.html',
        controller: 'LoginCtrl'
      })
      .when('/subscribe', {
        templateUrl: 'views/subscribe.html',
        controller: 'SubscribeCtrl'
      })
      .when('/profileNotFound', {
        templateUrl: 'views/profileNotFound.html',
        controller: 'SubscribeCtrl'
      })
      .when('/profileFound', {
        templateUrl: 'views/profileFound.html',
        controller: 'SubscribeCtrl'
      })
      .when('/cliniques', {
        templateUrl: 'views/cliniques.html',
        controller: 'CliniquesCtrl'
      })
      .when('/speciality', {
        templateUrl: 'views/speciality.html',
        controller: 'SpecialityCtrl'
      })
      .when('/suggestions', {
        templateUrl: 'views/suggestions.html',
        controller: 'SuggestionsCtrl'
      })
      .when('/bookmarks', {
        templateUrl: 'views/bookmarks.html',
        controller: 'BookmarkCtrl'
      })
      .when('/followers', {
        templateUrl: 'views/followers.html',
        controller: 'FollowCtrl'
      })
      .when('/profile', {
        templateUrl: 'views/profile.html',
        controller: 'ProfileCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
