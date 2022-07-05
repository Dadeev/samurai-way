import React from 'react'
import s from './Dialogs.module.css'
import {DialogItem} from "./DialogItem/DialogItme";
import {Message} from "./Message/Message";
import {dialogsDataType, DialogsPageType, messagesDataType, postDataType, stateType} from "../redux/state";
import {MessageAvatars} from "./Message/MessageAvatars/MessageAvatars";


type DialogsType = {
    state: DialogsPageType
}

export const Dialogs = (props: DialogsType) => {

    const dialogsElems = props.state.dialogs.map(d => <DialogItem key={d.id} name={d.name} id={d.id}/>)
    const messagesElems = props.state.messages.map(m => <Message key={m.id} message={m.message}/>)

    return (
        <div className={s.dialogs}>
            <MessageAvatars/>
            <div className={s.dialogsItems}>
                {dialogsElems}
            </div>
            <div className={s.messages}>
                {messagesElems}
            </div>
        </div>
    )
}
