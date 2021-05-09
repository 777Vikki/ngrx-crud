import * as employeeActions from './employee.actions';
import { EmployeeState } from './employee.state';
import { EmployeeActionsType, employeeAdapter } from './employee-action.enum';
export const defaultCustomer: EmployeeState = {
    employees: [],
    entities: {},
    ids: [],
    selectedEmployeeId: null,
    loaded: false,
    loading: false,
    error: ''
};

export const initialState = employeeAdapter.getInitialState(defaultCustomer);

export const employeeReducer = (state = initialState, action: employeeActions.Actions): EmployeeState => {
    switch (action.type) {

        case EmployeeActionsType.LOAD_EMPLOYEES_SUCCESS: {
            return employeeAdapter.addMany(action.payload, {
                ...state,
                loading: false,
                loaded: true
            });
        }

        case EmployeeActionsType.LOAD_EMPLOYEES_FAIL: {
            return {
                ...state,
                employees: [],
                loading: false,
                loaded: false,
                error: action.payload
            }
        }

        case EmployeeActionsType.LOAD_EMPLOYEE: {
            return {
                ...state,
                loading: true,
                selectedEmployeeId: action.payload
            }
        }

        case EmployeeActionsType.UPDATE_EMPLOYEE: {
            return employeeAdapter.updateOne(action.payload, state);
        }

        case EmployeeActionsType.DELETE_EMPLOYEE: {
            return employeeAdapter.removeOne(action.payload, state)
        }

        case EmployeeActionsType.CREATE_EMPLOYEE: {
            return employeeAdapter.addOne(action.payload, state);
        }
        default: {
            return state;
        }
    }
}

