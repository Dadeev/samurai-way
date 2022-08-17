import React from 'react'
import {UserType} from "../redux/users-reducer";
import axios from "axios";
import userPhoto from '../../assets/images/user-image-icon-19.jpg'
import s from './Users.module.css'

type UserPropsType = {
    users: UserType[]
    follow: (userID: number) => void
    unfollow: (userID: number) => void
    setUsers: (users: UserType[]) => void
}

export class Users extends React.Component<UserPropsType> {
    //     [{
    //     id: 1,
    //     photoUrl: 'https://services.tineye.com/source_image/03520dc3fba18a3b023872f037e3d564312af072',
    //     followed: false,
    //     fullName: 'Dima',
    //     status: 'Im a boss',
    //     location: {city: 'Minsk', country: 'Belarus'}
    // },
    //     {
    //         id: 2,
    //         photoUrl: 'https://services.tineye.com/source_image/03520dc3fba18a3b023872f037e3d564312af072',
    //         followed: true,
    //         fullName: 'Andrew',
    //         status: 'Im a boss too',
    //         location: {city: 'Moscow', country: 'Russia'}
    //     },
    //     {
    //         id: 3,
    //         photoUrl: 'https://services.tineye.com/source_image/03520dc3fba18a3b023872f037e3d564312af072',
    //         followed: false,
    //         fullName: 'Sasha',
    //         status: 'Im a boss too',
    //         location: {city: 'Kiev', country: 'Ukraine'}
    //     },]
    constructor(props:UserPropsType) {
        super(props);
        if (this.props.users.length === 0) {
            axios.get('https://social-network.samuraijs.com/api/1.0/users')
                .then(response => {
                    this.props.setUsers(response.data.items)
                })
        }
    }
    render() {
        return (
            <>
                {
                    this.props.users.map(u =>
                        <div key={u.id}>
                <span>
                    <div>
                        {/*<img src={u.photos.small == null ? u.photos.small : userPhoto} className={s.photo}/>*/}
                        <img src={userPhoto} className={s.photo}/>
                    </div>
                    <div>
                        {u.followed ? <button onClick={() => this.props.unfollow(u.id)}>UnFollow</button> :
                            <button onClick={() => this.props.follow(u.id)}>Follow</button>}
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
        )
    }
}