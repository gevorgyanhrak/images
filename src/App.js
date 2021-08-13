import React from "react";
import {BrowserRouter as Router,} from "react-router-dom";

import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import {Provider} from "react-redux";
import store from "./store/store";
import Sections from "./components/Sections";

function App() {
    return (
        <Provider store={store}>
            <Router>
                <div className="App">
                    <div className="container-fluid">
                        <Sections/>
                    </div>
                </div>
            </Router>
        </Provider>
    );
}

export default App;
