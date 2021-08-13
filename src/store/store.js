import {createStore, applyMiddleware, combineReducers} from 'redux';
import thunk from "redux-thunk";

import imagesReducer from "./reducers/imagesReducer";
import categoryReducer from "./reducers/categoryReducer";
const middleware = [thunk];
const store = createStore(
    combineReducers({categoryReducer, imagesReducer}),
    applyMiddleware(...middleware)
);


export default store;
