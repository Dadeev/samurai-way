import {ActionsTypes, postDataType, ProfilePageType} from "./redux-store";

const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-MESSAGE-BODY';

let initialState: ProfilePageType = {
    posts: [
        {id: 1, message: 'Hi, how are you?', likesCount: 15},
        {id: 2, message: 'It\'s my first post', likesCount: 20}
    ],
    newPostText: '123'
}

const profileReducer = (state = initialState, action: ActionsTypes) => {
    switch (action.type) {
        case ADD_POST: {
            let newPost: postDataType = {
                id: 5,
                message: state.newPostText,
                likesCount: 0
            }
            let stateCopy = {...state};
            stateCopy.posts = [...state.posts];
            stateCopy.posts.push(newPost);
            stateCopy.newPostText = '';
            return stateCopy;
            // return {
            //     ...state,
            //     posts: [
            //         ...state.posts,
            //         state.posts.push(newPost)
            //     ],
            //     newPostText: ''
            // }
            break;
        }
        case UPDATE_NEW_POST_TEXT: {
            let stateCopy = {...state};
            stateCopy.newPostText = action.newText
            return stateCopy;
            break;
        }
        default:
            return state;
    }
}

export const addPostAC = () => ({type: ADD_POST} as const)
export const UpdateNewPostTextAC = (text: string) => ({type: UPDATE_NEW_POST_TEXT, newText: text} as const)

export default profileReducer;