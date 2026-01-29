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

import com.employeeDetails.info.entity.Department;
import com.employeeDetails.info.repository.DepartmentRepo;

@RestController //->return json instead of html
@RequestMapping("/api/departments") //url
@CrossOrigin(origins = "*") //allows frontend and backend without any problem
public class DepartmentController {
	@Autowired // creates object 
	private DepartmentRepo departmentRepo;
	
	@GetMapping //  used for getApi
	public List<Department> getAllDepartments(){
		return departmentRepo.findAll();
	}
	
	@PostMapping
    public Department create(@RequestBody Department department) {
        return departmentRepo.save(department);
    }

    @PutMapping("/{id}")
    public Department update(@PathVariable Long id, @RequestBody Department department) {
        department.setId(id);
        return departmentRepo.save(department);
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable Long id) {
        departmentRepo.deleteById(id);
    }
	
}
