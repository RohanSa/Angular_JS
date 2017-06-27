/**
 * 
 */

var myApp = angular.module("myApp", []);

myApp.config([ '$anchorScrollProvider', function($anchorScrollProvider) {
	$anchorScrollProvider.disableAutoScrolling(true);
}]);

myApp.controller("ScrollController",
		function($scope, $location, $anchorScroll) {

			$scope.goTo = function(location) {

				$location.hash(location);
				/*If automatic scrolling is disabled, one must explicitly call $anchorScroll() 
				 * in order to scroll to the element related to the current hash.*/

				$anchorScroll();
			};

		});