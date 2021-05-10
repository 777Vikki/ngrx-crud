import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IEmployee } from '../models/employee.model';

@Component({
  selector: 'app-employee-add',
  templateUrl: './employee-add.component.html',
  styleUrls: ['./employee-add.component.css']
})
export class EmployeeAddComponent implements OnInit {
  @Output() addEmployeeEvent = new EventEmitter<IEmployee>();
  employeeForm = this.createForm();
  constructor(private fb: FormBuilder) { }

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
    this.addEmployeeEvent.next(newEmployee);
  }

}
