import {RootStateType} from "./redux-store";
import {createSelector} from "reselect";
import {UserType} from "./users-reducer";

const getUsersSelector = (state: RootStateType) => {
    return state.usersPage.users
}
export const getUsers = createSelector(getUsersSelector, (users: UserType[]) => {
    return users.filter((u: UserType) => true)
})

export const getPageSize = (state: RootStateType) => {
    return state.usersPage.pageSize
}
export const getTotalUsersCount = (state: RootStateType) => {
    return state.usersPage.totalUsersCount
}
export const getCurrentPage = (state: RootStateType) => {
    return state.usersPage.currentPage
}
export const getIsFetching = (state: RootStateType) => {
    return state.usersPage.isFetching
}
export const getFollowingProgress = (state: RootStateType) => {
    return state.usersPage.followingProgress
}