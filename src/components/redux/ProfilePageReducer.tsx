import {
    ActionTypes,
    AddPostsActionType, GetStatusType,
    PostDataType,
    ProfilePageType, SetStatusType,
    SetUserProfileActionType,
    UserProfileType
} from './types';
import {Dispatch} from 'redux';
import {profileAPI, usersAPI} from '../../API/api';
import {v1} from 'uuid';


const ADD_POST = 'ADD-POST';
const SET_USERS_PROFILE = 'SET-USERS-PROFILE';
const SET_STATUS = 'SET-STATUS';
const GET_STATUS = 'GET-STATUS';

let initialState: ProfilePageType = {
    postData: [
        {id: v1(), message: 'Hello', count: 100},
        {id: v1(), message: 'How are you', count: 99},
        {id: v1(), message: 'I am fine', count: 98},
    ],
    newPostText: 'it-kamasutra.com',
    profile: null,
    status: ""
}


const profileReducer = (state = initialState, action: ActionTypes): ProfilePageType => {
    switch (action.type) {
        case ADD_POST: {
            let newPost: PostDataType = {
                id: v1(),
                message: action.newPostBody,
                count: 0
            }
            return {
                ...state,
                postData: [...state.postData, newPost],
            }
        }
        case SET_STATUS: {
            return {
                ...state,
               status: action.status,
            }
        }
        case GET_STATUS: {
            return {
                ...state,
                status: action.status,
            }
        }
        case SET_USERS_PROFILE: {
            return {
                ...state,
                profile: action.profile,
            }
        }
        default:
            return state
    }
}

export const addPostCreator = (newPostBody:string): AddPostsActionType => ({type: ADD_POST,newPostBody})

export const setUserProfile = (profile: UserProfileType): SetUserProfileActionType => ({
    type: 'SET-USERS-PROFILE',
    profile
})
export const getUserStatus = (status:string): GetStatusType => ({type: GET_STATUS, status})
export const setStatus = (status:string): SetStatusType => ({type: SET_STATUS, status})


export const getStatus = (userId: number) => (dispatch: Dispatch) => {
    profileAPI.getStatus(userId)
        .then(response=> {
            dispatch( getUserStatus(response.data))
        })
}
export const updateStatus = (status:string) => (dispatch: Dispatch) => {
    profileAPI.updateStatus(status)
        .then(response=> {
            if(response.data.resultCode===0){
                dispatch( setStatus(status))
            }
        })
}

export const getUserProfile = (userId: number) => (dispatch: Dispatch) => {
    usersAPI.getProfile(userId)
        .then(data => {
            dispatch(setUserProfile(data))
        })
}


export default profileReducer