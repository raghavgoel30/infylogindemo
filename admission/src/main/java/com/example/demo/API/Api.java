package com.example.demo.API;

import java.util.Optional;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.Entity.Admin;
import com.example.demo.Entity.Student;
import com.example.demo.Entity.Teacher;
import com.example.demo.Service.AdminService;
import com.example.demo.Service.StudentService;
import com.example.demo.Service.TeacherService;

@RestController
@CrossOrigin
@Transactional
public class Api {
	
	@Autowired
	private StudentService studentService;
	
	@Autowired
	private TeacherService teacherService;
	
	@Autowired
	private AdminService adminService;
	
	@GetMapping("/students")
	public Iterable<Student> getStudents(){
		return studentService.getAll();
	}
	
	@GetMapping("/teachers")
	public Iterable<Teacher> getTeachers(){
		return teacherService.getAll();
	}
	
	@PostMapping("/addStudent")
	public int registerStudent(@RequestBody Student student) {
		return studentService.addStudent(student);
	}
	
	@PostMapping("/addTeacher")
	public int registerTeacher(@RequestBody Teacher teacher) {
		return teacherService.addTeacher(teacher);
	}

	@GetMapping("/deleteStudent/{id}")
	public int deleteStudent(@PathVariable int id) {
		return studentService.deleteStudent(id);
	}
	
	@GetMapping("/deleteTeacher/{id}")
	public int deleteTeacher(@PathVariable int id) {
		return teacherService.deleteTeacher(id);
	}
	
	@PostMapping("/login")
	public Optional<Admin> login(@RequestBody Admin admin) throws Exception{
		String userName = admin.getUserName();
		String password = admin.getPassword();
		Optional<Admin> adminDetails= adminService.login(userName, password);
		if(adminDetails.isEmpty()) {
			throw new Exception("Bad REquest");
		}
		return adminDetails;
	}
}
