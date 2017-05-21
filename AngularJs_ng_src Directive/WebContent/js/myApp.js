/**
 * 
 */

var myApp = angular.module("myApp", []).controller("SourceController",
		function($scope) {
			var cartoon = {
				name : "Tom and Jerry",
				path : "img/TomandJerry.jpg",
				description : "Tom and Jerry image"

			};

			$scope.cartoon = cartoon;

		});