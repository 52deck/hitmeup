'use strict';

/**
 *  * @ngdoc function
 *   * @name hitMeUpApp.controller:RegisterCtrl
 *    * @description
 *     * # RegisterCtrl
 *      * Controller of the hitMeUpApp
 *       */
angular.module('hitMeUpApp')
  .controller('RegisterCtrl', function ($scope, $rootScope, $http) {
    $scope.createUser = function() {
        console.log($scope.cUsername + $scope.cEmail);
    	var request = $http({
    		method: 'post',
    		url: 'http://hitmeup.host22.com/create-user.php',
    		data: {
    			username: $scope.cUsername,
    			password: $scope.cPassword1,
    			email_address: $scope.cEmail,
    			date_of_birth: $scope.cDOB,
    			last_name: $scope.cLName,
    			given_name: $scope.cGName,
    			contact_number: $scope.cCNumber,
    			sponsor: 0
    		},
    		headers: {'Content-Type' : 'application/x-www-form-urlencoded'}
    	});

    	request.success(function (data) {
    		console.log(data);
    	});
    };
  });

