/**
 * 
 */

var myApp = angular.module("myApp", ["ngSanitize"]).controller("InterpolateController",
		function($scope, $interpolate,$log) {


		var emp1 = { name : '<strong>Bill</strong}}'};
	
		var emp2 = { name : undefined};
		
		var exp1 = $interpolate('Hello {{name}}');
		
		$log.info(exp1(emp1));
		
		$scope.result1 = $interpolate('Hello {{name}}')(emp1);

		var exp2 = $interpolate('Hello {{name}}',true,null,true);
		
		
		$log.info(exp2(emp2));

		$scope.result2 = exp2(emp2);
		
		});