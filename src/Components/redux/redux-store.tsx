import {applyMiddleware, combineReducers, createStore} from "redux";
import profileReducer, {addPostAC, setStatus, setUserProfile, UpdateNewPostTextAC} from "./profile-reducer";
import dialogsReducer, {sendMessageCreator, updateNewMessageBodyCreator} from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";
import {
    followSuccess,
    setCurrentPage,
    setToggleFetching,
    setUsers,
    setTotalUsersCount,
    unfollowSuccess,
    usersReducer, toggleFollowingProgress
} from "./users-reducer";
import {ProfileType} from "../Profile/PropfileInfo/PropfileInfo";
import {authReducer, setAuthUserData} from "./auth-reducer";
import thunkMiddleware from 'redux-thunk'

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
    status: string
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
    | ReturnType<typeof followSuccess>
    | ReturnType<typeof unfollowSuccess>
    | ReturnType<typeof setUsers>
    | ReturnType<typeof setCurrentPage>
    | ReturnType<typeof setTotalUsersCount>
    | ReturnType<typeof setToggleFetching>
    | ReturnType<typeof setUserProfile>
    | ReturnType<typeof setAuthUserData>
    | ReturnType<typeof toggleFollowingProgress>
    | ReturnType<typeof setStatus>


let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    siteBarPage: sidebarReducer,
    usersPage: usersReducer,
    auth: authReducer
})

export type RootStateType = ReturnType<typeof store.getState>

export let store = createStore(reducers,
    applyMiddleware(thunkMiddleware)
)

// @ts-ignore
window.store = store