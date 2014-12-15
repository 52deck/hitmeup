'use strict';

/**
 * @ngdoc overview
 * @name hitMeUpApp
 * @description
 * # hitMeUpApp
 *
 * Main module of the application.
 */
 /**
  *  var mysql = require('mysql');
  *  var nodeMysql = require('./node-mysql-module.js');
  * var nodeMysql2 = require('./node-mysql-module-v2.js');
 */
angular
  .module('hitMeUpApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
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
      .when('/create-event', {
      	templateUrl: 'views/create-event.html',
      	controller: 'CreateEventCtrl'
      })
      .when('/event', {
      	templateUrl: 'views/event.html',
      	controller: 'EventCtrl'
      })
      .when('/event-listings', {
      	templateUrl: 'views/event-listings.html',
      	controller: 'EventListingsCtrl'
      })
      .when('/settings', {
      	templateUrl: 'views/settings.html',
      	controller: 'SettingsCtrl'
      })
      .when('/login', {
        templateUrl: 'views/login.html',
        controller: 'LoginCtrl'
      })
      .when('/logout', {
        templateUrl: 'views/logout.html',
        controller: 'LogoutCtrl'
      })
      .when('/register', {
        templateUrl: 'views/register.html',
        controller: 'RegisterCtrl'
      })
      .when('/index', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
