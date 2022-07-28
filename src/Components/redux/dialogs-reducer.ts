import {ActionsTypes, stateType} from "./state";

const UPDATE_NEW_MESSAGE_BODY = "UPDATE-NEW-POST-BODY";
const SEND_MESSAGE = "SEND_MESSAGE";

const dialogsReducer = (state: stateType, action: ActionsTypes) => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            state.dialogsPage.newMessageBody = action.body
            break;
        case SEND_MESSAGE:
            let body = state.dialogsPage.newMessageBody;
            state.dialogsPage.newMessageBody = '';
            state.dialogsPage.messages.push({id: 6, message: body})
            break;
    }

    return state;
}

export const sendMessageCreator = () => ({type: SEND_MESSAGE} as const)
export const updateNewMessageBodyCreator = (body: string) => ({type: UPDATE_NEW_MESSAGE_BODY, body: body} as const)

export default dialogsReducer;