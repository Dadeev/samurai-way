import {ActionsTypes} from "./redux-store";
import {Dispatch} from "redux";
import {commonAPI} from "../../api/api";

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

export const setAuthDataOfUser = () => {
    return (dispatch: Dispatch) => {
        commonAPI.getAuth()
            .then(data => {
                if (data.resultCode === 0) {
                    let {id, login, email} = data.data
                    dispatch(setAuthUserData(id, login, email))
                }
            })
    }
}