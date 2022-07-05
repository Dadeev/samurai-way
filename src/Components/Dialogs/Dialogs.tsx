import React from 'react'
import s from './Dialogs.module.css'
import {DialogItem} from "./DialogItem/DialogItme";
import {Message} from "./Message/Message";

type dialogsDataType = {
    id: number
    name: string
}

type messagesDataType = {
    id: number
    message: string
}

export const Dialogs = () => {

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

    const dialogsElems = dialogs.map(d => <DialogItem key={d.id} name={d.name} id={d.id}/>)
    const messagesElems = messages.map(m => <Message key={m.id} message={m.message}/>)

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElems}
            </div>
            <div className={s.messages}>
                {messagesElems}
            </div>
        </div>
    )
}
