import {Route, Switch} from "react-router-dom";
import React, {lazy, Suspense} from 'react';

const Content = lazy(() => import("../components/Content"));

export default function Routes() {
    return (

        <Suspense fallback={<div>Loading...</div>}>
            <Switch>
                <Route path="/:id" component={Content}/>
                <Route path="/" component={Content}/>
            </Switch>
        </ Suspense>
    )
}