import { Injectable } from "@angular/core";

import { Actions, Effect, ofType } from "@ngrx/effects";
import { Action } from "@ngrx/store";

import { Observable, of } from "rxjs";
import { map, mergeMap, catchError } from "rxjs/operators";
import { EmployeeService } from "../employee.service";
import * as employeeActions from "../state/employee.actions";
import { IEmployee } from "../models/employee.model";
@Injectable()
export class CustomerEffect {
    constructor(private actions$: Actions,
        private employeeService: EmployeeService
    ) { }

    @Effect()
    loadCustomer$: Observable<Action> = this.actions$.pipe(
        ofType<employeeActions.LoadEmployees>(
            employeeActions.EmployeeActionsType.LOAD_EMPLOYEES
        ),
        mergeMap((actions: employeeActions.LoadEmployees) => 
            this.employeeService.getEmployee().pipe(
                map(
                    (employees: IEmployee[]) => 
                    new employeeActions.LoadEmployeesSuccess(employees)
                ),
                catchError(err => of(new employeeActions.LoadEmployeesFail(err)))
            )
        )
    )
}