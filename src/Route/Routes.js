import {Route, Switch} from "react-router-dom";
import Content from "../components/Content";
import React from "react";

export default function Routes() {
    return (
        <Switch>
            <Route path="/:id" component={Content}/>
            <Route path="/" component={Content}/>
        </Switch>
    )
}