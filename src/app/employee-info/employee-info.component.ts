/*
Siva Kumar
*/
import 'rxjs/add/operator/switchMap'
import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

import { Employee } from '../employee';
import { EmployeeService } from '../employee.service'

@Component({
  selector: 'app-employee-info',
  templateUrl: './employee-info.component.html',
  styleUrls: ['./employee-info.component.css']
})
export class EmployeeInfoComponent implements OnInit {

  employee: Employee;

  constructor(
    private employeeService: EmployeeService,
    private route: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit() {
	this.route.params.switchMap((params: Params) => this.employeeService.getEmployee(+params['id'])).subscribe(employee => this.employee = employee);
  }
  updateEmployee(): void {
	this.employeeService.updateEmployee(this.employee);
	this.goBack();
  }
  goBack(): void {
	this.location.back();
  }

}