import React from "react";
import s from './Profile.module.css'
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./PropfileInfo/PropfileInfo";
import {postDataType, ProfilePageType} from "../redux/state";


type ProfileType = {
    state: ProfilePageType
}

export const Profile = (props: ProfileType) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts posts={props.state.posts}/>
        </div>
    )
}