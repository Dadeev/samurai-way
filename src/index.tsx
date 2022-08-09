import React from 'react';
import './index.css';
import {RootStateType, store} from "./Components/redux/redux-store";
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import App from "./App";
import {Provider} from "react-redux";

ReactDOM.render(
    <BrowserRouter>
        <Provider store={store}>
            <App state={store.getState()}/>
        </Provider>
    </BrowserRouter>,
    document.getElementById('root')
);

