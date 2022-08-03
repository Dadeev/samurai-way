import React from "react";
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./PropfileInfo/PropfileInfo";
import {ActionsTypes, ProfilePageType} from "../redux/redux-store";



type ProfileType = {
    profilePage: ProfilePageType
    dispatch: (action: ActionsTypes) => void
    newPostText: string
}

export const Profile = (props: ProfileType) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts posts={props.profilePage.posts} dispatch={props.dispatch}
                     newPostText={props.profilePage.newPostText}/>
        </div>
    )
}