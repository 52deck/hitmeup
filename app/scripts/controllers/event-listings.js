'use strict';

// var nmysql = require('./scripts/node-mysql-module.js')
/**
 *  * @ngdoc function
 *   * @name hitMeUpApp.controller:EventListingsCtrl
 *    * @description
 *     * # EventListingsCtrl
 *      * Controller of the hitMeUpApp
 *       */
angular.module('hitMeUpApp')
  .controller('EventListingsCtrl', function ($scope, $rootScope, $http) {
    $scope.events = [];
    $scope.categories = [];
    var url = 'http://hitmeup.host22.com/';
    var phpFile = 'select-events.php';
    var phpFile2 = 'select-categories.php';
    $http.get(url + phpFile)
    	.success(function(response) {
    		$scope.events = response;
    	});
    $http.get(url + phpFile2)
        .success(function(response) {
                $scope.categories = response;
        });
    $scope.eventClick = function ($index) {
      $rootScope.chosenEvent = $scope.events[$index];
    };
  });

