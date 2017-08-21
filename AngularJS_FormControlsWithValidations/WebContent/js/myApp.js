/**
 * 
 */

var myApp = angular.module("myApp", []).controller("FormController",
		function($scope, $log) {
			$scope.msg = '';
			$scope.checkboxinvalid = false;
			$scope.radioboxinvalid = true;

			$scope.arrlistselected = [];
			$scope.arrlist = [ {

				"lid" : 1,

				"lname" : "Java"

			}, {

				"lid" : 2,

				"lname" : "Angular JS"

			}, {

				"lid" : 3,

				"lname" : "Hibernate"

			} ];

			$scope.someselectedconstant = false;

			$scope.submit = function() {
				if ($scope.employee.gender != undefined){
					$scope.radioboxinvalid = true;
					
				}
				$log.info($scope.employee.languages);

				$scope.msg = 'Form Validated';
			};

			$scope.someSelected = function(object) {

				$log.info('In someSelected()');

				return  Object.keys(object).some(function(key) {
					return object[key];
				});
			};
		

});