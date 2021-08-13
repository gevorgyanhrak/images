import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {DEFAULT_LIMIT} from "../helpers/helpers";
import Loader from "./loader";
import {useDispatch, useSelector} from "react-redux";
import addImages from "../store/actions/addImages";


function Content() {

    const {id} = useParams();
    const [limit, setLimit] = useState(DEFAULT_LIMIT);
    const dispatch = useDispatch();
    const state = useSelector(state => state.imagesReducer)
    const {error, loading, data} = state;

    useEffect(()=> {
        setLimit(DEFAULT_LIMIT);
    },[id])

    useEffect(() => {
        dispatch(addImages(id, limit))
    }, [id, limit]);


    if (error) {
        alert(error?.message);
    }

    return (

        <div className='col-md-10 image_block_parent'>
            {loading ? <Loader/> : Array.isArray(data) && data.map((d) => (
                <div key={d.id} className='image_block col-md-3'>
                    <img src={d.url} className='image-responsive' alt=""/>
                    <p>Category : {d.categories.map((cat) => (cat.name))}</p>
                </div>
            ))}
            {loading ? '' : <div className="row">
                <button className='learn_more' onClick={() => {
                    setLimit(limit + DEFAULT_LIMIT)
                }}> Learn more
                </button>
            </div>}
        </div>
    )
}


export default Content;