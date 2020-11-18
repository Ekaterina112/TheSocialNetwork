import {ActionTypes, SetAuthActionType} from './types';
import {authAPI} from '../../API/api';
import {Dispatch} from 'redux';


const SET_USER_DATA = 'SET_USER_DATA'

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
                ...action.data,
                isAuth: true
            }
        }
        default:
            return state
    }
}

export const setAuthUsersData = (data: UsersAuthDataType): SetAuthActionType => ({type: SET_USER_DATA, data})

export const getAuthUserData = () => (dispatch: Dispatch) => {
    authAPI.getAuth()
        .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(setAuthUsersData(response.data.data))
            }
        })
}


export default authReducer