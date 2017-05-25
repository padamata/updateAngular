/*Siva Kumar*/
import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { Employee } from './employee'
import { CommonModule } from '@angular/common';
import { EMPLOYEES } from './mock-employee';

@Injectable()
export class EmployeeService {

  constructor(private http: Http) {  }

  private headers = new Headers({ 'Content-Type': 'application/json' });
  private employeesUrl = 'api/employees';

  getEmployees(): Promise<Employee[]> {
    return Promise.resolve(EMPLOYEES);/*this.http.get(this.employeesUrl)
      .toPromise()
      .then(response => response.json().data as Employee[])
      .catch(this.handleError);*/
  }

  getEmployee(id: number): Promise<Employee> {
    const url = `${this.employeesUrl}/${id}`;
    return this.http.get(url)
      .toPromise()
      .then(response => response.json().data as Employee)
      .catch(this.handleError);
  }

  createEmployee(employee: Employee): Promise<Employee> {
    return this.http
      .post(this.employeesUrl, JSON.stringify(employee), { headers: this.headers })
      .toPromise()
      .then(res => res.json().data as Employee)
      .catch(this.handleError);
  }

  updateEmployee(employee: Employee): Promise<Employee> {
    const url = `${this.employeesUrl}/${employee.id}`;
    return this.http
      .put(url, JSON.stringify(employee), { headers: this.headers })
      .toPromise()
      .then(() => employee)
      .catch(this.handleError);
  }

  deleteEmployee(employee: Employee): Promise<void> {
    const url = `${this.employeesUrl}/${employee.id}`;
    return this.http.delete(url, { headers: this.headers })
      .toPromise()
      .then(() => null)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}