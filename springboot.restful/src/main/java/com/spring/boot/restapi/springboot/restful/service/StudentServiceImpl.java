package com.spring.boot.restapi.springboot.restful.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.spring.boot.restapi.springboot.restful.model.Student;
import com.spring.boot.restapi.springboot.restful.repository.StudentRepository;
@Service
public class StudentServiceImpl implements StudentService {

	@Autowired
	StudentRepository studentRepo;
	
	@Override
	public Student saveStudent(Student student) {
		return studentRepo.save(student);
	}

	@Override
	public List<Student> getAll() {
		return studentRepo.findAll();
	}

	@Override
	public void deleteById(int id) {
		studentRepo.deleteById(id);
		
	}
		
}
