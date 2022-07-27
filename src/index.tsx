import React from 'react';
import './index.css';
import {stateType, store} from "./Components/redux/state";
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import App from "./App";

const renderTree = (state: stateType) => {
    ReactDOM.render(
        <BrowserRouter>
            <App state={state} dispatch={store.dispatch.bind(store)} store={store}/>
        </BrowserRouter>,
        document.getElementById('root')
    );
}
store.subscribe(renderTree)

renderTree(store.getState())
