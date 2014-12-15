'use strict';

/**
 * @ngdoc function
 * @name hitMeUpApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the hitMeUpApp
 */
angular.module('hitMeUpApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
