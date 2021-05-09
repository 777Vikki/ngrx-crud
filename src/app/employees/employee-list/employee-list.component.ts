import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { IEmployee } from '../models/employee.model';
import { Store } from '@ngrx/store';


@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  employees: IEmployee[];
  constructor(private employeeService: EmployeeService, private store: Store<any>) { }

  ngOnInit(): void {
    this.store.dispatch({type: 'LOAD_CUSTOMER'});
    this.store.subscribe(state => {
      this.employees = state.employees.employees;
    })
  }

}
