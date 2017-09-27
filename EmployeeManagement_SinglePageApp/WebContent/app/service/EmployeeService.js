/**
 * 
 */

angular.module('employeeApp').factory('EmployeeService',
		[ '$log', '$http', function($log, $http) {

			var factories = {
					
					getEmployee : getEmployee,
					addEmployee : addEmployee,
					getAllEmployees : getAllEmployees,
					deleteEmployee:deleteEmployee
			};
			
			function getEmployee(formdata) {
				
				return $http.get('emp/getemployee.spring',formdata);
			};

			function getAllEmployees() {
				
				return $http.get('emp/getallemployees.spring');
			};

			
			function addEmployee(formdata) {
				
				return $http.post('emp/addemployee.spring',formdata);
						
			};
			
			function deleteEmployee(formdata) {
				
				return $http.post('emp/removeemployee.spring',formdata);
			};

			
			return factories;

			
			
		} ]);