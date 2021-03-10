import {ActionTypes} from './types';
import {usersAPI} from '../API/api';
import {ThunkAction, ThunkDispatch} from 'redux-thunk';
import {AppStateType} from './redux-store';
//types
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
//actions
const FOLLOW = 'usersReducer/FOLLOW'
const UNFOLLOW = 'usersReducer/UNFOLLOW'
const SET_USERS = 'usersReducer/SET-USERS'
const SET_CURRENT_PAGE = 'usersReducer/SET-CURRENT-PAGE'
const SET_USERS_TOTAL_COUNT = 'usersReducer/SET-USERS-TOTAL-COUNT'
const SET_FETCHING = 'usersReducer/SET-FETCHING'
const SET_DISABLED_FOLLOWING_BTN = 'usersReducer/SET_DISABLED_FOLLOWING_BTN'


let initialState: UsersPageType = {
    usersData: [],
    pageSize: 20,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true,
    followingInProgress: []
}
//редьюсеры принимают инициилизонный стэйт и определенный экшион,
// по названию экшиона определяютя действия, для изменения стэйта
// и возвращается измененный стэйт

const usersReducer = (state = initialState, action: ActionTypes): UsersPageType => {
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
export const followSuccess = (userID: number) => ({type: FOLLOW, userID}) as const
export const unfollowSuccess = (userID: number) => ({type: UNFOLLOW, userID}) as const
export const setUsers = (usersData: Array<UsersDataType>) => ({type: SET_USERS, usersData}) as const
export const setCurrentPage = (currentPage: number) => ({type: SET_CURRENT_PAGE, currentPage}) as const
export const setUsersTotalCount = (totalCount: number) => ({type: SET_USERS_TOTAL_COUNT, totalCount}) as const
export const setIsFetching = (isFetching: boolean) => ({type: SET_FETCHING, isFetching}) as const
export const setDisabledFollowingBTN = (isFetching: boolean, userID: number) => ({
    type: SET_DISABLED_FOLLOWING_BTN,
    isFetching,
    userID
}) as const


//типизация для санок, если это обычная санка то dispatch:Dispatch<ActionTypes> импортируем из redux
type ThunkActionType = ThunkAction<void, AppStateType, unknown, ActionTypes>;
type ThunkDispatchType = ThunkDispatch<AppStateType, unknown, ActionTypes>;

export const getUsers = (page: number, pageSize: number): ThunkActionType => {
    return async (dispatch: ThunkDispatchType) => {
        dispatch(setIsFetching(true))
        dispatch(setCurrentPage(page))
        let data = await usersAPI.getUsers(page, pageSize)
        dispatch(setIsFetching(false))
        dispatch(setUsers(data.items))
        dispatch(setUsersTotalCount(data.totalCount))
    }
}


// why we not use one actionCreator?????????
//refactoring
const followUnfollowFlow = async (dispatch: ThunkDispatchType, userId: number, apiMethod: Function, actionCreator: Function) => {
    dispatch(setDisabledFollowingBTN(true, userId))
    let data = await apiMethod(userId)
    if (data.resultCode === 0) {
        dispatch(actionCreator(userId))
    }
    dispatch(setDisabledFollowingBTN(false, userId))
}

export const follow = (userId: number): ThunkActionType => {
    return async (dispatch: ThunkDispatchType) => {
        followUnfollowFlow(dispatch, userId, usersAPI.postFollow.bind(usersAPI), followSuccess)
    }
}

export const unfollow = (userId: number): ThunkActionType => {
    return async (dispatch: ThunkDispatchType) => {
        followUnfollowFlow(dispatch, userId, usersAPI.deleteUnfollow.bind(usersAPI), unfollowSuccess)
    }
}


export default usersReducer