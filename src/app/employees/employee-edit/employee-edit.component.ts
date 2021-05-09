import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { AppState } from '../state/employee.state';
import * as fromEmployee from '../state/employee.selectors';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IEmployee } from '../models/employee.model';
import * as employeeActions from '../state/employee.actions';
@Component({
  selector: 'app-employee-edit',
  templateUrl: './employee-edit.component.html',
  styleUrls: ['./employee-edit.component.css']
})
export class EmployeeEditComponent implements OnInit {
  employeeForm = this.createForm();
  constructor(private store: Store<AppState>, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.store.pipe(select(fromEmployee.getCurrentCustomer))
      .subscribe(d => {
        if (d) {
          this.patchForm(d)
        }
      });
  }

  patchForm(e: IEmployee): void {
    this.employeeForm.setValue({
      avatar: e.avatar,
      email: e.email,
      first_name: e.first_name,
      last_name: e.last_name,
      id: e.id
    })
  }

  createForm(): FormGroup {
    return this.fb.group({
      avatar: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      first_name: ['', [Validators.required]],
      last_name: ['', [Validators.required]],
      id: ['', [Validators.required]]
    })
  }

  onSubmit(): void {
    const updatedEmployee: IEmployee = Object.assign({}, this.employeeForm.value);
    this.store.dispatch(new employeeActions.UpdateEmployee({
      id: updatedEmployee.id,
      changes: updatedEmployee
    }));
  }
}
