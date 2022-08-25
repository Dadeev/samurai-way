import React from "react";
import {ProfileInfo, ProfileType} from "./PropfileInfo/PropfileInfo";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";
import {ProfileUsersType} from "../redux/users-reducer";

type ProfilePropsType = {
    profile: ProfileType
}

export const Profile = (props: ProfilePropsType) => {
    return (
        <div>
            <ProfileInfo profile={props.profile}/>
            <MyPostsContainer/>
        </div>
    )
}