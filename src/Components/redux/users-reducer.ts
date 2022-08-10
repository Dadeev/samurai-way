import {ActionsTypes} from "./redux-store";

const FOLLOW = "FOLLOW";
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS'

export type LocationType = {
    city: string,
    country: string
}
export type UserType = {
    id: number,
    photoUrl: string
    followed: boolean,
    fullName: string,
    status: string,
    location: LocationType
}
export type ProfileUsersType = {
    users: UserType[]
}

const initialState: ProfileUsersType = {
    users: []
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
            return {...state, users: [...state.users, ...action.users]}
        default:
            return state;
    }
}

export const followAC = (userID: number) => ({type: FOLLOW, userID} as const)
export const unfollowAC = (userID: number) => ({type: UNFOLLOW, userID} as const)
export const setUsersAC = (users: UserType[]) => ({type: SET_USERS, users} as const)
