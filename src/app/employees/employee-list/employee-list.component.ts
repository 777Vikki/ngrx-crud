import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { IEmployee } from '../models/employee.model';
@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  @Input() empList: IEmployee[];
  @Output() editIdEvent = new EventEmitter<number>();
  @Output() deleteIdEvent = new EventEmitter<number>();
  constructor() { }

  ngOnInit(): void {
  }

  edit(employee: IEmployee): void {
    this.editIdEvent.next(employee.id);
  }

  delete(employee: IEmployee): void {
    this.deleteIdEvent.next(employee.id);
  }

}
