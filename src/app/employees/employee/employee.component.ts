import { Component, OnInit } from '@angular/core';
import { IEmployee } from '../models/employee.model';
import * as employeeActions from '../state/employee.actions';
import * as fromEmployee from '../state/employee.selectors';
import { AppState } from '../state/employee.state';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  employees$: Observable<IEmployee[]>;
  loadEmployee: IEmployee;
  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.getEmployeeList();
    this.loadEmployeeDetail();
  }

  getEmployeeList(): void {
    this.store.dispatch(new employeeActions.LoadEmployees());
    this.employees$ = this.store.pipe(select(fromEmployee.getEmployees));
  }

  loadEmployeeDetail(): void {
    this.store.pipe(select(fromEmployee.getCurrentCustomer))
      .subscribe(d => {
          this.loadEmployee = d;
      });
  }

  editEmployee(id: number): void {
    this.store.dispatch(new employeeActions.LoadEmployee(id));
  }

  deleteEmployee(id: number): void {
    this.store.dispatch(new employeeActions.DeleteEmployee(id));
  }

  updateEmployee(employee: IEmployee): void {
    this.store.dispatch(new employeeActions.UpdateEmployee({
      id: employee.id,
      changes: employee
    }));
  }

  addEmployee(newEmployee: IEmployee) {
    this.store.dispatch(new employeeActions.CreateEmployee(newEmployee));
  }
}
