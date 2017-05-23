/**
 * 
 */

var myApp = angular.module("myApp", []).controller("EventController",
		function($scope) {

			var name = "";
			$scope.name = name;
			
			$scope.onBlurMethod = function(name) {
				$scope.welcomeName = 'Welcome' + name;

			}

		});