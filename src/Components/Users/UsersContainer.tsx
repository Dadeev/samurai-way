import React from 'react'
import {connect} from "react-redux";
import {Users} from "./Users";
import {RootStateType} from "../redux/redux-store";
import {Dispatch} from "redux";
import {followAC, setUsersAC, unfollowAC, UserType} from "../redux/users-reducer";

type mapStateToPropsType = {
    users: UserType[]
}
type mapDispatchToPropsType = {
    follow: (userID: number) => void
    unfollow: (userID: number) => void
    setUsers: (users: UserType[]) => void
}

const mapStateToProps = (state: RootStateType): mapStateToPropsType => ({users: state.usersPage.users})
const mapDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsType => ({
    follow: (userID: number) => {
        dispatch(followAC(userID))
    },
    unfollow: (userID: number) => {
        dispatch(unfollowAC(userID))
    },
    setUsers: (users: UserType[]) => {
        dispatch(setUsersAC(users))
    }
})

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)