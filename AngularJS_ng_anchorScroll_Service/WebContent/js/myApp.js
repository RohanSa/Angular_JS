/**
 * 
 */

var myApp = angular.module("myApp", []).controller("ScrollController",
		function($scope, $location, $anchorScroll) {

			$scope.goTo = function(location) {

				$location.hash(location);

				$anchorScroll();
			};

		});