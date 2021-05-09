const initialState = {
    employees: [
        {
            email: "george.bluth@reqres.in",
            first_name: "George",
            last_name: "Bluth",
            avatar: "https://reqres.in/img/faces/1-image.jpg",
            id: 1
        }
    ],
    loading: false,
    loaded: true
};

export const customerReducer = (state = initialState, action) => {
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