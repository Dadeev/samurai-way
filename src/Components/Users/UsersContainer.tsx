import React from 'react'
import {connect} from "react-redux";
import {RootStateType} from "../redux/redux-store";
import {
    setCurrentPage,
    UserType, getUsers, getUsersWithoutTotalUsersCount, follow, unFollow
} from "../redux/users-reducer";
import {Users} from "./Users";
import {Preloader} from "../common/Preloader/Preloader";

type UserAPIPropsType = {
    users: UserType[]
    pageSize: number
    totalUsersCount: number
    currentPage: number
    setCurrentPage: (currentPage: number) => void
    isFetching: boolean
    followingProgress: number[]
    getUsers: (currentPage: number, pageSize: number) => void
    getUsersWithoutTotalUsersCount: (pageNumber: number, pageSize: number) => void
    follow: (userId: number) => void
    unFollow: (userId: number) => void
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
        this.props.getUsers(this.props.currentPage, this.props.pageSize)
    }

    onPageChanged = (pageNumber: number) => {
        this.props.getUsersWithoutTotalUsersCount(pageNumber, this.props.pageSize)
    }

    render() {
        return <>
            {this.props.isFetching ? <Preloader/> : null}
            <Users users={this.props.users}
                   totalUsersCount={this.props.totalUsersCount}
                   onPageChanged={this.onPageChanged}
                   currentPage={this.props.currentPage}
                   pageSize={this.props.pageSize}
                   followingProgress={this.props.followingProgress}
                   isFetching={this.props.isFetching}
                   follow={this.props.follow}
                   unFollow={this.props.unFollow}
            />
        </>
    }
}

type mapStateToPropsType = {
    users: UserType[]
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    followingProgress: number[]
}
const mapStateToProps = (state: RootStateType): mapStateToPropsType => ({
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching,
    followingProgress: state.usersPage.followingProgress
})

export const UsersContainer = connect(mapStateToProps, {
    setCurrentPage, getUsers, getUsersWithoutTotalUsersCount, follow, unFollow
})(UsersAPI)