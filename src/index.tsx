import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {state} from "./Components/redux/state";

ReactDOM.render(
    <App state={state}/>,
    document.getElementById('root')
);

// import openGoogle from './..google.js';
// import openYandex from './yandex.js';
// import openAllMaps from './libraries/maps.js'
// export default Yandex
// export default openAllMaps