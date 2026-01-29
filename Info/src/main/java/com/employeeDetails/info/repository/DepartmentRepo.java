package com.employeeDetails.info.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.employeeDetails.info.entity.Department;

// long is primary key type where department is entity type
public interface DepartmentRepo extends JpaRepository<Department, Long> {

}
