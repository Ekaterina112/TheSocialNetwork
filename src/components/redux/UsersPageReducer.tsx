import {
    ActionTypes,
    FollowActionType, RootStateType,
    SetCurrentPageActionType,
    SetDisabledFollowingBTNActionType,
    SetFetchingActionType,
    SetUsersActionType,
    SetUsersTotalCountType,
    UnFollowActionType
} from './types';
import { usersAPI} from '../../API/api';
import {ThunkAction, ThunkDispatch} from 'redux-thunk';

export type PhotosType = {
    'small': string | null,
    'large': string | null,
}
export type UsersDataType = {
    id: number
    name: string
    status: string
    photos: PhotosType
    followed: boolean
}
export type UsersPageType = {
    usersData: Array<UsersDataType>
    pageSize: number,
    totalUsersCount: number,
    currentPage: number
    isFetching: boolean,
    followingInProgress: Array<number>
}

const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET-USERS'
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE'
const SET_USERS_TOTAL_COUNT = 'SET-USERS-TOTAL-COUNT'
const SET_FETCHING = 'SET-FETCHING'
const SET_DISABLED_FOLLOWING_BTN = 'SET_DISABLED_FOLLOWING_BTN'
let initialState: UsersPageType = {
    usersData: [],
    pageSize: 99,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true,
    followingInProgress: []
}
//редьюсеры принимают инициилизонный стэйт и определенный экшион,
// по названию экшиона определяютя действия, для изменения стэйта
// и возвращается измененный стэйт

const usersReducer = (state = initialState, action: ActionTypes) => {
    switch (action.type) {
        case FOLLOW: {
            return {
                ...state,
                usersData: state.usersData.map(u => {
                    if (u.id === action.userID) {
                        return {...u, followed: true}
                    }
                    return u
                })
            }
        }
        case UNFOLLOW: {
            return {
                ...state,
                usersData: state.usersData.map(u => {
                    if (u.id === action.userID) {
                        return {...u, followed: false}
                    }
                    return u
                })
            }
        }
        case SET_USERS: {
            return {
                ...state,
                usersData: action.usersData
            }
        }
        case SET_CURRENT_PAGE: {
            return {
                ...state,
                currentPage: action.currentPage
            }
        }
        case SET_USERS_TOTAL_COUNT: {
            return {
                ...state,
                totalUsersCount: action.totalCount
            }
        }
        case SET_FETCHING: {
            return {
                ...state,
                isFetching: action.isFetching
            }
        }
        case SET_DISABLED_FOLLOWING_BTN: {
            return {
                ...state,
                followingInProgress: action.isFetching ?
                    [...state.followingInProgress, action.userID]
                    : state.followingInProgress.filter(id => id !== action.userID)
            }
        }
        default:
            return state
    }
}

//стреляет экшионы, это экшион креэйторы
export const followSuccess = (userID: number): FollowActionType => ({type: FOLLOW, userID})
export const unfollowSuccess = (userID: number): UnFollowActionType => ({type: UNFOLLOW, userID})
export const setUsers = (usersData: Array<UsersDataType>): SetUsersActionType => ({type: SET_USERS, usersData})
export const setCurrentPage = (currentPage: number): SetCurrentPageActionType => ({type: SET_CURRENT_PAGE, currentPage})
export const setUsersTotalCount = (totalCount: number): SetUsersTotalCountType => ({
    type: SET_USERS_TOTAL_COUNT,
    totalCount
})
export const setIsFetching = (isFetching: boolean): SetFetchingActionType => ({type: SET_FETCHING, isFetching})
export const setDisabledFollowingBTN = (isFetching: boolean, userID: number): SetDisabledFollowingBTNActionType => ({
    type: SET_DISABLED_FOLLOWING_BTN,
    isFetching,
    userID
})
//типизация для санок, если это обычная санака то dispatch:Dispatch<ActionTypes> импортируем из redux

type ThunkActionType = ThunkAction<void, RootStateType, unknown, ActionTypes>;
type ThunkDispatchType = ThunkDispatch<RootStateType, unknown, ActionTypes>;
export const getUsers = (currentPage:number,pageSize:number):ThunkActionType => {

    return (dispatch:ThunkDispatchType) => {
        dispatch(setIsFetching(true))
        usersAPI.getUsers(currentPage, pageSize)
            .then(data => {
                dispatch(setIsFetching(false))
                dispatch(setUsers(data.items))
                dispatch(setUsersTotalCount(data.totalCount))
            })
    }
}
export const follow = (userId:number):ThunkActionType => {

    return (dispatch: ThunkDispatchType) => {
        dispatch(setDisabledFollowingBTN(true, userId))
        usersAPI.postFollow(userId)
            .then(data => {
                if (data.resultCode == 0) {
                    dispatch(followSuccess(userId))
                }
                dispatch(setDisabledFollowingBTN(false, userId))
            })
    }
}
export const unfollow = (userId:number):ThunkActionType => {

    return (dispatch: ThunkDispatchType) => {
        dispatch(setDisabledFollowingBTN(true, userId))
        usersAPI.deleteUnfollow(userId)
            .then(data => {
                if (data.resultCode == 0) {
                   dispatch( unfollowSuccess(userId))
                }
                dispatch(setDisabledFollowingBTN(false, userId))
            })
    }
}

export default usersReducer