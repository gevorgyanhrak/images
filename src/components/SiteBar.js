import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import addCategories from "../store/actions/addCategories";

export default function SiteBar() {

    const dispatch = useDispatch();

    const  Categories = useSelector(state => state.categoryReducer);
    const {data, error, loading} = Categories
    useEffect(() => {
        dispatch(addCategories())
    }, [])
    return (
        <div className='sitebar_wrapper'>
            {data.map((cat) => (
                <div key={cat.id}>
                    <Link className='link_cat' to={{pathname: `/${cat.id}`}}>{cat.name}</Link>
                </div>
            ))}
        </div>
    );
}