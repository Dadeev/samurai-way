import React from "react";
import {addPostAC, UpdateNewPostTextAC} from "../../redux/profile-reducer";
import {ActionsTypes, postDataType, RootStateType, store} from "../../redux/redux-store";
import {MyPosts} from "./MyPosts";
import {Store} from "redux";
import {StoreContext} from "../../../StoreContext";

export const MyPostsContainer = () => {
    return (
        <StoreContext.Consumer>
            {
                (store) => {
                    let state = store.getState();
                    const AddPostHandler = () => {
                        store.dispatch(addPostAC())
                    }

                    const onPostChange = (text: string) => {
                        let action = UpdateNewPostTextAC(text)
                        store.dispatch(action);
                    }
                    return <MyPosts dispatch={store.dispatch}
                                    UpdateNewPostText={onPostChange}
                                    addPost={AddPostHandler}
                                    posts={state.profilePage.posts}
                                    newPostText={state.profilePage.newPostText}/>
                }
            }
        </StoreContext.Consumer>
    )
}