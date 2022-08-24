import React from 'react'
import {connect} from "react-redux";
import {RootStateType} from "../redux/redux-store";
import {Dispatch} from "redux";
import {
    followAC,
    setCurrentPageAC,
    setUsersAC,
    setUsersTotalCountAC,
    unfollowAC,
    UserType
} from "../redux/users-reducer";
import axios from "axios";
import {Users} from "./Users";

type mapStateToPropsType = {
    users: UserType[]
    pageSize: number
    totalUsersCount: number
    currentPage: number
}
type mapDispatchToPropsType = {
    follow: (userID: number) => void
    unfollow: (userID: number) => void
    setUsers: (users: UserType[]) => void
    setCurrentPage: (currentPage: number) => void
    setTotalUsersCount: (totalCount: number) => void
}

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
}
export class UsersAPI extends React.Component<UserAPIPropsType> {
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
        return <Users users={this.props.users} totalUsersCount={this.props.totalUsersCount}
                      onPageChanged={this.onPageChanged} currentPage={this.props.currentPage}
                      pageSize={this.props.pageSize}
                      follow={this.props.follow} unfollow={this.props.unfollow}/>
    }
}

const mapStateToProps = (state: RootStateType): mapStateToPropsType => ({
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage
})
const mapDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsType => ({
    follow: (userID: number) => {
        dispatch(followAC(userID))
    },
    unfollow: (userID: number) => {
        dispatch(unfollowAC(userID))
    },
    setUsers: (users: UserType[]) => {
        dispatch(setUsersAC(users))
    },
    setCurrentPage: (currentPage: number) => {
        dispatch(setCurrentPageAC(currentPage))
    },
    setTotalUsersCount: (totalCount: number) => {
        dispatch(setUsersTotalCountAC(totalCount))
    }
})

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersAPI)