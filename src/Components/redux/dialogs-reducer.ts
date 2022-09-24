import {ActionsTypes, DialogsPageType} from "./redux-store";

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
    ]
}

const dialogsReducer = (state = initialState, action: ActionsTypes) => {
    switch (action.type) {
        case SEND_MESSAGE:
            return {
                ...state,
                messages: [...state.messages, {id: 6, message: action.newMessageBody}]
            }
        default:
            return state;
    }

    return state;
}

export const sendMessageCreator = (newMessageBody: string) => ({type: SEND_MESSAGE, newMessageBody} as const)

export default dialogsReducer;