import {ActionsTypes} from "./redux-store";
import {Dispatch} from "redux";
import {authAPI, usersAPI} from "../../api/api";

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
            }
        default:
            return state;
    }
}

export const setAuthUserData = (
    id: number,
    login: string,
    email: string,
    isAuth: boolean
) => ({type: SET_USER_DATA, data: {id, login, email, isAuth}} as const)

export const getAuthUserData = () => {
    return (dispatch: Dispatch) => {
        authAPI.getAuth()
            .then(data => {
                if (data.resultCode === 0) {
                    let {id, login, email} = data.data
                    dispatch(setAuthUserData(id, login, email, true))
                }
            })
    }
}

export const login = (email: string, password: string, rememberMe: boolean) => {
    return (dispatch: Dispatch) => {
        authAPI.login(email, password, rememberMe)
            .then((data) => {
                if (data.resultCode === 0) {
                    // @ts-ignore
                    dispatch(getAuthUserData())
                }
            })

    }
}

export const logout = () => {
    return (dispatch: Dispatch) => {
        authAPI.logout()
            .then((data) => {
                if (data.resultCode === 0) {
                    dispatch(setAuthUserData(0, 'Please login', 'null', false))
                }
            })

    }
}