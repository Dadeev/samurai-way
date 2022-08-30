import {ActionsTypes} from "./redux-store";

const SET_USER_DATA = "SET-USER-DATA";


type initialStateType = {
    id: number
    login: string
    email: string
    isAuth: boolean
}

const initialState: initialStateType = {
    id: 0,
    login: 'Login...',
    email: 'somEmail@gmail.com',
    isAuth: false
}

export const authReducer = (state: initialStateType = initialState, action: ActionsTypes): initialStateType => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.data,
                isAuth: true
            }
        default:
            return state;
    }
}

export const setAuthUserData = (
    id: number,
    login: string,
    email: string
) => ({type: SET_USER_DATA, data: {id, login, email}} as const)