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

  getCustomerById(payload: number): Observable<ICustomer> {
    return this.http.get<ICustomer>(`${this.customersUrl}/${payload}`);
  }

  createCustomer(payload: ICustomer): Observable<ICustomer> {
    return this.http.post<ICustomer>(this.customersUrl, payload);
  }

  updateCustomer(customer: ICustomer): Observable<ICustomer> {
    return this.http.patch<ICustomer>(
      `${this.customersUrl}/${customer.id}`,
      customer
    );
  }

  deleteCustomer(payload: number) {
    return this.http.delete(`${this.customersUrl}/${payload}`);
  }
}
