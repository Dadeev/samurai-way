import React from 'react';
import './index.css';
import {RootStateType, store} from "./Components/redux/redux-store";
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import App from "./App";

const renderTree = (state: RootStateType) => {
    ReactDOM.render(
        <BrowserRouter>
            <App state={state} dispatch={store.dispatch.bind(store)} store={store}/>
        </BrowserRouter>,
        document.getElementById('root')
    );
}
renderTree(store.getState())

store.subscribe(() => {
    let state = store.getState();
    renderTree(state)
})

