import * as employeeActions from './employee.actions';
import { EmployeeState } from './employee.state';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { IEmployee } from '../models/employee.model';
export const defaultCustomer: EmployeeState = {
    employees: [],
    entities: {},
    ids: [],
    selectedEmployeeId: null,
    loaded: false,
    loading: false,
    error: ''
};

export const employeeAdapter: EntityAdapter<IEmployee> = createEntityAdapter<
    IEmployee
>();

export const initialState = employeeAdapter.getInitialState(defaultCustomer);

export const employeeReducer = (state = initialState, action: employeeActions.Actions): EmployeeState => {
    switch (action.type) {

        case employeeActions.EmployeeActionsType.LOAD_EMPLOYEES_SUCCESS: {
            return employeeAdapter.addMany(action.payload, {
                ...state,
                loading: false,
                loaded: true
            });
        }

        case employeeActions.EmployeeActionsType.LOAD_EMPLOYEES_FAIL: {
            return {
                ...state,
                employees: [],
                loading: false,
                loaded: false,
                error: action.payload
            }
        }

        case employeeActions.EmployeeActionsType.LOAD_EMPLOYEE: {
            return {
                ...state,
                loading: true,
                selectedEmployeeId: action.payload
            }
        }

        case employeeActions.EmployeeActionsType.UPDATE_EMPLOYEE: {
            return employeeAdapter.updateOne(action.payload, state);
        }

        case employeeActions.EmployeeActionsType.DELETE_EMPLOYEE: {
            return employeeAdapter.removeOne(action.payload, state)
        }

        case employeeActions.EmployeeActionsType.CREATE_EMPLOYEE: {
            return employeeAdapter.addOne(action.payload, state);
        }
        default: {
            return state;
        }
    }
}

