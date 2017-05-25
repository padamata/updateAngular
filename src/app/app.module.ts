/*
Siva Kumar
*/
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { BikeInfoComponent } from './bike-info/bike-info.component';
import { BikesComponent } from './bikes/bikes.component';
import { BikeService } from './bike.service';
import { EmployeeInfoComponent } from './employee-info/employee-info.component';
import { EmployeesComponent } from './employees/employees.component';
import { EmployeeService } from './employee.service';

import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { BikesDatabaseService } from './bikes-database.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//import { EmployeesDatabaseService } from './employees-database.service';

import { AppRoutingModule } from './app-routing/app-routing.module';
import { MaterialModule, MdList, MdListItem } from '@angular/material'


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(BikesDatabaseService),
    MaterialModule,//.forRoot(),
    AppRoutingModule,
    BrowserAnimationsModule,
	
  ],
  declarations: [
    AppComponent,
    BikesComponent,
    BikeInfoComponent,
	EmployeesComponent,
	EmployeeInfoComponent,
  ],
  bootstrap: [AppComponent],
  providers: [BikeService,EmployeeService],
})
export class AppModule { }