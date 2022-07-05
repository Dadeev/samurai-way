import React from "react";
import s from "../Dialogs.module.css";

type MessageType = {
    message: string
}

export const Message: React.FC<MessageType> = (props) => {
    return (
        <div className={s.message}>{props.message}</div>
    )
}