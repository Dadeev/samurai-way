import React from 'react'
import {sendMessageCreator, updateNewMessageBodyCreator} from "../redux/dialogs-reducer";
import {Store} from "redux";
import {Dialogs} from "./Dialogs";

type DialogsType = {
    store: Store
}

export const DialogsContainer = (props: DialogsType) => {

    let state = props.store.getState().dialogsPage

    const onSendMessageClick = () => {
        props.store.dispatch(sendMessageCreator())
    }
    const onNewMessageChange = (body: string) => {
        props.store.dispatch(updateNewMessageBodyCreator(body))
    }
    return (
        <Dialogs dialogsPage={state} updateNewMessageBody={onNewMessageChange} sendMessageClick={onSendMessageClick}/>
    )
}
