import { EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { IEmployee } from '../models/employee.model';

export enum EmployeeActionsType {
    LOAD_EMPLOYEES = '[Employees] Load Employees',
    LOAD_EMPLOYEES_SUCCESS = '[Employee] Load Employees Success',
    LOAD_EMPLOYEES_FAIL = '[Employee] Load Employees Fail',
    LOAD_EMPLOYEE = '[Employees] Load Employee',
    UPDATE_EMPLOYEE = '[Employees] Update Employee',
    DELETE_EMPLOYEE = '[Employee] Delete Employee',
    CREATE_EMPLOYEE = '[Employee] Create Employee'
};

export const employeeAdapter: EntityAdapter<IEmployee> = createEntityAdapter<
    IEmployee
>();