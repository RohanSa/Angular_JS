/**
 * 
 */

var myApp = angular.module("myApp", []);

myApp.controller('BindController', [ '$scope', function($scope) {

	$scope.username = '';
	$scope.message = '';

	var greet = function(greetings) {

		$scope.message = greetings + ' ' + $scope.username +' and '+ this.user;
	}
	
	var object = { 'user': 'fred' };
	
	$scope.welcomeuser = angular.bind(object,greet , 'Welcome');
	
	
} ]);