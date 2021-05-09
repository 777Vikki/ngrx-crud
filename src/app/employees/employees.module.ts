import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeesRoutingModule } from './employees-routing.module';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeEditComponent } from './employee-edit/employee-edit.component';
import { EmployeeAddComponent } from './employee-add/employee-add.component';
import { EmployeeComponent } from './employee/employee.component';
import { StoreModule } from '@ngrx/store';
import { employeeReducer } from './state/employee.reducer';
import { EffectsModule } from '@ngrx/effects';
import { CustomerEffect } from './state/customer.effects';

@NgModule({
  declarations: [
    EmployeeListComponent,
    EmployeeEditComponent,
    EmployeeAddComponent,
    EmployeeComponent
  ],
  imports: [
    CommonModule,
    EmployeesRoutingModule,
    StoreModule.forFeature("employees", employeeReducer),
    EffectsModule.forFeature([CustomerEffect])
  ]
})
export class EmployeesModule { }
