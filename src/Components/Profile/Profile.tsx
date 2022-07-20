import React from "react";
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./PropfileInfo/PropfileInfo";
import {postDataType, ProfilePageType} from "../redux/state";


type ProfileType = {
    profilePage: ProfilePageType
    addPost: () => void
    newPostText: string
    updateNewPostText: (newText: string) => void
}

export const Profile = (props: ProfileType) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts posts={props.profilePage.posts} addPost={props.addPost} newPostText={props.profilePage.newPostText}
                     updateNewPostText={props.updateNewPostText}/>
        </div>
    )
}