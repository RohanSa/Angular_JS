/**
 * 
 */

angular.module('myApp').controller(
		"EmployeeController",
		[ '$scope', '$log', 'EmployeeService',
				function($scope, $log, EmployeeService) {
					
					var self = this;
					
					$scope.employees = [];
					$scope.employee={};
					$scope.errmsg = '';
					
					

					$scope.getAllEmployees =function() {
						EmployeeService.getEmployees().then(function(response) {
							$log.info('Success: EmployeeController.getAllEmployees()'+response);
							$log.info('Success: EmployeeController.getAllEmployees()'+response.data);
							$scope.employees = response.data;

						}, function(response) {
							$log.info('Failure: EmployeeController.getAllEmployees()'+response);
							$scope.errmsg = response.data;

						});
					};

					$scope.addEmployee = function(emp) {
						
						$log.info($scope.employee);
						
						$log.info(angular.toJson($scope.employee));
						
						var emp = angular.toJson($scope.employee);
			
						EmployeeService.addEmployee(emp).then(function(response) {
							$log.info('Success: EmployeeController.addEmployee()'+response);
							$log.info('Success: EmployeeController.addEmployee()'+response.data);
							$scope.getAllEmployees();

						}, function(response) {
							$log.info('Failure: EmployeeController.addEmployee()'+response);
							$scope.errmsg = response.data;
							$log.info(emp);
							alert("Employee Id "+ $scope.employee['id'] + " already exists or invalid");

						});
					};
					
					$scope.getAllEmployees();

				} ]);