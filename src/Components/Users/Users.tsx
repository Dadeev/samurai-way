import React from 'react'
import {UserType} from "../redux/users-reducer";
import axios from "axios";
import userPhoto from '../../assets/images/user-image-icon-19.jpg'
import s from './Users.module.css'

type UserPropsType = {
    users: UserType[]
    pageSize: number
    totalUsersCount: number
    currentPage: number
    follow: (userID: number) => void
    unfollow: (userID: number) => void
    setUsers: (users: UserType[]) => void
    setCurrentPage: (currentPage: number) => void
    setTotalUsersCount: (totalCount: number) => void
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
    //     }
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items)
                this.props.setTotalUsersCount(response.data.totalCount)
            })
    }

    onPageChanged = (pageNumber: number) => {
        this.props.setCurrentPage(pageNumber)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items)
            })
    }

    render() {
        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize)
        let pages = [];
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i)
        }
        return (
            <>
                <div>
                    {pages.map(p => {
                        return <span className={this.props.currentPage === p ? s.selectedPage : ''}
                                     onClick={() => this.onPageChanged(p)}>{p}</span>
                    })}
                </div>
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