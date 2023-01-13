package com.spring.boot.restapi.springboot.restful.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.spring.boot.restapi.springboot.restful.model.Student;
@Repository
public interface StudentRepository extends JpaRepository<Student, Integer> {

}
