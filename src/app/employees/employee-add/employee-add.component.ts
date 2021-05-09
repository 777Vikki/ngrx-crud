import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AppState } from '../state/employee.state';
import { Store } from '@ngrx/store';
import * as employeeActions from '../state/employee.actions';

@Component({
  selector: 'app-employee-add',
  templateUrl: './employee-add.component.html',
  styleUrls: ['./employee-add.component.css']
})
export class EmployeeAddComponent implements OnInit {
  employeeForm = this.createForm();
  constructor(private fb: FormBuilder, private store: Store<AppState>) { }

  ngOnInit(): void {
  }

  createForm(): FormGroup {
    return this.fb.group({
      avatar: ['https://reqres.in/img/faces/1-image.jpg'],
      email: ['', [Validators.required, Validators.email]],
      first_name: ['', [Validators.required]],
      last_name: ['', [Validators.required]],
      id: ['']
    })
  }

  onSubmit(): void {
    const newEmployee = Object.assign({}, this.employeeForm.value, { id: Math.floor(Math.random() * 50000) })
    this.store.dispatch(new employeeActions.CreateEmployee(newEmployee));
  }

}
