package com.example.demo.Service;

import com.example.demo.Entity.Teacher;

public interface TeacherService {

	public int addTeacher(Teacher teacher);
	public int deleteTeacher(int id);
	public Teacher search(int id) throws Exception;
	public Iterable<Teacher> getAll();
}
