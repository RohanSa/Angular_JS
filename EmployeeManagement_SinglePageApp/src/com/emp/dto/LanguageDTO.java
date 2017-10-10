package com.emp.dto;

import java.io.Serializable;

public class LanguageDTO implements Serializable{
	
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	private int lid;
	private String lname;

	public LanguageDTO() {
		super();
		// TODO Auto-generated constructor stub
	}

	public LanguageDTO(int lid, String lname) {
		super();
		this.lid = lid;
		this.lname = lname;
	}

	public int getLid() {
		return lid;
	}

	public void setLid(int lid) {
		this.lid = lid;
	}

	public String getLname() {
		return lname;
	}

	public void setLname(String lname) {
		this.lname = lname;
	}

	@Override
	public String toString() {
		return "LanguageDTO [lid=" + lid + ", lname=" + lname + "]";
	}

}
