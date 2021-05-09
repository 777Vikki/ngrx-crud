import { IEmployee } from "../models/employee.model";
import * as fromRoot from "../../state/app-state";
export interface EmployeeState {
    employees: IEmployee[]
    loading: boolean;
    loaded: boolean;
    error: string;
}

export interface AppState extends fromRoot.AppState {
    employee: EmployeeState;
}
