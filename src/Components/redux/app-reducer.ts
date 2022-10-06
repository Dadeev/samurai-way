import {ActionsTypes} from "./redux-store";
import {usersAPI} from "../../api/api";
import {AnyAction, Dispatch} from "redux";
import {getAuthUserData} from "./auth-reducer";

const SET_INITIALIZED = "APP/INITIALISED_SUCCESS";

type InitialAppReducerType = {
    initialized: boolean
}

const initialState: InitialAppReducerType = {
    initialized: false
}

export const appReducer = (state: InitialAppReducerType = initialState, action: ActionsTypes): InitialAppReducerType => {
    switch (action.type) {
        case SET_INITIALIZED:
            return {...state, initialized: true}
        default:
            return state;
    }
}

export const initializeSuccess = () => ({type: SET_INITIALIZED} as const)

export const initializeApp = () => (dispatch: Dispatch) => {
    // @ts-ignore
    let promise = dispatch(getAuthUserData())
    Promise.all([promise]).then(() => {
        dispatch(initializeSuccess())
    })
}

