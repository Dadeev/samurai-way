import React from "react";
import {ProfileInfo} from "./PropfileInfo/PropfileInfo";
import {ActionsTypes, ProfilePageType} from "../redux/redux-store";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";
import {Store} from "redux";


type ProfileType = {
    store: Store
}

export const Profile = (props: ProfileType) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPostsContainer store={props.store}/>
        </div>
    )
}