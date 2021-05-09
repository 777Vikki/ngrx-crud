import * as employeeActions from './employee.actions';
import { EmployeeState } from './employee.state';


export const initialState: EmployeeState = {
    employees: [],
    loaded: false,
    loading: false,
    error: ''
};

export const employeeReducer = (state = initialState, action: employeeActions.Actions): EmployeeState => {
    switch (action.type) {
        case employeeActions.EmployeeActionsType.LOAD_EMPLOYEES: {
            return {
                ...state,
                loading: true,
            }
        }

        case employeeActions.EmployeeActionsType.LOAD_EMPLOYEES_SUCCESS: {
            return {
                ...state,
                loading: false,
                loaded: true,
                employees: action.payload
            }
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

        default: {
            return state;
        }
    }
}

