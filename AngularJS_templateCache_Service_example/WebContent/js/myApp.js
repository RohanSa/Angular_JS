/**
 * 
 */

var myApp = angular.module("myApp", []);

myApp.controller('TemplatecahceController', function($scope, $timeout, $log) {

	$scope.message = 'Template Cache';

});

myApp.run(function($templateCache) {
	
	$templateCache.put('startup.html', '<strong>Template is loaded !!</strong>');
})