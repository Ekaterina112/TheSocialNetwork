import {ActionTypes} from './types';
import {authAPI, ResultCodeForCaptcha, ResultCodesEnum, securityAPI} from '../API/api';
import {Dispatch} from 'redux';
import {stopSubmit} from 'redux-form';
import {ThunkAction, ThunkDispatch} from 'redux-thunk';
import {AppStateType} from './redux-store';


//types
export type UsersAuthDataType = typeof initialState;

//actions
const SET_USER_DATA = 'authReducer/SET_USER_DATA'
const GET_CAPTCHA_URL_SUCCESS = 'authReducer/GET_CAPTCHA_URL_SUCCESS'

let initialState = {
    id: null as number | null,
    email: null as string | null,
    login: null as string | null,
    isAuth: false,
    captchaUrl: null as string | null,
}


const authReducer = (state: UsersAuthDataType = initialState, action: ActionTypes): UsersAuthDataType => {
    switch (action.type) {
        case GET_CAPTCHA_URL_SUCCESS:
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
export const getCaptchaUrlSuccess = (captchaUrl: string) => ({
    type: GET_CAPTCHA_URL_SUCCESS, payload: {captchaUrl}
}) as const


//thunkCreator
export const getAuthUserData = () => async (dispatch: Dispatch<ActionTypes>) => {
    let response = await authAPI.getAuth()
    if (response.resultCode === ResultCodesEnum.Success) {
        let {id, email, login} = response.data
        dispatch(setAuthUsersData({id, email, login, isAuth: true, captchaUrl: null}))
    }
}

//TYPES FOR THUNK
type ThunkActionType = ThunkAction<void, AppStateType, unknown, ActionTypes>;
type ThunkDispatchType = ThunkDispatch<AppStateType, unknown, ActionTypes>;
//thunkCreator
export const login = (email: string, password: string, rememberMe: boolean, captcha: string | null = null): ThunkActionType => {
    return async (dispatch: ThunkDispatchType) => {
        let data = await authAPI.login(email, password, rememberMe, captcha)
        if (data.resultCode === ResultCodesEnum.Success) {
            dispatch(getAuthUserData())
        } else {
            if (data.resultCode === ResultCodeForCaptcha.CaptchaIsRequired) {
                dispatch(getCaptcha())
            }
            let message = data.messages.length > 0 ? data.messages[0] : 'Some error'
            dispatch(stopSubmit('login', {_error: message}))
        }
    }
}
export const logout = () => async (dispatch: Dispatch<ActionTypes>) => {
    let data = await authAPI.logout()
    if (data.resultCode === ResultCodesEnum.Success) {
        dispatch(setAuthUsersData({email: null, id: null, login: null, isAuth: false, captchaUrl: null}))
    }
}
export const getCaptcha = () => async (dispatch: Dispatch<ActionTypes>) => {
    try {
        let response = await securityAPI.getCaptcha()
        const captchaUrl = response.data.url
        dispatch(getCaptchaUrlSuccess(captchaUrl))
    } catch {
        //here need to add modal for errors
    }
}

export default authReducer