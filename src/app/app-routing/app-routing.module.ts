/*
Siva Kumar
*/
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { BikeInfoComponent } from '../bike-info/bike-info.component';
import { BikesComponent } from '../bikes/bikes.component';
import { EmployeeInfoComponent } from '../Employee-info/Employee-info.component';
import { EmployeesComponent } from '../employees/employees.component';

const routes: Routes = [
  { path: 'information/:id', component: BikeInfoComponent },
  { path: 'bikes', component: BikesComponent },
  { path: 'employees', component: EmployeesComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }