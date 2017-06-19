/**
 * 
 */

var myApp = angular.module("myApp", []);

myApp.controller('TimeoutController', function($scope, $timeout, $log) {

	$scope.message = 'waiting for timeout';

	$scope.dispayMessage = function() {

		$scope.message = 'timeout is completed';

	};

	$scope.promise = $timeout($scope.dispayMessage, 5000);

});