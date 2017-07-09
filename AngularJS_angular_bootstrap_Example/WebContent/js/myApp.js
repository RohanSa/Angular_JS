/**
 * 
 */

var myApp = angular.module("myApp", []).controller("BootstrapController",
		function($scope) {

			$scope.name = "Bootstrap";
		});

angular.element(document).ready(function() {
    angular.bootstrap(document, ['myApp']);
});