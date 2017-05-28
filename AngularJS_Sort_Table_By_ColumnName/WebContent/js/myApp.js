/**
 * 
 */

var myApp = angular.module("myApp", []).controller("SortController",
		function($scope) {

			var employees = [ {
				name : "David",
				company : "Apple",
				age : 35,
				salary : 190000.50,
				role : "Manager",
				dateOfJoining : new Date(2000, 2, 27)
			}, {
				name : "Ben",
				company : "Dell",
				age : 22,
				salary : 80000.00,
				role : "Developer",
				dateOfJoining : new Date("May 20, 2015 08:30:00")
			}, {
				name : "Chris",
				company : "Lenovo",
				age : 28,
				salary : 140000.25,
				role : "BA",
				dateOfJoining : new Date(2010, 12, 1, 09, 20, 00)
			}, {
				name : "Paul",
				company : "Samsung",
				age : 30,
				salary : 16000.00,
				role : "Architect",
				dateOfJoining : new Date(2008, 9, 2)
			}, {
				name : "John",
				company : "citi",
				age : 26,
				salary : 125000.00,
				role : "Developer",
				dateOfJoining : new Date(2011, 7, 1)
			} ];

			$scope.employees = employees;
			$scope.limitrows = employees.length;
			$scope.reverseSort = false;
			$scope.sortcolumn = 'name';

			$scope.sortTable = function(column) {

				if ($scope.sortcolumn == column) {
					$scope.reverseSort = !$scope.reverseSort;
					//$scope.sortcolumn = column;
				} else {
					$scope.reverseSort = false;
					$scope.sortcolumn = column;
				}

			};

			$scope.sortClass = function(column) {

				if ($scope.sortcolumn == column) {

					return $scope.reverseSort ? 'arrow-down' : 'arrow-up';
				}

				return '';
			}

		});