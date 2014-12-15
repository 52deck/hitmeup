'use strict';

/**
 *  * @ngdoc function
 *   * @name hitMeUpApp.controller:CreateEventCtrl
 *    * @description
 *     * # CreateEventCtrl
 *      * Controller of the hitMeUpApp
 *       */
angular.module('hitMeUpApp')
  .controller('CreateEventCtrl', function ($scope, $rootScope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
