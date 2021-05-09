import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import * as employeeActions from '../state/employee.actions';
import * as fromEmployee from '../state/employee.selectors';
@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  employees$;
  constructor(private store: Store<any>) { }

  ngOnInit(): void {
    this.store.dispatch(new employeeActions.LoadEmployees());
    this.employees$ =  this.store.pipe(select(fromEmployee.getEmployees));
  }

}
