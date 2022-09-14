import React from 'react'
import s from './PropfileInfo.module.css'
import {ProfileUsersType} from "../../redux/users-reducer";
import {Preloader} from "../../common/Preloader/Preloader";
import {ProfileStatus} from "../ProfileStatus";

type ProfilePhotosType = {
    "small": string
    "large": string
}
type ProfileContactsType = {
    "facebook": string
    "website": string
    "vk": string
    "twitter": string
    "instagram": string
    "youtube": string
    "github": string
    "mainLink": string
}
export type ProfileType = {
    "aboutMe": string
    "contacts": ProfileContactsType
    "lookingForAJob": boolean
    "lookingForAJobDescription": boolean
    "fullName": string
    "userId": number
    "photos": ProfilePhotosType
}
export type ProfileInfo = {
    profile: ProfileType
    updateStatus: (status: string) => void
    status: string
}

export const ProfileInfo = (props: ProfileInfo) => {
    if (!props.profile) {
        return <Preloader/>
    }
    return (
        <div>
            {/*<div>*/}
            {/*    <img*/}
            {/*        src="https://images.ctfassets.net/hrltx12pl8hq/3j5RylRv1ZdswxcBaMi0y7/b84fa97296bd2350db6ea194c0dce7db/Music_Icon.jpg"*/}
            {/*        alt=""/>*/}
            {/*</div>*/}
            <div className={s.descriptionBlock}>
                <img src={props.profile.photos.large}/>
                <ProfileStatus status={props.status} updateStatus={props.updateStatus}/>
            </div>
        </div>
    )
}