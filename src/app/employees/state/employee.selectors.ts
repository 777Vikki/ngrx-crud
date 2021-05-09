import { createSelector, createFeatureSelector } from '@ngrx/store'
import { EmployeeState } from './employee.state';

const getCustomerFeatureState = createFeatureSelector<EmployeeState>(
    "customers"
);

export const getEmployees = createSelector(
    getCustomerFeatureState,
    (state: EmployeeState) => state.employees
);

export const getEmployeesLoading = createSelector(
    getCustomerFeatureState,
    (state: EmployeeState) => state.loading
);

export const getEmployeesLoaded = createSelector(
    getCustomerFeatureState,
    (state: EmployeeState) => state.loaded
);

export const getError = createSelector(
    getCustomerFeatureState,
    (state: EmployeeState) => state.error
);