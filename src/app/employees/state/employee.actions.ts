import { Update } from "@ngrx/entity";
import { Action } from "@ngrx/store";
import { IEmployee } from "../models/employee.model";

export enum EmployeeActionsType {
    LOAD_EMPLOYEES = '[Employees] Load Employees',
    LOAD_EMPLOYEES_SUCCESS = '[Employee] Load Employees Success',
    LOAD_EMPLOYEES_FAIL = '[Employee] Load Employees Fail',
    LOAD_EMPLOYEE = '[Employees] Load Employee',
    UPDATE_EMPLOYEE = '[Employees] Update Employee',
    DELETE_EMPLOYEE = '[Employee] Delete Employee',
    CREATE_EMPLOYEE = '[Employee] Create Employee'
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

export class LoadEmployee implements Action {
    readonly type = EmployeeActionsType.LOAD_EMPLOYEE;

    constructor(public payload: number) {
    }
}

export class UpdateEmployee implements Action {
    readonly type = EmployeeActionsType.UPDATE_EMPLOYEE;
    constructor(public payload: Update<IEmployee>) {
    }
}

export class DeleteEmployee implements Action {
    readonly type = EmployeeActionsType.DELETE_EMPLOYEE;

    constructor(public payload: number) { }
}

export class CreateEmployee implements Action {
    readonly type = EmployeeActionsType.CREATE_EMPLOYEE;

    constructor(public payload: IEmployee) { }
}


export type Actions =
    | LoadEmployees
    | LoadEmployeesSuccess
    | LoadEmployeesFail
    | LoadEmployee
    | UpdateEmployee
    | DeleteEmployee
    | CreateEmployee