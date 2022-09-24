import React, {ChangeEvent} from 'react'
import s from './Dialogs.module.css'
import {DialogItem} from "./DialogItem/DialogItme";
import {Message} from "./Message/Message";
import {MessageAvatars} from "./Message/MessageAvatars/MessageAvatars";
import {DialogsPageType} from "../redux/redux-store";
import {Field, InjectedFormProps, reduxForm} from "redux-form";

type DialogsType = {
    updateNewMessageBody: (body: string) => void
    sendMessage: (newMessageBody: string) => void
    dialogsPage: DialogsPageType
    isAuth: boolean
}

export const Dialogs = (props: DialogsType) => {

    let state = props.dialogsPage

    const dialogsElems = state.dialogs.map(d => <DialogItem key={d.id} name={d.name} id={d.id}/>)
    const messagesElems = state.messages.map(m => <Message key={m.id} message={m.message}/>)

    const AddNewMessageHandler = (formData: AddMessageFormType) => {
        props.sendMessage(formData.newMessageBody)
    }

    return (
        <div className={s.dialogs}>
            <MessageAvatars/>
            <div className={s.dialogsItems}>
                {dialogsElems}
            </div>
            <div className={s.messages}>
                {messagesElems}
                <AddMessageFormRedux onSubmit={AddNewMessageHandler}/>
            </div>
        </div>
    )
}

export type AddMessageFormType = {
    newMessageBody: string
}

const AddMessageForm = (props: InjectedFormProps<AddMessageFormType>) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={'textarea'} name={'newMessageBody'} placeholder={'Enter your message'}/>
            </div>
            <div>
                <button>Send</button>
            </div>
        </form>
    )
}

const AddMessageFormRedux = reduxForm<AddMessageFormType>({form: 'dialogAddMessageForm'})(AddMessageForm)