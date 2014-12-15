'use strict';

/**
 *  * @ngdoc function
 *   * @name hitMeUpApp.controller:EventCtrl
 *    * @description
 *     * # EventCtrl
 *      * Controller of the hitMeUpApp
 *       */
angular.module('hitMeUpApp')
  .controller('EventCtrl', function ($scope, $http, $rootScope) {
    $scope.maybe = function (){
    };
    $scope.going = function (){
    };
    var posEvents = [];
    var url = 'http://hitmeup.host22.com/';
    var phpFile = 'select-events.php';
    var eventL = {};
    if ($rootScope.chosenEvent) {
      eventL = $rootScope.chosenEvent;
      $scope.eName = eventL.name;
      $scope.eDescription = eventL.description;
      $scope.eType = eventL.category_name;
      $scope.eStartDate = eventL.start_date;
      $scope.eEndDate = eventL.end_date;  
      $scope.eLocation= "Longitude - " + eventL.location_longitude +", Latitude -  " + eventL.location_latitude;
      $scope.eStatus = eventL.event_status;
    } else {
       $http.get(url + phpFile)
         .success(function(response) {
                posEvents = response;
		eventL = posEvents[Math.floor(Math.random() * posEvents.length)];
     		$scope.eName = eventL.name;
     		$scope.eDescription = eventL.description;
	        $scope.eType = eventL.category_name;
    		$scope.eStartDate = eventL.start_date;
     		$scope.eEndDate = eventL.end_date;
     		$scope.eLocation= "Longitude - " + Math.round(eventL.location_longitude*1000000)/1000000 +", Latitude -  " + Math.round(eventL.location_latitude*1000000)/1000000;
     		$scope.eStatus = eventL.event_status;
 	});
   }
   var phpFile2 = 'select-participations.php';
   $http.get(url+phpFile2)
     .success(function(response){
       $scope.names = response;
     });
});
