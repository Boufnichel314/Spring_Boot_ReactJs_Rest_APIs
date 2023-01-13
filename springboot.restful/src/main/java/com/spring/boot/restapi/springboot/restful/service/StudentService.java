package com.spring.boot.restapi.springboot.restful.service;

import java.util.List;

import com.spring.boot.restapi.springboot.restful.model.Student;

public interface StudentService {
		public Student saveStudent(Student student);
		public List<Student> getAll();
		public void deleteById(int id);
}
