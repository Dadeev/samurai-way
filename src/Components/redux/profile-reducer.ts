import {ActionsTypes, postDataType, ProfilePageType} from "./redux-store";
import {ProfileType} from "../Profile/PropfileInfo/PropfileInfo";
import {Dispatch} from "redux";
import {profileAPI} from "../../api/api";

const ADD_POST = "ADD-POST";
const SET_USER_PROFILE = 'SET-USERS-PROFILE';
const SET_STATUS = 'SET-STATUS';

let initialState: ProfilePageType = {
    posts: [
        {id: 1, message: 'Hi, how are you?', likesCount: 15},
        {id: 2, message: 'It\'s my first post', likesCount: 20}
    ],
    profile: {
        "aboutMe": '',
        "contacts": {
            "facebook": '',
            "website": '',
            "vk": '',
            "twitter": '',
            "instagram": '',
            "youtube": '',
            "github": '',
            "mainLink": ''
        },
        "lookingForAJob": false,
        "lookingForAJobDescription": false,
        "fullName": "",
        "userId": 0,
        "photos": {
            "small": '',
            "large": ''
        }
    },
    status: 'some status'
}

const profileReducer = (state = initialState, action: ActionsTypes): ProfilePageType => {
    switch (action.type) {
        case ADD_POST: {
            let newPost: postDataType = {
                id: 5,
                message: action.newPostText,
                likesCount: 0
            }
            return {
                ...state,
                posts: [...state.posts, newPost],
            }
        }
        case SET_USER_PROFILE : {
            return {...state, profile: action.profile}
        }
        case SET_STATUS : {
            return {...state, status: action.status}
        }
        default:
            return state;
    }
}

export const addPostAC = (newPostText: string) => ({type: ADD_POST, newPostText} as const)
export const setUserProfile = (profile: ProfileType) => ({type: SET_USER_PROFILE, profile} as const)
export const setStatus = (status: string) => ({type: SET_STATUS, status} as const)

export const getUserProfile = (userId: string) => {
    return (dispatch: Dispatch) => {
        profileAPI.getProfile(userId)
            .then(data => {
                dispatch(setUserProfile(data))
            })
    }
}

export const getStatus = (userId: string) => {
    return (dispatch: Dispatch) => {
        profileAPI.getStatus(userId)
            .then(data => {
                dispatch(setStatus(data))
            })
    }
}

export const updateStatus = (status: string) => {
    return (dispatch: Dispatch) => {
        profileAPI.updateStatus(status)
            .then(data => {
                if (data.resultCode === 0) {
                    dispatch(setStatus(status))
                }
            })
    }
}
export default profileReducer;