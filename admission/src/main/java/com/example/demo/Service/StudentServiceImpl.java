package com.example.demo.Service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.Entity.Student;
import com.example.demo.Repository.StudentRepository;

@Service
public class StudentServiceImpl implements StudentService {
	
	@Autowired
	private StudentRepository studentRepository;

	@Override
	public int addStudent(Student student) {
		studentRepository.save(student);
		return student.getId();
	}

	@Override
	public int deleteStudent(int id) {
		studentRepository.deleteById(id);
		return id;
	}

	@Override
	public Student search(int id) throws Exception {
		Optional<Student> studentDetails = studentRepository.findById(id);
		Student student = studentDetails.orElseThrow(() -> new Exception("Service.STUDENT_NOT_FOUND"));
		return student;
	}

	@Override
	public Iterable<Student> getAll() {
		Iterable<Student> students = studentRepository.findAll();
		return students;
	}
	
	

}
