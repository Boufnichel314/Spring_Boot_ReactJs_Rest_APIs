package com.spring.boot.restapi.springboot.restful.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.spring.boot.restapi.springboot.restful.model.Student;
import com.spring.boot.restapi.springboot.restful.service.StudentService;

@RestController
@RequestMapping("/student")
@CrossOrigin
public class StudentController {
	@Autowired
	public StudentService StudentS;
	
	@PostMapping("/add")
	public String SaveStudent(@RequestBody Student student) {
		StudentS.saveStudent(student);
		return "Student has been added !";
	}
	@GetMapping
	public List<Student> getAll() {
		return StudentS.getAll();
	}
	@DeleteMapping("/delete/{id}")
	public String delete(@PathVariable int id) {
		StudentS.deleteById(id);
		return "A student has been deleted  !";
	}
}
