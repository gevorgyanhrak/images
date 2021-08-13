import {IMAGE_API} from "../../../helpers/helpers";

const axios = require('axios');

const addImages = (id, limit) => {
    const cat_url = !id ? IMAGE_API + `?limit=${limit}&page=1` : IMAGE_API + `?limit=${limit}&page=1&category_ids=${id}`;
    return async (dispatch) => {
        dispatch({type: 'ADD_IMAGES_START'});
        try {
            const response = await axios.get(cat_url);
            dispatch({
                type: 'ADD_IMAGES_SUCCESS',
                payload: response.data
            })
        } catch (e) {
            dispatch({
                type: 'ADD_IMAGES_ERROR',
                payload: e.message || "Something went wrong",
            })
        }
    }
}

export default addImages;