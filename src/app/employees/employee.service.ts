import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { IEmployee } from './models/employee.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http: HttpClient) { }

  getEmployee(): Observable<any> {
    return this.http.get<{ data: IEmployee[] }>('https://reqres.in/api/users?page=1')
      .pipe(map(d => d.data || []))
  }
}
