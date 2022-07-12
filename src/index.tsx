import React from 'react';
import './index.css';
import {addPost, state, stateType} from "./Components/redux/state";
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import App from "./App";


export const renderTree = (state: stateType) => {
    ReactDOM.render(
        <BrowserRouter>
            <App state={state} addPost={addPost}/>
        </BrowserRouter>,
        document.getElementById('root')
    );
}

renderTree(state)
// import openGoogle from './..google.js';
// import openYandex from './yandex.js';
// import openAllMaps from './libraries/maps.js'
// export default Yandex
// export default openAllMaps