package com.emp.dto;

import java.util.List;

public class EmployeeDTO {

	private static final long serialVersionUID = 1L;

	private int id;
	private String name;
	private String gender;
	private List<String> languages;
	private String email;
	private double salary;
	private String panid;
	
	

	public EmployeeDTO() {
		super();
		// TODO Auto-generated constructor stub
	}

	
	public EmployeeDTO(int id, String name, String gender, List<String> languages, String email, double salary,String panId) {
		super();
		this.id = id;
		this.name = name;
		this.gender = gender;
		this.languages = languages;
		this.email = email;
		this.salary = salary;
		this.panid=panId;
	}


	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}


	public double getSalary() {
		return salary;
	}

	public void setSalary(double salary) {
		this.salary = salary;
	}

	public String getGender() {
		return gender;
	}

	public void setGender(String gender) {
		this.gender = gender;
	}

	public List<String> getLanguages() {
		return languages;
	}

	public void setLanguages(List<String> languages) {
		this.languages = languages;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}


	


	public String getPanid() {
		return panid;
	}


	public void setPanid(String panid) {
		this.panid = panid;
	}


	@Override
	public String toString() {
		return "EmployeeDTO [id=" + id + ", name=" + name + ", gender=" + gender + ", languages=" + languages
				+ ", email=" + email + ", salary=" + salary + ", panId=" + panid + "]";
	}



}
