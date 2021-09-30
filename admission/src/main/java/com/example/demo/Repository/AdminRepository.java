package com.example.demo.Repository;

import java.util.Optional;

import org.springframework.data.repository.CrudRepository;

import com.example.demo.Entity.Admin;

public interface AdminRepository extends CrudRepository<Admin,Integer>{
	
	public Optional<Admin> findByUserNameAndPassword(String userName,String Password) throws Exception;

}
