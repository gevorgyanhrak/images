import {IMAGE_API} from "../../../helpers/helpers";

const addImages = (id,limit) => {
    const cat_url  = !id ? IMAGE_API+`?limit=${limit}&page=1` : IMAGE_API+`?limit=${limit}&page=1&category_ids=${id}`;
    return (dispatch) => {
        dispatch({type: 'ADD_IMAGES_START'});

        fetch(cat_url)
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