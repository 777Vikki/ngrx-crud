import { Component, OnInit } from '@angular/core';
import { IEmployee } from '../models/employee.model';
import { Store } from '@ngrx/store';
import * as employeeActions from '../state/employee.actions';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  employees;
  constructor(private store: Store<any>) { }

  ngOnInit(): void {
    this.store.dispatch(new employeeActions.LoadEmployees());
    this.store.subscribe(state => {
      this.employees = state.employees.employees;
    })
  }

}
