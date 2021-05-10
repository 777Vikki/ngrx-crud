import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IEmployee } from '../models/employee.model';
@Component({
  selector: 'app-employee-edit',
  templateUrl: './employee-edit.component.html',
  styleUrls: ['./employee-edit.component.css']
})
export class EmployeeEditComponent implements OnInit {
  employeeForm = this.createForm();
  @Output() updateEmployeeEvent = new EventEmitter<IEmployee>()
  @Input()
  set employee(value: IEmployee) {
    if(value) {
      this.patchForm(value)
    }
  }
  constructor( private fb: FormBuilder) { }

  ngOnInit(): void {
    
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
    this.updateEmployeeEvent.next(updatedEmployee);
  }
}
