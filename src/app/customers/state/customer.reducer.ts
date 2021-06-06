import * as customerActions from './customer.actions';
import { ICustomer } from '../models/customer.model';
import * as fromRoot from '../../state/app-state';

export interface ICustomerState {
    customers: ICustomer[],
    loading: boolean,
    loaded: boolean,
    error: string
}

export interface AppState extends fromRoot.AppState {
    customers: ICustomerState
}

export const initialState: ICustomerState = {
    customers: [],
    loading: false,
    loaded: false,
    error: '',
}

export function customerReducer(state = initialState, action: customerActions.Actions): ICustomerState {
    switch(action.type) {
        case customerActions.CustomerActionType.LOAD_CUSTOMERS: {
            return {
                ...state,
                loading: true
            }
        }

        case customerActions.CustomerActionType.LOAD_CUSTOMERS_SUCCESS: {
            return {
                ...state,
                loading: false,
                loaded: true,
                customers: action.payload.customers
            }
        }

        case customerActions.CustomerActionType.LOAD_CUSTOMERS_FAIL: {
            return {
                ...state,
                customers: [],
                loading: false,
                loaded: false,
                error: action.payload.error
            }
        }

        default: {
            return {
                ...state
            }
        }
    }
}