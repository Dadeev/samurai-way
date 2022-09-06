import React from 'react';
import s from "./UsersAPI.module.css";
import userPhoto from "../../assets/images/user-image-icon-19.jpg";
import {UserType} from "../redux/users-reducer";
import {NavLink} from "react-router-dom";

type UsersType = {
    totalUsersCount: number
    pageSize: number
    currentPage: number
    onPageChanged: (pageNumber: number) => void
    users: UserType[]
    followingProgress: number[]
    isFetching: boolean
    follow: (userId: number) => void
    unFollow: (userId: number) => void
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
                        {u.followed ?
                            <button disabled={props.followingProgress.some(id => id === u.id)} onClick={() => {
                                props.unFollow(u.id)
                            }}>UnFollow</button> :
                            <button disabled={props.followingProgress.some(id => id === u.id)} onClick={() => {
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