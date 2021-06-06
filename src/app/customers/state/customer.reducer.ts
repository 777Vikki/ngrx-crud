const initialState = {
    customers: [
        {
            name: 'vivek',
            phone: '98798wewer',
            address: 'Sivon',
            membership: 'lskjfdoi',
            id: 1
        }
    ],
    loading: false,
    loaded: true
}

export function customerReducer(state = initialState, action) {
    switch (action.type) {
        case "LOAD_CUSTOMERS": {
            return {
                ...state,
                loading: true,
                loaded: false
            }
        }

        default: {
            return state
        }
    }
}