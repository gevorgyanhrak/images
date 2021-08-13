import {DEFAULT_ID} from "../../../helpers/helpers";

const addImages = (id,limit) => {
    const cat_id = id ? id : DEFAULT_ID;
    return (dispatch) => {
        dispatch({type: 'ADD_IMAGES_START'});
        fetch(`https://api.thecatapi.com/v1/images/search?limit=${limit}&page=1&category_ids=${cat_id}`)
            .then(response => response.json())
            .then(res => {
                dispatch(
                    {
                        type: 'ADD_IMAGES_SUCCESS',
                        payload: res
                    }
                )
            })
            .catch(error => {
                dispatch({type: 'ADD_IMAGES_ERROR',
                    payload: error.message || "Something went wrong",})
            });
    }
}

export default addImages;