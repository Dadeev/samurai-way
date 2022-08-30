import React from 'react'
import {connect} from "react-redux";
import {RootStateType} from "../redux/redux-store";
import {Dispatch} from "redux";
import {
    follow,
    setCurrentPage, setToggleFetching,
    setUsers,
    setTotalUsersCount,
    unfollow,
    UserType
} from "../redux/users-reducer";
import axios from "axios";
import {Users} from "./Users";
import {Preloader} from "../common/Preloader/Preloader";

type UserAPIPropsType = {
    users: UserType[]
    pageSize: number
    totalUsersCount: number
    currentPage: number
    follow: (userID: number) => void
    unfollow: (userID: number) => void
    setUsers: (users: UserType[]) => void
    setCurrentPage: (currentPage: number) => void
    setTotalUsersCount: (totalCount: number) => void
    isFetching: boolean
    setToggleFetching: (isFetching: boolean) => void
}
class UsersAPI extends React.Component<UserAPIPropsType> {
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
        this.props.setToggleFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setToggleFetching(false)
                this.props.setUsers(response.data.items)
                this.props.setTotalUsersCount(response.data.totalCount)
            })
    }

    onPageChanged = (pageNumber: number) => {
        this.props.setToggleFetching(true)
        this.props.setCurrentPage(pageNumber)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setToggleFetching(false)
                this.props.setUsers(response.data.items)
            })
    }

    render() {
        return <>
            {this.props.isFetching ? <Preloader/> : null}
            <Users users={this.props.users} totalUsersCount={this.props.totalUsersCount}
                   onPageChanged={this.onPageChanged} currentPage={this.props.currentPage}
                   pageSize={this.props.pageSize}
                   follow={this.props.follow} unfollow={this.props.unfollow}/>
        </>
    }
}

type mapStateToPropsType = {
    users: UserType[]
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
}
const mapStateToProps = (state: RootStateType): mapStateToPropsType => ({
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching
})

export const UsersContainer = connect(mapStateToProps, {
    follow, unfollow, setUsers,
    setCurrentPage, setTotalUsersCount, setToggleFetching
})(UsersAPI)