import React from 'react';
import './index.css';
import {RootStateType, store} from "./Components/redux/redux-store";
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import App from "./App";
import {Provider} from "react-redux";

const renderTree = (state: RootStateType) => {
    ReactDOM.render(
        <BrowserRouter>
            <Provider store={store}>
                <App state={state}/>
            </Provider>
        </BrowserRouter>,
        document.getElementById('root')
    );
}
renderTree(store.getState())

store.subscribe(() => {
    let state = store.getState();
    renderTree(state)
})

