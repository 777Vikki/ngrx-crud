import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { IEmployee } from '../models/employee.model';
import * as employeeActions from '../state/employee.actions';
import * as fromEmployee from '../state/employee.selectors';
import { AppState } from '../state/employee.state';
@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  employees$: Observable<IEmployee[]>;
  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.store.dispatch(new employeeActions.LoadEmployees());
    this.employees$ =  this.store.pipe(select(fromEmployee.getEmployees));
  }

}
