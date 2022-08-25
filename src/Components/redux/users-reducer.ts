import {ActionsTypes} from "./redux-store";

const FOLLOW = "FOLLOW";
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS'
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE'
const SET_TOTAL_COUNT = 'SET-TOTAL-COUNT'
const TOGGLE_IS_FETCHING = 'TOGGLE-IS-FETCHING'


export type LocationType = {
    city: string,
    country: string
}
export type UserType = {
    id: number,
    photoUrl: string
    followed: boolean,
    name: string,
    status: string,
    location: LocationType
}
export type ProfileUsersType = {
    users: UserType[]
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
}

const initialState: ProfileUsersType = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true
}

export const usersReducer = (state: ProfileUsersType = initialState, action: ActionsTypes): ProfileUsersType => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state
                , users: state.users.map(u => u.id === action.userID ? {...u, followed: true} : u)
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => u.id === action.userID ? {...u, followed: false} : u)
            }
        case SET_USERS :
            return {...state, users: action.users}
        case SET_CURRENT_PAGE:
            return {...state, currentPage: action.currentPage}
        case SET_TOTAL_COUNT:
            return {...state, totalUsersCount: action.totalCount}
        case TOGGLE_IS_FETCHING:
            return {...state, isFetching: action.isFetching}
        default:
            return state;
    }
}

export const follow = (userID: number) => ({type: FOLLOW, userID} as const)
export const unfollow = (userID: number) => ({type: UNFOLLOW, userID} as const)
export const setUsers = (users: UserType[]) => ({type: SET_USERS, users} as const)
export const setCurrentPage = (currentPage: number) => ({type: SET_CURRENT_PAGE, currentPage} as const)
export const setTotalUsersCount = (totalCount: number) => ({type: SET_TOTAL_COUNT, totalCount} as const)
export const setToggleFetching = (isFetching: boolean) => ({type: TOGGLE_IS_FETCHING, isFetching} as const)
