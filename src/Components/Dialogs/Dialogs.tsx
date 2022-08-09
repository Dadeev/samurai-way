import React, {ChangeEvent} from 'react'
import s from './Dialogs.module.css'
import {DialogItem} from "./DialogItem/DialogItme";
import {Message} from "./Message/Message";
import {MessageAvatars} from "./Message/MessageAvatars/MessageAvatars";
import {DialogsPageType} from "../redux/redux-store";

type DialogsType = {
    updateNewMessageBody: (body: string) => void
    sendMessage: () => void
    dialogsPage: DialogsPageType
}

export const Dialogs = (props: DialogsType) => {

    let state = props.dialogsPage

    const dialogsElems = state.dialogs.map(d => <DialogItem key={d.id} name={d.name} id={d.id}/>)
    const messagesElems = state.messages.map(m => <Message key={m.id} message={m.message}/>)
    const newMessageBody = state.newMessageBody


    const onSendMessageClick = () => {
        props.sendMessage()
    }
    const onNewMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let body = e.target.value;
        props.updateNewMessageBody(body)
    }
    return (
        <div className={s.dialogs}>
            <MessageAvatars/>
            <div className={s.dialogsItems}>
                {dialogsElems}
            </div>
            <div className={s.messages}>
                {messagesElems}
                <div>
                    <div>
                        <textarea value={newMessageBody} onChange={onNewMessageChange}
                                  placeholder={'Enter your message'}></textarea>
                    </div>
                    <div>
                        <button onClick={onSendMessageClick}>Send</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
