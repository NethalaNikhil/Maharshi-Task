package com.employeeDetails.info.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.employeeDetails.info.entity.Employee;
import com.employeeDetails.info.repository.EmployeeRepo;

@RestController
@RequestMapping("/api/employees")
@CrossOrigin(origins = "*")
public class EmployeeController 
{
	@Autowired
	private EmployeeRepo employeeRepo;
	
	@GetMapping 
	public List<Employee> getAllEmployees()
	{
		return employeeRepo.findAll();
	}
	
	@PostMapping
	public Employee createEmployee(@RequestBody Employee employee)
	{
		return employeeRepo.save(employee);
	}
	
	@PutMapping("/{id}")
	public Employee updateEmployee(@PathVariable Long id , @RequestBody Employee employee)
	{
		employee.setId(id);
		return employeeRepo.save(employee);
	}
	
	@DeleteMapping("/{id}")
	public void deleteEmployee(@PathVariable Long id)
	{
		employeeRepo.deleteById(id);
	}
}
