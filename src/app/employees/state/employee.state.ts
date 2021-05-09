import { IEmployee } from "../models/employee.model";
import * as fromRoot from "../../state/app-state";
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
export interface EmployeeState extends EntityState<IEmployee> {
    selectedEmployeeId: number | null;
    employees: IEmployee[]
    loading: boolean;
    loaded: boolean;
    error: string;
}

export interface AppState extends fromRoot.AppState {
    employee: EmployeeState;
}
