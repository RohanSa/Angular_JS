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
						
						return $http.get('employee/getallemployees.spring');
					};
					
					
					function addEmployee(formdata) {
						
						return $http.post('employee/addemployee.spring',formdata);
								
					};
					
					return factories;

				} ]);