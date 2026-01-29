package com.employeeDetails.info.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.employeeDetails.info.entity.Employee;

public interface EmployeeRepo extends JpaRepository<Employee, Long> {

}
