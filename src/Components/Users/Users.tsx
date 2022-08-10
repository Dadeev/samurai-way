import React from 'react'
import {UserType} from "../redux/users-reducer";
import s from './Users.module.css'

type UserPropsType = {
    users: UserType[]
    follow: (userID: number) => void
    unfollow: (userID: number) => void
    setUsers: (users: UserType[]) => void
}

export const Users = (props: UserPropsType) => {
    if (props.users.length === 0) {
        props.setUsers([
            {
                id: 1,
                photoUrl: 'https://services.tineye.com/source_image/03520dc3fba18a3b023872f037e3d564312af072',
                followed: false,
                fullName: 'Dima',
                status: 'Im a boss',
                location: {city: 'Minsk', country: 'Belarus'}
            },
            {
                id: 2,
                photoUrl: 'https://services.tineye.com/source_image/03520dc3fba18a3b023872f037e3d564312af072',
                followed: true,
                fullName: 'Andrew',
                status: 'Im a boss too',
                location: {city: 'Moscow', country: 'Russia'}
            },
            {
                id: 3,
                photoUrl: 'https://services.tineye.com/source_image/03520dc3fba18a3b023872f037e3d564312af072',
                followed: false,
                fullName: 'Sasha',
                status: 'Im a boss too',
                location: {city: 'Kiev', country: 'Ukraine'}
            },
        ])
    }
    const mapedUsers = props.users.map(u =>
        <div key={u.id}>
                <span>
                    <div>
                        <img src={u.photoUrl} className={s.photo}/>
                    </div>
                    <div>
                        {u.followed ? <button onClick={() => props.unfollow(u.id)}>UnFollow</button> :
                            <button onClick={() => props.follow(u.id)}>Follow</button>}
                    </div>
                </span>
            <span>
                    <span>
                        <div>{u.fullName}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        <div>{u.location.city}</div>
                        <div>{u.location.country}</div>
                    </span>
                </span>
        </div>)

    return (
        <>
            {mapedUsers}
        </>
    )
}