package com.emp.dao;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.NavigableMap;
import java.util.TreeMap;

import org.springframework.stereotype.Repository;

import com.emp.dto.EmployeeDTO;

@Repository
public class EmployeeDao {

	private static NavigableMap<Integer, EmployeeDTO> empStorage = new TreeMap<>();

	//private volatile int idCounter = 0;

	static {

		empStorage.put(1, new EmployeeDTO(1, "David", "Male", new ArrayList<>(Arrays.asList("java", "C#")),
				"david@gmail.com", 25000, "D123"));
		empStorage.put(2, new EmployeeDTO(1, "Kim", "Female", new ArrayList<>(Arrays.asList("java", "python")),
				"kim@gmail.com", 35000, "K123"));
		empStorage.put(3, new EmployeeDTO(1, "Chris", "Male", new ArrayList<>(Arrays.asList("C")), "chris@ymail.com",
				55000, "C123"));
	}

	public int getMaxId() {
		return empStorage.lastKey();
	}

	public boolean add(EmployeeDTO dto) {

		if (empStorage.get(dto.getId()) != null) {
			return false;
		}
		empStorage.put(dto.getId(), dto);
		return true;

	}

	public EmployeeDTO getbyId(int id) {

		if (empStorage.get(id) != null) {
			return empStorage.get(id);
		}

		return null;

	}

	public List<EmployeeDTO> getAll() {

		return new ArrayList<>(empStorage.values());

	}

	public boolean remove(int id) {

		if (empStorage.get(id) != null) {
			empStorage.remove(id);
			return true;
		}

		return false;

	}
}
