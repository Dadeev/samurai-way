import React from "react";
import {ProfileInfo, ProfileType} from "./PropfileInfo/PropfileInfo";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";
import {ProfileUsersType} from "../redux/users-reducer";
import {Navigate} from "react-router-dom";

type ProfilePropsType = {
    profile: ProfileType
    updateStatus: (status: string) => void
    status: string
}

export const Profile = (props: ProfilePropsType) => {

    return (
        <div>
            <ProfileInfo profile={props.profile}
                         status={props.status}
                         updateStatus={props.updateStatus}
            />
            <MyPostsContainer/>
        </div>
    )
}