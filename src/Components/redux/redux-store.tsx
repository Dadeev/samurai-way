import {combineReducers, createStore} from "redux";
import profileReducer, {addPostAC, setUserProfile, UpdateNewPostTextAC} from "./profile-reducer";
import dialogsReducer, {sendMessageCreator, updateNewMessageBodyCreator} from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";
import {
    follow,
    setCurrentPage,
    setToggleFetching,
    setUsers,
    setTotalUsersCount,
    unfollow,
    usersReducer, ProfileUsersType
} from "./users-reducer";
import {ProfileType} from "../Profile/PropfileInfo/PropfileInfo";

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

export type ProfilePageType = {
    posts: postDataType[]
    newPostText: string
    profile: ProfileType
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

export type ActionsTypes =
    ReturnType<typeof addPostAC>
    | ReturnType<typeof UpdateNewPostTextAC>
    | ReturnType<typeof sendMessageCreator>
    | ReturnType<typeof updateNewMessageBodyCreator>
    | ReturnType<typeof follow>
    | ReturnType<typeof unfollow>
    | ReturnType<typeof setUsers>
    | ReturnType<typeof setCurrentPage>
    | ReturnType<typeof setTotalUsersCount>
    | ReturnType<typeof setToggleFetching>
    | ReturnType<typeof setUserProfile>

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    siteBarPage: sidebarReducer,
    usersPage: usersReducer
})

export type RootStateType = ReturnType<typeof store.getState>

export let store = createStore(reducers)

// @ts-ignore
window.store = store