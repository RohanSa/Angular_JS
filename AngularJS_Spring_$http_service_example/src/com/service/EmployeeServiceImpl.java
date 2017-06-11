package com.service;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.TreeMap;

import org.springframework.stereotype.Service;

import com.dto.EmployeeDTO;

@Service
public class EmployeeServiceImpl implements EmployeeService {

	private static final TreeMap<Integer, EmployeeDTO> employeeStore = new TreeMap();

	static {
		EmployeeDTO employeeDTO = new EmployeeDTO();

		employeeDTO.setId(1);
		employeeDTO.setName("Test");
		employeeDTO.setRole("TestRole");

		employeeStore.put(employeeDTO.getId(), employeeDTO);
	}

	@Override
	public EmployeeDTO getEmployeeDetailsById(int id) {

		return employeeStore.get(id);
	}

	@Override
	public List<EmployeeDTO> getAllEmployees() {

		return new ArrayList<EmployeeDTO>(employeeStore.values());
	}

	@Override
	public boolean addEmployee(EmployeeDTO employee) {
		if (employee != null) {
			System.out.println("employeeStore.lastKey() : "+ employeeStore.lastKey());
			Integer id = employeeStore.lastKey();
			if(employee.getId() == 0)
				 employee.setId(id+1);
			
			employeeStore.put((id+1), employee);
			return true;
		}
		return false;
	}

}
