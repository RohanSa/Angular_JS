/**
 * 
 */

var myApp = angular.module("employeeApp", [ "ngRoute","angularUtils.directives.dirPagination"]).config(
		function($routeProvider) {

			$routeProvider.when("/addEmployee", {

				templateUrl : "AddEmployee.html",
				controller : "EmployeeController"

			}).when("/viewEmployees", {

				templateUrl : "ViewEmployees.html",
				controller : "EmployeeController"

			}).when("/deleteEmployees", {

				templateUrl : "DeleteEmployee.html",
				controller : "EmployeeController"

			}).otherwise({

				template : "<h2>This is employee management application</h2>"

			});

		});