export type postDataType = {
    id: number
    message: string
    likesCount: number
}
export type dialogsDataType = {
    id: number
    name: string
}
export type messagesDataType = {
    id: number
    message: string
}

export type stateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
}
export type ProfilePageType = {
    posts: postDataType[]
}
export type DialogsPageType = {
    dialogs: dialogsDataType[]
    messages: messagesDataType[]
}

export const state: stateType = {
    profilePage: {
        posts: [
            {id: 1, message: 'Hi, how are you?', likesCount: 15},
            {id: 2, message: 'It\'s my first post', likesCount: 20}
        ]
    },
    dialogsPage: {
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
}