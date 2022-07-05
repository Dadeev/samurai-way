import React from 'react'
import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

type DialogItemType = {
    name: string
    id: number
}

const DialogItem: React.FC<DialogItemType> = (props) => {
    let path = '/dialogs/' + props.id;
    return (
        <div className={s.dialog + ' ' + s.active}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}

type MessageType = {
    message: string
}

const Message: React.FC<MessageType> = (props) => {
    return (
        <div className={s.message}>{props.message}</div>
    )
}

type dialogsDataType = {
    id: number
    name: string
}

type messagesDataType = {
    id: number
    message: string
}
export const Dialogs = () => {

    let dialogsData: dialogsDataType[] = [
        {id: 1, name: 'Dimych'},
        {id: 2, name: 'Andrey'},
        {id: 3, name: 'Sveta'},
        {id: 4, name: 'Sasha'},
        {id: 5, name: 'Victor'},
        {id: 6, name: 'Valera'},
    ]

    let messagesData: messagesDataType[] = [
        {id: 1, message: 'Hello'},
        {id: 2, message: 'How is your It-camasutra?'},
        {id: 3, message: 'Yo'},
        {id: 4, message: 'Have a nice day'},
        {id: 5, message: 'It is a good month'},
        {id: 6, message: 'it incubator!'},
    ]

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsData.map((el) => {
                    return (
                        <DialogItem key={el.id} name={el.name} id={el.id}/>
                    )
                })}
            </div>
            <div className={s.messages}>
                {messagesData.map((el) => {
                    return (
                        <Message key={el.id} message={el.message}/>
                    )
                })}
            </div>
        </div>
    )
}
