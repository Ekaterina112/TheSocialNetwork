import {ActionTypes, FollowActionType, SetUsersActionType, UnFollowActionType} from './types';
export type PhotosType = {
    "small": string | null,
    "large": string | null,
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
}
const FOLLOW='FOLLOW'
const UNFOLLOW='UNFOLLOW'
const SET_USERS='SET-USERS'

let initialState:UsersPageType= {
    usersData: []
}
//редьюсеры принимают инициилизонный стэйт и определенный экшион,
// по названию экшиона определяютя действия, для изменения стэйта
// и возвращается измененный стэйт

const usersReducer=(state=initialState, action:ActionTypes) => {
    switch (action.type) {
        case FOLLOW: {
            return {
                ...state,
                usersData: state.usersData.map(u =>{
                    if(u.id === action.userID) {
                        return {...u, followed:true}
                    }
                    return u
                })
            }
        }
        case UNFOLLOW: {
            return {
                ...state,
                usersData: state.usersData.map(u =>{
                    if(u.id === action.userID) {
                        return {...u, followed:false}
                    }
                    return u
                })
            }
        }
        case SET_USERS: {
            return {
                ...state,
               usersData: [...state.usersData, ...action.usersData]
            }
        }
        default:
            return state
    }
}

//стреляет экшионы, это экшион креэйторы
export const followAC = (userID:number):FollowActionType =>({type:FOLLOW, userID})
export const unfollowAC = (userID:number):UnFollowActionType => ({type:UNFOLLOW, userID})
export const setUsersAC = (usersData:any):SetUsersActionType => ({type:SET_USERS, usersData})

export default usersReducer