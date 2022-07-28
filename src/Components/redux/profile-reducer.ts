import {ActionsTypes, postDataType, stateType} from "./state";
import sidebarReducer from "./sidebar-reducer";

const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-MESSAGE-BODY';

const profileReducer = (state: stateType, action: ActionsTypes) => {
    switch (action.type) {
        case ADD_POST:
            let newPost: postDataType = {
                id: 5,
                message: state.profilePage.newPostText,
                likesCount: 0
            }
            state.profilePage.posts.push(newPost)
            state.profilePage.newPostText = ''
            break;
        case UPDATE_NEW_POST_TEXT:
            state.profilePage.newPostText = action.newText
            break;
    }

    return state;
}

export const addPostAC = () => ({type: ADD_POST} as const)
export const UpdateNewPostTextAC = (text: string) => ({type: UPDATE_NEW_POST_TEXT, newText: text} as const)

export default profileReducer;