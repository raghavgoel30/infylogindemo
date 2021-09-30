package com.example.demo.Service;

import java.util.Optional;

import com.example.demo.Entity.Admin;

public interface AdminService {
	
	public Optional<Admin> login(String userName,String password) throws Exception;

}
