/**
 * 
 */

var myApp = angular.module("myApp", []);

myApp.controller('IntervalController', function($scope, $interval, $log) {

	$scope.counter = 0;
	$scope.counter2 = 0;
	
	
	$scope.incrementCounter = function() {

		$scope.counter = $scope.counter + 1;
		$log.info('Counter1 value is ' + $scope.counter)
	};

	$scope.incrementCounter2 = function() {

		if ($scope.counter2 == 2) {
			$interval.cancel($scope.promise2);
		} else {
			$scope.counter2 = $scope.counter2 + 1;
		}
		$log.info('Counter2 value is ' + $scope.counter)
	};
	

	$scope.promise = $interval($scope.incrementCounter, 2000, 5);

	$scope.promise2 = $interval($scope.incrementCounter2, 2000, 5);

});