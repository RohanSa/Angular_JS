/**
 * 
 */

var myApp = angular.module("myApp", []).controller("OneWayBindController",
		function($scope) {

			$scope.msg = "Hi";
			
			$scope.color ="Red";
			
			$scope.resetValue = function(){
				
				 $scope.msg = undefined;
			};

		});