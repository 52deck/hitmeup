'use strict';

/**
 *  * @ngdoc function
 *   * @name hitMeUpApp.controller:SettingsCtrl
 *    * @description
 *     * # SettingsCtrl
 *      * Controller of the hitMeUpApp
 *       */
angular.module('hitMeUpApp')
  .controller('SettingsCtrl', function ($scope, $rootScope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
