import {
    ActionTypes,
    FollowActionType,
    SetCurrentPageActionType,
    SetUsersActionType,
    SetUsersTotalCountType,
    UnFollowActionType
} from './types';

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
}
const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET-USERS'
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE'
const SET_USERS_TOTAL_COUNT = 'SET-USERS-TOTAL-COUNT'

let initialState: UsersPageType = {
    usersData: [],
    pageSize: 99,
    totalUsersCount: 0,
    currentPage: 1
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
        default:
            return state
    }
}

//стреляет экшионы, это экшион креэйторы
export const followAC = (userID: number): FollowActionType => ({type: FOLLOW, userID})
export const unfollowAC = (userID: number): UnFollowActionType => ({type: UNFOLLOW, userID})
export const setUsersAC = (usersData: any): SetUsersActionType => ({type: SET_USERS, usersData})
export const setCurrentPageAC = (currentPage: number): SetCurrentPageActionType => ({type: SET_CURRENT_PAGE, currentPage})
export const setUsersTotalCountAC = (totalCount: number): SetUsersTotalCountType => ({type: SET_USERS_TOTAL_COUNT, totalCount})
export default usersReducer