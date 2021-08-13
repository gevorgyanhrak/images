import React from "react";
import Content from "./Content";
import Routes from "../Route/Routes";
import SiteBar from "./SiteBar";


export default function Sections () {
    return (
        <div className='row'>
            <div className="col-md-2">
                <SiteBar />
            </div>
                <Routes />
        </div>
    )
}