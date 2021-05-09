import { Action } from "@ngrx/store";
import { IEmployee } from "../models/employee.model";

export enum EmployeeActionsType {
    LOAD_EMPLOYEES = '[Employees] Load Employees',
    LOAD_EMPLOYEES_SUCCESS = '[Employee] Load Employees Success',
    LOAD_EMPLOYEES_FAIL = '[Employee] Load Employees Fail'
};

export class LoadEmployees implements Action {
    readonly type = EmployeeActionsType.LOAD_EMPLOYEES;
}

export class LoadEmployeesSuccess implements Action {
    readonly type = EmployeeActionsType.LOAD_EMPLOYEES_SUCCESS

    constructor(public payload: IEmployee[]) { }
}

export class LoadEmployeesFail implements Action {
    readonly type = EmployeeActionsType.LOAD_EMPLOYEES_FAIL;

    constructor(public payload: string) { }
}

export type Actions = LoadEmployees | LoadEmployeesSuccess | LoadEmployeesFail;