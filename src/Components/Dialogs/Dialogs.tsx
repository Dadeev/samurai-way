import React from 'react'
import s from './Dialogs.module.css'
import {DialogItem} from "./DialogItem/DialogItme";
import {Message} from "./Message/Message";
import {dialogsDataType, messagesDataType} from "../../index";

type DialogsType = {
    dialogs: dialogsDataType[]
    messages: messagesDataType[]
}

export const Dialogs = (props: DialogsType) => {

    const dialogsElems = props.dialogs.map(d => <DialogItem key={d.id} name={d.name} id={d.id}/>)
    const messagesElems = props.messages.map(m => <Message key={m.id} message={m.message}/>)

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
