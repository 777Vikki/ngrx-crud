import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ICustomer } from './models/customer.model';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  private customersUrl = "http://localhost:3000/customers";

  constructor(private http: HttpClient) {}

  getCustomers(): Observable<ICustomer[]> {
    return this.http.get<ICustomer[]>(this.customersUrl);
  }
}
