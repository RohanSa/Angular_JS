/**
 * 
 */

angular.module('myApp').factory(
		'EmployeeService',
		[
				'$http',
				'$log',
				function($http, $log) {

					var factories = {
							
							getEmployees : getEmployees,
							addEmployee : addEmployee
					};
					
					
					
					
					
					function getEmployees() {
						
						return $http.get('employee/getallemployees.spring')
								.then(function(response) {
									$log.info('Success: EmployeeService.getAllEmployees()'+response);
									$log.info('Success: EmployeeService.getAllEmployees()'+response.data);
									$log.info(response.data);
									return response ;

								}, function(response) {
									$log.info('Error: EmployeeService.getAllEmployees()'+response);
									$log.info('Error: EmployeeService.getAllEmployees()'+response.data);
									$log.info(response);
									return response;
								});
					};
					
				/*	function addEmployee(formdata) {
						
						return $http.post('employee/addemployee.spring',formdata)
								.then(function(response) {
									$log.info('Success: EmployeeService.addEmployees()'+response);
									$log.info('Success: EmployeeService.addEmployees()'+response.data);
									$log.info(response.data);
									return response ;

								}, function(response) {
									$log.info('Error: EmployeeService.addEmployees()'+response);
									$log.info('Error: EmployeeService.addEmployees()'+response.data);
									$log.info(response);
									return response;
								});
					};*/
					
					function addEmployee(formdata) {
						
						return $http.post('employee/addemployee.spring',formdata);
								
					};
					
					return factories;

				} ]);