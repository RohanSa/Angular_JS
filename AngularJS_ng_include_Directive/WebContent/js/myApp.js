/**
 * 
 */

var myApp = angular.module("myApp", []).controller("IncludeController",
		function($scope) {

			var pageslist = [ 'includepage1.html','includepage2.html' ];

			$scope.pageslist = pageslist;
			$scope.defaultpage = 'includepage1.html';

		});