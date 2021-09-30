package com.example.demo.Service;

import com.example.demo.Entity.Student;

public interface StudentService {
	
	public int addStudent(Student student);
	public int deleteStudent(int id);
	public Student search(int id) throws Exception;
	public Iterable<Student> getAll();

}
