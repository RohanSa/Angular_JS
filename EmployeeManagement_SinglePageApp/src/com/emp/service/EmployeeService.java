package com.emp.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.emp.dao.EmployeeDao;
import com.emp.dto.EmployeeDTO;

@Service
public class EmployeeService {

	@Autowired
	private EmployeeDao employeeDao;

	public boolean addEmpplyee(EmployeeDTO dto) {

		boolean status = Boolean.FALSE;
		if ((employeeDao.getbyId(dto.getId())) != null) {
			status = employeeDao.add(dto);

		}

		return status;

	}

	public EmployeeDTO getEmployee(int id) {

		boolean status = Boolean.FALSE;
		EmployeeDTO dto = employeeDao.getbyId(id);

		return dto;

	}

	public List<EmployeeDTO> getAllEmployee() {

		return employeeDao.getAll();

	}

	public boolean deleteEmpplyee(int id) {

		boolean status = Boolean.FALSE;
		if ((employeeDao.getbyId(id)) != null) {
			status = employeeDao.remove(id);

		}

		return status;

	}

}
