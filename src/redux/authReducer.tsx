import {ActionTypes} from './types';
import {authAPI} from '../API/api';
import {Dispatch} from 'redux';
import {stopSubmit} from 'redux-form';


const SET_USER_DATA = 'authReducer/SET_USER_DATA'

export type UsersAuthDataType = {
    email: null | string,
    id: null | number,
    login: null | string,
    isAuth: boolean
}

let initialState: UsersAuthDataType = {
    email: null,
    id: null,
    login: null,
    isAuth: false
}


const authReducer = (state = initialState, action: ActionTypes): UsersAuthDataType => {
    switch (action.type) {
        case SET_USER_DATA: {
            return {
                ...state,
                ...action.payload,
            }
        }
        default:
            return state
    }
}
//actionCreator
export const setAuthUsersData = (payload: UsersAuthDataType) => ({type: SET_USER_DATA, payload}) as const


//thunkCreator
export const getAuthUserData = () => async (dispatch: Dispatch<ActionTypes>) => {
    let response = await authAPI.getAuth()
    if (response.data.resultCode === 0) {
        let {email, id, login} = response.data.data
        dispatch(setAuthUsersData({email, id, login, isAuth: true}))
    }
}
//thunkCreator
export const login = (email: string, password: string, rememberMe: boolean) => async (dispatch: Dispatch<any>) => {
    let response = await authAPI.login(email, password, rememberMe)
    if (response.data.resultCode === 0) {
        dispatch(getAuthUserData())
    } else {
        let message = response.data.messages.length > 0 ? response.data.messages[0] : 'Some error'
        dispatch(stopSubmit('login', {_error: message}))
    }
}
//thunkCreator
export const logout = () => async (dispatch: Dispatch<ActionTypes>) => {
    let response = await authAPI.logout()
    if (response.data.resultCode === 0) {
        dispatch(setAuthUsersData({email: null, id: null, login: null, isAuth: false}))
    }
}

export default authReducer