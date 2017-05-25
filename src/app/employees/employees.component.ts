/*
Siva Kumar
*/
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {

  employees: Employee[];
  selectedEmployee: Employee;
  newEmployee: Employee;

  constructor(private router: Router, private employeeService: EmployeeService) {

  }

  ngOnInit() {
    this.employeeService.getEmployees().then(employees => this.employees = employees);
    this.newEmployee = new Employee();
  }

  createEmployee(employee: Employee): void {

    this.employeeService.createEmployee(employee)
      .then(employee => {
        this.employees.push(employee);
        this.selectedEmployee = null;
      });
  }

  deleteEmployee(employee: Employee): void {
    this.employeeService
      .deleteEmployee(employee)
      .then(() => {
        this.employees = this.employees.filter(h => h !== employee);
        if (this.selectedEmployee === employee) { this.selectedEmployee = null; }
      });
  }

  showInfo(employee: Employee): void {
    this.selectedEmployee = employee;
    this.router.navigate(['/information', this.selectedEmployee.id]);
  }
}