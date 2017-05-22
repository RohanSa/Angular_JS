/**
 * 
 */

var myApp = angular.module("myApp", []);

myApp.controller("RepeatController", function($scope) {
	
	var students = [
			{id : 1, name :"Amit"},
			{id : 2, name :"Vivek"},
			{id : 3, name :"Yogesh"}
	];
	
	$scope.students = students;
})