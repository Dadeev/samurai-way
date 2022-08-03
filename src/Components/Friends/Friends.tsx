import React from 'react'
import s from './Friends.module.css'
import {siteBarPageType} from "../redux/redux-store";

type FriendsType = {
    siteBarPage: siteBarPageType
}

export const Friends = (props: FriendsType) => {
    const styleForAvatars = {width: '45px', height: '45px', borderRadius: '50%'}
    const newFriendsAvatars = props.siteBarPage.newFriendsAvatars.map(a => <img key={a.id} src={a.avatar} alt=""
                                                                                style={styleForAvatars}/>)
    const newFriendsNames = props.siteBarPage.newFriendsNames.map(n => <span key={n.id}>{n.name}</span>)
    return (
        <div>
            <div className={s.textFriends}>
                Friends
            </div>
            <div className={s.avatars}>
                {newFriendsAvatars}
            </div>
            <div className={s.textNameFriends}>
                {newFriendsNames}
            </div>
        </div>
    )
}