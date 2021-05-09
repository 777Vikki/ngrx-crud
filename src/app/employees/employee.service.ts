import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { IEmployee } from './models/employee.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  employeesUrl = 'https://reqres.in/api/users?page=1';
  constructor(private http: HttpClient) { }

  getEmployee(): Observable<IEmployee[]> {
    return this.http.get<{ data: IEmployee[] }>(this.employeesUrl)
      .pipe(map(d => d.data || []))
  }
}
