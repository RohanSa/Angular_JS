/**
 * 
 */

var myApp = angular.module("myApp", []);

myApp.factory('EmployeeCache', function($cacheFactory) {
	return $cacheFactory('myData');
})

myApp.controller('CacheController', [ '$scope', 'EmployeeCache',
		function($scope, EmployeeCache, $log) {

			$scope.employeeId = "";
			$scope.employeeName = "";
			$scope.keys = [];

			$scope.cache = EmployeeCache;

			$scope.keys.push('t');
			$scope.cache.put('t', 'tt');

			$scope.addTocache = function(employeeId, employeeName) {
				if ($scope.cache.get(employeeId) === undefined) {
					$scope.keys.push(employeeId);
				}

				$scope.cache.put(employeeId, employeeName);
			};

			$scope.removeFromcache = function(employeeId) {

				$scope.cache.remove(employeeId)

				$scope.keys = $scope.keys.filter(function(item) {
					return item !== employeeId
				})
			};

			$scope.removeAll = function(employeeId, employeeName) {
				$scope.keys = [];
				$scope.cache.removeAll();
			};

		} ]);