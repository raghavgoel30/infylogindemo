package com.example.demo.Repository;

import org.springframework.data.repository.CrudRepository;

import com.example.demo.Entity.Student;

public interface StudentRepository extends CrudRepository<Student, Integer> {

}
