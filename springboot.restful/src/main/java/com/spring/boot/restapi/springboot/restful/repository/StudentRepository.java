package com.spring.boot.restapi.springboot.restful.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.spring.boot.restapi.springboot.restful.model.Student;

public interface StudentRepository extends JpaRepository<Student, Integer> {
			
	
	
}
