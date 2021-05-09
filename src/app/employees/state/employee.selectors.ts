import { createSelector, createFeatureSelector } from '@ngrx/store'
import { EmployeeState } from './employee.state';
import { employeeAdapter } from './employee.reducer';

const getEmployeeFeatureState = createFeatureSelector<EmployeeState>(
    "employees"
);

export const getEmployees = createSelector(
    getEmployeeFeatureState,
    employeeAdapter.getSelectors().selectAll
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

export const getCurrentCustomerId = createSelector(
    getEmployeeFeatureState,
    (state: EmployeeState) => state.selectedEmployeeId
);

export const getCurrentCustomer = createSelector(
    getEmployeeFeatureState,
    getCurrentCustomerId,
    state => state.entities[state.selectedEmployeeId]
);