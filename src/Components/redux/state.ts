// import {renderTree} from "../../renderTree";

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
}
export type siteBarPageType = {
    newFriendsAvatars: newFriendsAvatarsType[]
    newFriendsNames: newFriendsNamesType[]
}

const state: stateType = {
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
        ]
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
}

export type StoreType = {
    _state: stateType
    _callSubscriber: (state: stateType) => void
    addPost: () => void
    updateNewPostText: (newText: string) => void
    subscribe: (observer: (state: stateType) => void) => void
    getState: () => stateType
}

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
            ]
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
    addPost() {
        let newPost: postDataType = {
            id: 5,
            message: state.profilePage.newPostText,
            likesCount: 0
        }
        this._state.profilePage.posts.push(newPost)
        this._state.profilePage.newPostText = ''
        this._callSubscriber(this._state)
    },
    updateNewPostText(newText: string) {
        this._state.profilePage.newPostText = newText
        this._callSubscriber(this._state)
    },
    subscribe(observer: (state: stateType) => void) {
        this._callSubscriber = observer
    },
    getState() {
        return this._state
    }
}
