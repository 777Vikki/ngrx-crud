import * as customerActions from './customer.actions';
import { ICustomer } from '../models/customer.model';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromRoot from '../../state/app-state';
import { EntityState, EntityAdapter, createEntityAdapter } from "@ngrx/entity";

export interface ICustomerState extends EntityState<ICustomer> {
    selectedCustomerId: null | number;
    loading: boolean,
    loaded: boolean,
    error: string
}

export interface AppState extends fromRoot.AppState {
    customers: ICustomerState
}

export const customerAdapter: EntityAdapter<ICustomer> = createEntityAdapter<ICustomer>();

export const defaultCustomer: ICustomerState = {
    ids: [],
    entities: {},
    selectedCustomerId: null,
    loading: false,
    loaded: false,
    error: ''
}

export const initialState = customerAdapter.getInitialState(defaultCustomer)

export function customerReducer(state = initialState, action: customerActions.Actions): ICustomerState {
    switch(action.type) {
        case customerActions.CustomerActionType.LOAD_CUSTOMERS: {
            return {
                ...state,
                loading: true
            }
        }

        case customerActions.CustomerActionType.LOAD_CUSTOMERS_SUCCESS: {
            return customerAdapter.addMany(action.payload, {
                ...state,
                loading: false,
                loaded: true
            })
        }

        case customerActions.CustomerActionType.LOAD_CUSTOMERS_FAIL: {
            return {
                ...state,
                entities: {},
                loading: false,
                loaded: false,
                error: action.payload
            }
        }

        default: {
            return {
                ...state
            }
        }
    }
}

const getCustomerFeatureState = createFeatureSelector<ICustomerState>(
    "customers"
  );
  
  export const getCustomers = createSelector(
    getCustomerFeatureState,
    customerAdapter.getSelectors().selectAll
  );
  
  export const getCustomersLoading = createSelector(
    getCustomerFeatureState,
    (state: ICustomerState) => state.loading
  );
  
  export const getCustomersLoaded = createSelector(
    getCustomerFeatureState,
    (state: ICustomerState) => state.loaded
  );