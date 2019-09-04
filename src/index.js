import React from 'react';
import {createStore , applyMiddleware} from "redux";
import App from './App';
import reducer from "./Reducer/reducer";
import {Provider} from "react-redux";
import { createLogger } from 'redux-logger';
import thunk from "redux-thunk";
import {render} from "react-dom";

let store = createStore(reducer,applyMiddleware(createLogger(),thunk));
render(
        <Provider store = {store}>
             <App></App>
        </Provider>
        ,
        document.getElementById("root")
)

