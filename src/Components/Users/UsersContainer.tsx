import React from 'react'
import {connect} from "react-redux";
import {RootStateType} from "../redux/redux-store";
import {
    follow,
    getUsersWithoutTotalUsersCount, requestUsers,
    setCurrentPage,
    unFollow,
    UserType
} from "../redux/users-reducer";
import {Users} from "./Users";
import {Preloader} from "../common/Preloader/Preloader";
import {compose} from "redux";
import {
    getCurrentPage,
    getFollowingProgress,
    getIsFetching,
    getPageSize,
    getTotalUsersCount, getUsers
} from "../redux/users-selectors";

type UserAPIPropsType = {
    users: UserType[]
    pageSize: number
    totalUsersCount: number
    currentPage: number
    setCurrentPage: (currentPage: number) => void
    isFetching: boolean
    followingProgress: number[]
    requestUsers: (page: number, pageSize: number) => void
    getUsersWithoutTotalUsersCount: (pageNumber: number, pageSize: number) => void
    follow: (userId: number) => void
    unFollow: (userId: number) => void
}

class UsersAPI extends React.Component<UserAPIPropsType> {
    componentDidMount() {
        this.props.requestUsers(this.props.currentPage, this.props.pageSize)
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
    users: getUsers(state),
    pageSize: getPageSize(state),
    totalUsersCount: getTotalUsersCount(state),
    currentPage: getCurrentPage(state),
    isFetching: getIsFetching(state),
    followingProgress: getFollowingProgress(state)
})


export const UsersContainer = compose<React.ComponentType>(
    connect(mapStateToProps, {
        setCurrentPage, requestUsers, getUsersWithoutTotalUsersCount, follow, unFollow
    })
)(UsersAPI)
