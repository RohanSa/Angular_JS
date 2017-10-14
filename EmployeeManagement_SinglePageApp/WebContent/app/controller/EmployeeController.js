/**
 * 
 */

angular
		.module('employeeApp')
		.controller(
				"EmployeeController",
				[
						'$scope',
						'$log',
						'$window',
						'EmployeeService',
						function($scope, $log,$window, EmployeeService) {

							var self = this;

							$log.info("In EmployeeController ");

							$scope.message = 'Test Messgae';

							$scope.languages = [];
							$scope.languagesSelected = [];
							$scope.employee = {};
							$scope.employees = [];
							$scope.errmsg = '';
							$scope.successmsg = '';

							$scope.getAllEmployees = function() {
								$log.info("In getAllEmployees()");
								EmployeeService
										.getAllEmployees()
										.then(
												function(response) {
													$log
															.info('Success: EmployeeController.getAllEmployees()'
																	+ response);
													$log
															.info('Success: EmployeeController.getAllEmployees()'
																	+ response.data);
													$scope.employees = response.data;

												},
												function(response) {
													$log
															.info('Failure: EmployeeController.getAllEmployees()'
																	+ response);
													$scope.errmsg = response.data;

												});
							};

							$scope.getEmployee = function(id) {
								$log.info('Form data '+ id);
							
								EmployeeService
										.getEmployee(id)
										.then(
												function(response) {
													$log
															.info('Success: EmployeeController.getEmployee()'
																	+ response);
													$log
															.info('Success: EmployeeController.getEmployee()'
																	+ response.data);
													$scope.employees.length = 0;
													$scope.employees.push(response.data);

												},
												function(response) {
													$log
															.info('Failure: EmployeeController.getEmployee()'
																	+ response);
													$scope.errmsg = response.data;
													$scope.employees.length = 0;
													$window.alert('Employee id not found');	
												});
							};

							$scope.addEmployee = function(employee) {

								$log.info($scope.employee);

								$log.info(angular.toJson($scope.employee));

								var emp = angular.toJson($scope.employee);

								EmployeeService
										.addEmployee(emp)
										.then(
												function(response) {
													$log
															.info('Success: EmployeeController.addEmployee()'
																	+ response);
													$log
															.info('Success: EmployeeController.addEmployee()'
																	+ response.data);
													$scope.successmsg = 'Employee added successfully';
													
													$window.alert($scope.successmsg);
													$scope.employee = {};

												},
												function(response) {
													$log
															.info('Failure: EmployeeController.addEmployee()'
																	+ response);
													$scope.errmsg = 'Employee cannot be added';
													$log.info(emp);
													$window.alert($scope.errmsg);
													$scope.employee = {};

												});
							};

							$scope.removeEmployee = function(employee) {

								// $log.info($scope.employee);

								$log.info(angular.toJson($scope.employee));

								var emp = angular.toJson($scope.employee);

								EmployeeService
										.deleteEmployee(emp)
										.then(
												function(response) {
													$log
															.info('Success: EmployeeController.addEmployee()'
																	+ response);
													$log
															.info('Success: EmployeeController.addEmployee()'
																	+ response.data);
													$scope.getAllEmployees();

												},
												function(response) {
													$log
															.info('Failure: EmployeeController.addEmployee()'
																	+ response);
													$scope.errmsg = response.data;
													$log.info(emp);
													alert("Employee Id "
															+ $scope.employee['id']
															+ " already exists or invalid");

												});
							};

							$scope.getLanguages = function() {
								EmployeeService
										.getLanguages()
										.then(
												function(response) {
													$log
															.info('Success: EmployeeController.getLanguages()'
																	+ response);
													$log
															.info('Success: EmployeeController.getLanguages()'
																	+ response.data);
													$scope.languages = response.data;

												},
												function(response) {
													$log
															.info('Failure: EmployeeController.getAllEmployees()'
																	+ response);
													$scope.errmsg = response.data;

												});
							};

							$scope.submitForm = function(isValid, employee) {

								// check to make sure the form is completely
								// valid
								if (isValid) {
									alert('Form is valid...');

									$log.info(employee);

									// Gender

									if (employee.gender == 1) {
										employee.gender = 'Male';
									} else {
										employee.gender = 'Female';
									}

									$log.info(employee.languages)

									for ( var key in employee.languages) {
										$log.info(key);

										var langValue = this
												.getValueBylanguageId(
														this.languages, key);
										var lang = {
											lid : key,
											lname : langValue
										};
										$log.info("lid " + key + " Value : [ "
												+ langValue);
										$log.info("In submitForm()" + lang);
										$scope.languagesSelected
												.push(langValue);

									}

									employee.languages = $scope.languagesSelected;

									$log.info(employee);

									// EmployeeService.addEmployee(employee);
									this.addEmployee(employee);

								}

							};

							$scope.calculateSomeSelected = function(object) {

								$log.info('In someSelected()');

								for ( var key in object) {
									if (object.hasOwnProperty(key)) {
										console.log("Key : " + key
												+ " Value : " + object[key]);
									}
								}
								if (object == undefined)
									return false;

								/*
								 * return Object.keys(object).some(function(key) {
								 * return object[key]; });
								 */

								$scope.someSelected = Object.keys(object).some(
										function(key) {
											return object[key];
										});
							};

							$scope.getValueBylanguageId = function(arr, value) {

								for (var i = 0, iLen = arr.length; i < iLen; i++) {

									$log.info("arr[i].lid " + arr[i].lid
											+ " arr[i].lname " + arr[i].lname)
									if (arr[i].lid == value)
										return arr[i].lname;
								}
							};

							$scope.getLanguages();

							
							$scope.sort = function(keyname){
						        $scope.sortKey = keyname;   
						        $scope.reverse = !$scope.reverse; 
						    }
							
							
						} ]);