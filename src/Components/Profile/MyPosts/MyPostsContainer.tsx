import React from "react";
import {addPostAC, UpdateNewPostTextAC} from "../../redux/profile-reducer";
import {postDataType, RootStateType} from "../../redux/redux-store";
import {MyPosts} from "./MyPosts";
import {Dispatch} from "redux";
import {connect} from "react-redux";

type MapStateToPropsType = {
    posts: postDataType[]
    newPostText: string
}
type MapDispatchToPropsType = {
    dispatch: Dispatch
    UpdateNewPostText: (text: string) => void
    addPost: () => void
}

const mapStateToProps = (state: RootStateType): MapStateToPropsType => ({
    posts: state.profilePage.posts,
    newPostText: state.profilePage.newPostText
})

const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => ({
    dispatch,
    UpdateNewPostText: (text: string) => {
        let action = UpdateNewPostTextAC(text)
        dispatch(action);
    },
    addPost: () => {
        dispatch(addPostAC())
    }
})

export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)