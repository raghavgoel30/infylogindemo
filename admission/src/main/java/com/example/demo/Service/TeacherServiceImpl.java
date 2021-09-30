package com.example.demo.Service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.Entity.Teacher;
import com.example.demo.Repository.TeacherRepository;

@Service
public class TeacherServiceImpl implements TeacherService {

	@Autowired
	private TeacherRepository teacherRepository;
	
	@Override
	public int addTeacher(Teacher teacher) {
		teacherRepository.save(teacher);
		return teacher.getId();
	}

	@Override
	public int deleteTeacher(int id) {
		teacherRepository.deleteById(id);
		return id;
	}

	@Override
	public Teacher search(int id) throws Exception {
		Optional<Teacher> teacherDetails = teacherRepository.findById(id);
		Teacher teacher = teacherDetails.orElseThrow(() -> new Exception("Service.TEACHER_NOT_FOUND"));
		return teacher;
	}

	@Override
	public Iterable<Teacher> getAll() {
		return teacherRepository.findAll();
	}

}
