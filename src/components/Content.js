import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {DEFAULT_LIMIT} from "../helpers/helpers";
import {useDispatch, useSelector} from "react-redux";
import addImages from "../store/actions/addImages";
import Images from "./Images";


function Content() {

    const {id} = useParams();
    const [limit, setLimit] = useState(DEFAULT_LIMIT);
    const dispatch = useDispatch();
    const state = useSelector(state => state.imagesReducer)
    const {error, loading, data} = state;

    useEffect(() => {
        setLimit(DEFAULT_LIMIT);
    }, [id])

    useEffect(() => {
        dispatch(addImages(id, limit))
    }, [id, limit]);


    if (error) {
        alert(error.message || error);
    }

    return (
        <div className='col-md-12 image_block_parent'>
            {!Array.isArray(data) || data.length < 1 ? 'Not Found' :
                <Images loading={loading} data={data} setLimit={setLimit} limit={limit}/>}
        </div>
    )
}


export default Content;