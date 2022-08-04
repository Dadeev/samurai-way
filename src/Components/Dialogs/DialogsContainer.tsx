import React from 'react'
import {sendMessageCreator, updateNewMessageBodyCreator} from "../redux/dialogs-reducer";
import {Store} from "redux";
import {Dialogs} from "./Dialogs";
import {StoreContext} from "../../StoreContext";
import {store} from "../redux/redux-store";


export const DialogsContainer = () => {
    return (
        <StoreContext.Consumer>
            {
                (store) => {
                    let state = store.getState().dialogsPage

                    const onSendMessageClick = () => {
                        store.dispatch(sendMessageCreator())
                    }
                    const onNewMessageChange = (body: string) => {
                        store.dispatch(updateNewMessageBodyCreator(body))
                    }
                    return <Dialogs dialogsPage={state}
                                    updateNewMessageBody={onNewMessageChange}
                                    sendMessageClick={onSendMessageClick}/>
                }
            }
        </StoreContext.Consumer>
    )
}
