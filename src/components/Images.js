import Loader from "./loader";
import {DEFAULT_LIMIT} from "../helpers/helpers";
import React from "react";

export default function Images({loading, data, setLimit, limit}) {
    return (
        <>
            {
                loading ? <Loader/> : Array.isArray(data) && data.map((d) => (
                    <div key={d.id} className='image_block col-md-3 col-sm-4'>
                        <img src={d.url} className='image-responsive' alt=""/>
                        {d.categories ?
                            <p>Category : {d.categories?.map((cat) => {
                                return cat.name
                            })}</p>
                            :
                            <p>Category empty</p>
                        }
                    </div>
                ))
            }

            {
                loading ? '' : Array.isArray(data) && data.length > 0 && <div className="row">
                    <button className='learn_more' onClick={() => {
                        setLimit(limit + DEFAULT_LIMIT)
                    }}> Learn more
                    </button>
                </div>
            }
        </>
    )
}