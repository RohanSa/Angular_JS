package com.restcontroller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.dto.EmployeeDTO;
import com.service.EmployeeService;

@RestController
@RequestMapping(value = "employee")
public class EmployeeController {

	@Autowired
	private EmployeeService employeeService;

	@GetMapping(value = "getallemployees.spring")
	public ResponseEntity<List<EmployeeDTO>> getEmployees() {
		System.out.println("In getEmployees()");

		List<EmployeeDTO> employees = employeeService.getAllEmployees();

		if (employees != null && employees.size() > 0) {
			return new ResponseEntity<List<EmployeeDTO>>(employees, HttpStatus.OK);
		}
		return new ResponseEntity<>(HttpStatus.NO_CONTENT);

	}

	@PostMapping(value = "addemployee.spring")
	public ResponseEntity<Void> addEmployee(@RequestBody EmployeeDTO employeeDTO) {
		System.out.println("In addEmployee()");
		System.out.println(employeeDTO);
		if ((employeeService.getEmployeeDetailsById(employeeDTO.getId())) == null) {
			employeeService.addEmployee(employeeDTO);
			return new ResponseEntity<>(HttpStatus.CREATED);
		}
		return new ResponseEntity<>(HttpStatus.CONFLICT);

	}

}
