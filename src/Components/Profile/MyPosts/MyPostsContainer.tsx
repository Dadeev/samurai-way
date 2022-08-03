import React from "react";
import {addPostAC, UpdateNewPostTextAC} from "../../redux/profile-reducer";
import {ActionsTypes, postDataType, RootStateType} from "../../redux/redux-store";
import {MyPosts} from "./MyPosts";
import {Store} from "redux";

type myPostType = {
    store: Store
}

export const MyPostsContainer = (props: myPostType) => {
    let state = props.store.getState();
    const AddPostHandler = () => {
        props.store.dispatch(addPostAC())
    }

    const onPostChange = (text: string) => {
        let action = UpdateNewPostTextAC(text)
        props.store.dispatch(action);
    }

    return (
        <MyPosts dispatch={props.store.dispatch} UpdateNewPostText={onPostChange}
                 addPost={AddPostHandler} posts={state.profilePage.posts}
                 newPostText={state.profilePage.newPostText}/>
    )
}