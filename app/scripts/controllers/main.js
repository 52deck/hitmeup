'use strict';

/**
 * @ngdoc function
 * @name hitMeUpApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the hitMeUpApp
 */
angular.module('hitMeUpApp')
  .controller('MainCtrl', function ($scope, $http, $rootScope) {
    $scope.loggedIn = false;
    if ($rootScope.loggedIn){
      $scope.loggedIn = true;
    } else {
      $scope.loggedIn = false;
    }
    var url = 'http://hitmeup.host22.com/';
    var phpFile = 'select-events.php';
    $scope.randomEvent = function () {
      $http.get(url + phpFile)
        .success(function(response) {
          var posEvents = response;
          $rootScope.chosenEvent = posEvents[Math.floor(Math.random() * posEvents.length)];
    });
  };
});
