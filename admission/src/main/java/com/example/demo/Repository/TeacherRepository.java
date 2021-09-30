package com.example.demo.Repository;

import org.springframework.data.repository.CrudRepository;

import com.example.demo.Entity.Teacher;

public interface TeacherRepository extends CrudRepository<Teacher, Integer> {

}
