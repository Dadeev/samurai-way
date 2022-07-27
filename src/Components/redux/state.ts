// import {renderTree} from "../../renderTree";
const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-MESSAGE-BODY';
const UPDATE_NEW_MESSAGE_BODY = "UPDATE-NEW-POST-BODY";
const SEND_MESSAGE = "SEND_MESSAGE";

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
export type newFriendsAvatarsType = {
    id: number
    avatar: string
}
export type newFriendsNamesType = {
    id: number
    name: string
}

export type stateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
    siteBarPage: siteBarPageType
}
export type ProfilePageType = {
    posts: postDataType[]
    newPostText: string
}
export type DialogsPageType = {
    dialogs: dialogsDataType[]
    messages: messagesDataType[]
    newMessageBody: string
}
export type siteBarPageType = {
    newFriendsAvatars: newFriendsAvatarsType[]
    newFriendsNames: newFriendsNamesType[]
}

// const state: stateType = {
//     profilePage: {
//         posts: [
//             {id: 1, message: 'Hi, how are you?', likesCount: 15},
//             {id: 2, message: 'It\'s my first post', likesCount: 20}
//         ],
//         newPostText: '123'
//     },
//     dialogsPage: {
//         dialogs: [
//             {id: 1, name: 'Dimych'},
//             {id: 2, name: 'Andrey'},
//             {id: 3, name: 'Sveta'},
//             {id: 4, name: 'Sasha'},
//             {id: 5, name: 'Victor'},
//             {id: 6, name: 'Valera'},
//         ],
//         messages: [
//             {id: 1, message: 'Hello'},
//             {id: 2, message: 'How is your It-camasutra?'},
//             {id: 3, message: 'Yo'},
//             {id: 4, message: 'Have a nice day'},
//             {id: 5, message: 'It is a good month'},
//             {id: 6, message: 'it incubator!'},
//         ]
//     },
//     siteBarPage: {
//         newFriendsAvatars: [
//             {id: 1, avatar: 'https://android-obzor.com/wp-content/uploads/2022/03/1-20.jpg'},
//             {id: 2, avatar: 'https://meragor.com/files/styles//220_220_bottom_wm/for_vk.jpg'},
//             {
//                 id: 3,
//                 avatar: 'https://papik.pro/uploads/posts/2021-09/1631887239_8-papik-pro-p-risunki-malenkie-anime-8.jpg'
//             }
//         ],
//         newFriendsNames: [
//             {id: 1, name: 'Valera'},
//             {id: 2, name: 'Sasha'},
//             {id: 3, name: 'Andrey'}
//         ]
//     }
// }

export type StoreType = {
    _state: stateType
    _callSubscriber: (state: stateType) => void
    subscribe: (observer: (state: stateType) => void) => void
    getState: () => stateType
    dispatch: (action: ActionsTypes) => void
}
export type ActionsTypes =
    ReturnType<typeof addPostAC>
    | ReturnType<typeof UpdateNewPostTextAC>
    | ReturnType<typeof sendMessageCreator>
    | ReturnType<typeof updateNewMessageBodyCreator>

export let store: StoreType = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'Hi, how are you?', likesCount: 15},
                {id: 2, message: 'It\'s my first post', likesCount: 20}
            ],
            newPostText: '123'
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
            ],
            newMessageBody: '',
        },
        siteBarPage: {
            newFriendsAvatars: [
                {id: 1, avatar: 'https://android-obzor.com/wp-content/uploads/2022/03/1-20.jpg'},
                {id: 2, avatar: 'https://meragor.com/files/styles//220_220_bottom_wm/for_vk.jpg'},
                {
                    id: 3,
                    avatar: 'https://papik.pro/uploads/posts/2021-09/1631887239_8-papik-pro-p-risunki-malenkie-anime-8.jpg'
                }
            ],
            newFriendsNames: [
                {id: 1, name: 'Valera'},
                {id: 2, name: 'Sasha'},
                {id: 3, name: 'Andrey'}
            ]
        }
    },
    _callSubscriber(state: stateType) {
        console.log('State changed')
    },

    getState() {
        return this._state
    },
    subscribe(observer: (state: stateType) => void) {
        this._callSubscriber = observer
    },

    dispatch(action) {
        if (action.type === ADD_POST) {
            let newPost: postDataType = {
                id: 5,
                message: this._state.profilePage.newPostText,
                likesCount: 0
            }
            this._state.profilePage.posts.push(newPost)
            this._state.profilePage.newPostText = ''
            this._callSubscriber(this._state)
        } else if (action.type === UPDATE_NEW_POST_TEXT) {
            this._state.profilePage.newPostText = action.newText
            this._callSubscriber(this._state)
        } else if (action.type === UPDATE_NEW_MESSAGE_BODY) {
            this._state.dialogsPage.newMessageBody = action.body
            this._callSubscriber(this._state)
        } else if (action.type === SEND_MESSAGE) {
            let body = this._state.dialogsPage.newMessageBody;
            this._state.dialogsPage.newMessageBody = '';
            this._state.dialogsPage.messages.push({id: 6, message: body})
            this._callSubscriber(this._state)
        }
    }
}

export const addPostAC = () => ({type: ADD_POST} as const)
export const UpdateNewPostTextAC = (text: string) => ({type: UPDATE_NEW_POST_TEXT, newText: text} as const)

export const sendMessageCreator = () => ({type: SEND_MESSAGE} as const)
export const updateNewMessageBodyCreator = (body: string) => ({type: UPDATE_NEW_MESSAGE_BODY, body: body} as const)