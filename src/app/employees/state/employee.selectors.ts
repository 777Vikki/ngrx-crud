import { createSelector, createFeatureSelector } from '@ngrx/store'
import { EmployeeState } from './employee.state';

const getEmployeeFeatureState = createFeatureSelector<EmployeeState>(
    "employees"
);

export const getEmployees = createSelector(
    getEmployeeFeatureState,
    (state: EmployeeState) => state.employees
);

export const getEmployeesLoading = createSelector(
    getEmployeeFeatureState,
    (state: EmployeeState) => state.loading
);

export const getEmployeesLoaded = createSelector(
    getEmployeeFeatureState,
    (state: EmployeeState) => state.loaded
);

export const getError = createSelector(
    getEmployeeFeatureState,
    (state: EmployeeState) => state.error
);