import React from 'react'
import {sendMessageCreator, updateNewMessageBodyCreator} from "../redux/dialogs-reducer";
import {Dispatch} from "redux";
import {Dialogs} from "./Dialogs";
import {DialogsPageType, RootStateType} from "../redux/redux-store";
import {connect} from "react-redux";

type MapStateToPropsType = {
    dialogsPage: DialogsPageType
}
type MapDispatchToPropsType = {
    updateNewMessageBody: (body: string) => void
    sendMessage: () => void
}

const mapStateToProps = (state: RootStateType): MapStateToPropsType => ({dialogsPage: state.dialogsPage})
const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => ({
    updateNewMessageBody: (body: string) => {
        dispatch(updateNewMessageBodyCreator(body))
    },
    sendMessage: () => {
        dispatch(sendMessageCreator())
    }
})

export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)