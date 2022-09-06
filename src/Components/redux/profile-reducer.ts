import {ActionsTypes, postDataType, ProfilePageType} from "./redux-store";
import {ProfileUsersType} from "./users-reducer";
import {ProfileType} from "../Profile/PropfileInfo/PropfileInfo";
import {Dispatch} from "redux";
import {commonAPI} from "../../api/api";

const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-MESSAGE-BODY';
const SET_USER_PROFILE = 'SET-USERS-PROFILE';

let initialState: ProfilePageType = {
    posts: [
        {id: 1, message: 'Hi, how are you?', likesCount: 15},
        {id: 2, message: 'It\'s my first post', likesCount: 20}
    ],
    newPostText: '123',
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
    }
}

const profileReducer = (state = initialState, action: ActionsTypes): ProfilePageType => {
    switch (action.type) {
        case ADD_POST: {
            let newPost: postDataType = {
                id: 5,
                message: state.newPostText,
                likesCount: 0
            }
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: ''
            }
        }
        case UPDATE_NEW_POST_TEXT: {
            return {
                ...state,
                newPostText: action.newText
            }
        }
        case SET_USER_PROFILE : {
            return {...state, profile: action.profile}
        }
        default:
            return state;
    }
}

export const addPostAC = () => ({type: ADD_POST} as const)
export const UpdateNewPostTextAC = (text: string) => ({type: UPDATE_NEW_POST_TEXT, newText: text} as const)
export const setUserProfile = (profile: ProfileType) => ({type: SET_USER_PROFILE, profile} as const)

export const setProfileOfUser = (userId: string) => {
    return (dispatch: Dispatch) => {
        commonAPI.getProfile(userId)
            .then(data => {
                dispatch(setUserProfile(data))
            })
    }
}


export default profileReducer;