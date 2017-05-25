/*
Siva Kumar
*/
import { Component, OnInit } from '@angular/core';
import { Bike } from './bike';
import { Employee } from './employee';
import { BikeService } from './bike.service';
import { EmployeeService } from './employee.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: []
})
export class AppComponent implements OnInit {
	
	employees: Employee[];
	selectedEmployee: Employee;

	constructor(private employeeService: EmployeeService) { }
	
	getEmployees(): void {
		this.employeeService.getEmployees().then(employees => this.employees = employees);
	}
	
	ngOnInit() {
		this.getEmployees();

	}
	

}
