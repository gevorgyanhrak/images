import {CATEGORIES_API} from "../../../helpers/helpers";

const axios = require('axios');


const addCategories = () => {
    return async (dispatch) => {
        dispatch({type: "ADD_CAT_START"});

        try {
            const response = await axios(CATEGORIES_API);
            dispatch({
                type: "ADD_CAT_SUCCESS",
                payload: response.data,
            });
        } catch (e) {
            dispatch({
                type: "ADD_CAT_FAIL",
                payload: e.message || "Something went wrong",
            });
        }
    }
}

export default addCategories;