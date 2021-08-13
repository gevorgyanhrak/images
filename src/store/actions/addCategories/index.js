const addCategories = () => {
    return (dispatch) => {
        dispatch({type: "ADD_CAT_START"});
        fetch('https://api.thecatapi.com/v1/categories').then(res => res.json())
            .then((res) => {
                dispatch({
                    type: "ADD_CAT_SUCCESS",
                    payload: res,
                });
            })
            .catch((err) => {
                dispatch({
                    type: "ADD_CAT_FAIL",
                    payload: err.message || "Something went wrong",
                });
                if (err && err.response && err.response.data) {
                    return err.response.data.data;
                }
            });
    }
}

export default addCategories;