package com.emp.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.emp.dto.EmployeeDTO;
import com.emp.service.*;

@RestController
@RequestMapping("emp")
public class EmployeeController {

	@Autowired
	private EmployeeService employeeService;

	@PostMapping(value = "addemployee.spring")
	public ResponseEntity createEmployee(@RequestBody EmployeeDTO employeeDTO) {
		System.out.println("In createEmployee() ");
		if (employeeService.addEmpplyee(employeeDTO))
			return new ResponseEntity<>(HttpStatus.OK);

		return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
	}

	@PostMapping(value = "removeemployee.spring")
	public ResponseEntity removeEmployee(@RequestBody int id) {

		System.out.println("In removeEmployee()");
		if (employeeService.deleteEmpplyee(id))
			return new ResponseEntity<>(HttpStatus.OK);

		return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
	}

	@GetMapping(value = "getemployee.spring")
	public ResponseEntity<EmployeeDTO> getEmployee(@RequestBody int id) {
		System.out.println("In getEmployee()");
		if (employeeService.getEmployee(id) != null) {
			EmployeeDTO employeeDTO = employeeService.getEmployee(id);

			return new ResponseEntity<>(employeeDTO, HttpStatus.OK);
		}
		return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
	}

	@GetMapping(value = "getallemployees.spring")
	public ResponseEntity getAllEmployees() {
		System.out.println("In getAllEmployees()");
		if (employeeService.getAllEmployee().size() > 0) {

			return new ResponseEntity<>(employeeService.getAllEmployee(), HttpStatus.OK);
		}
		return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
	}

}
