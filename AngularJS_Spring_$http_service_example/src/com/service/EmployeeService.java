package com.service;

import java.util.List;

import com.dto.EmployeeDTO;

public interface EmployeeService {

	EmployeeDTO getEmployeeDetailsById(int id);

	List<EmployeeDTO> getAllEmployees();

	boolean addEmployee(EmployeeDTO employee);

}