/**
 * 
 */

var myApp = angular.module("myApp", []);

myApp.controller("RootScopeController", function($rootScope,$scope,$log) {

	$log.info("Start of RootScopeController");
	
	$rootScope.msg1 = "Root scope msg";


	$log.info("End of RootScopeController");
	
});

myApp.controller("ScopeController", function($rootScope,$scope, $log) {

	$log.info("ScopeController start");
	
	$scope.msg = "scope msg";

	$log.info($rootScope);
	
	$log.info($rootScope.msg1);

	$scope.rootscopemsg = $rootScope.msg1;
	
	$log.info("ScopeController End");
});