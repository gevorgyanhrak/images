
const initialState = {
    data: [],
    error: null,
    loading: false,
}


export default function categoryReducer(state = initialState, action) {
    switch (action.type) {
        case 'ADD_CAT_START':
            return {
                ...state,
                data: [],
                loading: true
            };
        case 'ADD_CAT_SUCCESS':
            return {
                ...state,
                data: action.payload,
                loading: false
            };
        case 'ADD_CAT_FAIL':
            return {
                ...state,
                error: action.payload || 'error',
                loading: false
            };
        default:
            return state;
    }
}