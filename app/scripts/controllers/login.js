'use strict';
//var mysql = require('../node-mysql-module.js');
/**
 *  * @ngdoc function
 *   * @name hitMeUpApp.controller:LoginCtrl
 *    * @description
 *     * # LoginCtrl
 *      * Controller of the hitMeUpApp
 *       */
angular.module('hitMeUpApp')
  .controller('LoginCtrl', function ($scope, $location, $http, $rootScope) {
    $scope.alerts = false;
    $scope.login = function(){
      var username = $scope.logUsername;
      var password = $scope.logPass;
      var users = [];
      var url = 'http://hitmeup.host22.com/';
      var phpFile = 'select-users.php';
      $scope.closeAlert = function(index) {
        $scope.alerts.splice(index, 1);
      };
      $http.get(url + phpFile)
       .success(function(response) {
          users = response;
          var match = false;
          angular.forEach(users, function(user) {
            if (angular.equals(user.username,username) && angular.equals(user.password,password)) {
              match = true;
              $scope.alerts = false;
            }
          });
          if(match) {
            $rootScope.logSes = username;
            $rootScope.loggedIn = true;
            $location.path('/index');
          } else {
            $scope.alerts = true;
          }
      });
    };
});
