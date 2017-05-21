/**
 * 
 */

var myApp = angular.module("myApp", []).controller("DataBindingController",
		function($scope) {
			var message ="Welcome to Angular JS";

			$scope.message = message;

		});