import {ActionsTypes, DialogsPageType} from "./redux-store";


const UPDATE_NEW_MESSAGE_BODY = "UPDATE-NEW-POST-BODY";
const SEND_MESSAGE = "SEND_MESSAGE";

let initialState: DialogsPageType = {
    dialogs: [
        {id: 1, name: 'Dimych'},
        {id: 2, name: 'Andrey'},
        {id: 3, name: 'Sveta'},
        {id: 4, name: 'Sasha'},
        {id: 5, name: 'Victor'},
        {id: 6, name: 'Valera'},
    ],
    messages: [
        {id: 1, message: 'Hello'},
        {id: 2, message: 'How is your It-camasutra?'},
        {id: 3, message: 'Yo'},
        {id: 4, message: 'Have a nice day'},
        {id: 5, message: 'It is a good month'},
        {id: 6, message: 'it incubator!'},
    ],
    newMessageBody: ''
}

const dialogsReducer = (state = initialState, action: ActionsTypes) => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            state.newMessageBody = action.body
            break;
        case SEND_MESSAGE:
            let body = state.newMessageBody
            state.newMessageBody = '';
            state.messages.push({id: 6, message: body})
            break;
    }

    return state;
}

export const sendMessageCreator = () => ({type: SEND_MESSAGE} as const)
export const updateNewMessageBodyCreator = (body: string) => ({type: UPDATE_NEW_MESSAGE_BODY, body: body} as const)

export default dialogsReducer;