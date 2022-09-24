import React from "react";
import {addPostAC} from "../../redux/profile-reducer";
import {postDataType, RootStateType} from "../../redux/redux-store";
import {MyPosts} from "./MyPosts";
import {Dispatch} from "redux";
import {connect} from "react-redux";

type MapStateToPropsType = {
    posts: postDataType[]
}
type MapDispatchToPropsType = {
    dispatch: Dispatch
    addPost: (newPostText: string) => void
}

const mapStateToProps = (state: RootStateType): MapStateToPropsType => ({
    posts: state.profilePage.posts
})

const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => ({
    dispatch,
    addPost: (newPostText: string) => {
        dispatch(addPostAC(newPostText))
    }
})

export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)