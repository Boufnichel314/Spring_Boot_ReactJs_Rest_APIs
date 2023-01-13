package com.spring.boot.restapi.springboot.restful.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.spring.boot.restapi.springboot.restful.model.Student;
import com.spring.boot.restapi.springboot.restful.service.StudentService;

@RestController
@RequestMapping("/student")
public class StudentController {
	@Autowired
	public StudentService StudentS;
	
	@PostMapping("/add")
	public String SaveStudent(@RequestBody Student student) {
		StudentS.saveStudent(student);
		return "Student has been added !";
	}
	
}
