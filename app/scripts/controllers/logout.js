
'use strict';

/**
 *  * @ngdoc function
 *   * @name hitMeUpApp.controller:LogoutCtrl
 *    * @description
 *     * # LogoutCtrl
 *      * Controller of the hitMeUpApp
 *       */
angular.module('hitMeUpApp')
  .controller('LogoutCtrl', function ($scope, $rootScope) {
    $rootScope.loggedIn = false;
    $rootScope.logSes = '';
  });
