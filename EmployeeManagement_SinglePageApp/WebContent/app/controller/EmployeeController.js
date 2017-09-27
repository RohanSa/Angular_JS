/**
 * 
 */

angular.module('employeeApp').controller(
		"EmployeeController",
		[ '$scope', '$log', 'EmployeeService',
				function($scope, $log, EmployeeService) {
					
					var self = this;
					
					$log.info("In EmployeeController ");
					 
					$scope.message ='Test Messgae';
					
					$scope.languages = [{"lid":1,"lname":'Java'},{"lid":2,"lname":'C'},{"lid":3,"lname":'C#'},{"lid:":4,"lname":'Python'}];
					$scope.employee={};
					$scope.errmsg = '';
					$scope.successmsg = '';
					
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
							$scope.successmsg='Employee added successfully';

						}, function(response) {
							$log.info('Failure: EmployeeController.addEmployee()'+response);
							$scope.errmsg = 'Employee cannot be added';
							$log.info(emp);
							alert($scope.errmsg);

						});
					};
					

					$scope.removeEmployee = function(emp) {
						
						//$log.info($scope.employee);
						
						$log.info(angular.toJson($scope.employee));
						
						var emp = angular.toJson($scope.employee);
			
						EmployeeService.deleteEmployee(emp).then(function(response) {
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
					
					
					$scope.submitForm = function(isValid) {

						// check to make sure the form is completely valid
						if (isValid) {
							alert('Form is valid...');
						}

					};
					
					

				} ]);