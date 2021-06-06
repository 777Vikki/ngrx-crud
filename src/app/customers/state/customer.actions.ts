import { Action } from '@ngrx/store';
import { ICustomer } from '../models/customer.model';

export enum CustomerActionType {
    LOAD_CUSTOMERS = '[Customer] Load Customers',
    LOAD_CUSTOMERS_SUCCESS = '[Customer] Load Customers Success',
    LOAD_CUSTOMERS_FAIL = '[Customer] Load Customers Fail'
}

export class LoadCustomers implements Action {
    readonly type = CustomerActionType.LOAD_CUSTOMERS;
}

export class LoadCustomersSuccess implements Action {
    readonly type = CustomerActionType.LOAD_CUSTOMERS_SUCCESS;
    
    constructor(public payload: {customers: ICustomer[]}){}
}

export class LoadCustomersFail implements Action {
    readonly type = CustomerActionType.LOAD_CUSTOMERS_FAIL;
    
    constructor(public payload: {error: string}){}
}

export type Actions = 
    LoadCustomers | 
    LoadCustomersSuccess | 
    LoadCustomersFail;