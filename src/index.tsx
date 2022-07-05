import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

export type postDataType = {
    id: number
    message: string
    likesCount: number
}
const posts: postDataType[] = [
    {id: 1, message: 'Hi, how are you?', likesCount: 15},
    {id: 2, message: 'It\'s my first post', likesCount: 20}
]

export type dialogsDataType = {
    id: number
    name: string
}
export type messagesDataType = {
    id: number
    message: string
}
const dialogs: dialogsDataType[] = [
    {id: 1, name: 'Dimych'},
    {id: 2, name: 'Andrey'},
    {id: 3, name: 'Sveta'},
    {id: 4, name: 'Sasha'},
    {id: 5, name: 'Victor'},
    {id: 6, name: 'Valera'},
]
const messages: messagesDataType[] = [
    {id: 1, message: 'Hello'},
    {id: 2, message: 'How is your It-camasutra?'},
    {id: 3, message: 'Yo'},
    {id: 4, message: 'Have a nice day'},
    {id: 5, message: 'It is a good month'},
    {id: 6, message: 'it incubator!'},
]

ReactDOM.render(
    <App posts={posts} dialogs={dialogs} messages={messages}/>,
  document.getElementById('root')
);

// import openGoogle from './..google.js';
// import openYandex from './yandex.js';
// import openAllMaps from './libraries/maps.js'
// export default Yandex
// export default openAllMaps