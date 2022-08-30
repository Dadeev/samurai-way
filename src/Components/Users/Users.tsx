import React from 'react';
import s from "./UsersAPI.module.css";
import userPhoto from "../../assets/images/user-image-icon-19.jpg";
import {UserType} from "../redux/users-reducer";
import {NavLink} from "react-router-dom";
import axios from "axios";

type UsersType = {
    totalUsersCount: number
    pageSize: number
    currentPage: number
    onPageChanged: (pageNumber: number) => void
    users: UserType[]
    follow: (userID: number) => void
    unfollow: (userID: number) => void
}

export const Users = (props: UsersType) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }
    return (
        <>
            <div>
                {pages.map(p => {
                    return <span className={props.currentPage === p ? s.selectedPage : ''}
                                 onClick={() => props.onPageChanged(p)}>{p}</span>
                })}
            </div>
            {
                props.users.map(u =>
                    <div key={u.id}>
                <span>
                    <div>
                        <NavLink to={'/profile/' + u.id}>
                        {/*<img src={u.photos.small == null ? u.photos.small : userPhoto} className={s.photo}/>*/}
                            <img src={userPhoto} className={s.photo}/>
                        </NavLink>
                    </div>
                    <div>
                        {u.followed ? <button onClick={() => {
                                axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`,
                                    {
                                        withCredentials: true,
                                        headers: {'API-KEY': '01aa801c-2a8e-4bdc-82d2-9950462da9ea'}
                                    },)
                                    .then(response => {
                                        if (response.data.resultCode === 0) {
                                            props.unfollow(u.id)
                                        }
                                    })
                                props.unfollow(u.id)
                            }}>UnFollow</button> :
                            <button onClick={() => {
                                axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {},
                                    {
                                        withCredentials: true,
                                        headers: {'API-KEY': '01aa801c-2a8e-4bdc-82d2-9950462da9ea'}
                                    })
                                    .then(response => {
                                        if (response.data.resultCode === 0) {
                                            props.follow(u.id)
                                        }
                                    })
                                props.follow(u.id)
                            }}>Follow</button>}
                    </div>
                </span>
                        <span>
                    <span>
                        <div>{u.name}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        <div>{'u.location.city'}</div>
                        <div>{'u.location.country'}</div>
                    </span>
                </span>
                    </div>)
            }
        </>
    );
};