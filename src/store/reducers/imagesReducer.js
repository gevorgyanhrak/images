const initialState = {
    data: [],
    error: null,
    loading: false
}

export default function imagesReducer(state = initialState, action) {
    switch (action.type) {
        case 'ADD_IMAGES_START':
            return {
                ...state,
                data: [],
                loading: true
            }
        case 'ADD_IMAGES_SUCCESS':
            return {
                ...state,
                data: action.payload,
                loading: false
            }
        case 'ADD_IMAGES_ERROR':
            return {
                ...state,
                error: action.payload || 'error',
                loading: false
            }
        default:
            return state
    }
}