import {
    ActionTypes,
    AddPostsActionType, GetStatusType,
    PostDataType,
    ProfilePageType, SetStatusType,
    SetUserProfileActionType,
    UpDateNewPostTextActionType,
    UserProfileType
} from './types';
import {Dispatch} from 'redux';
import {profileAPI, usersAPI} from '../../API/api';


const ADD_POST = 'ADD-POST'; //is it need ???
const UP_DATE_NEW_POST_TEXT = 'UP-DATE-NEW-POST-TEXT';
const SET_USERS_PROFILE = 'SET-USERS-PROFILE';
const SET_STATUS = 'SET-STATUS';
const GET_STATUS = 'SET-STATUS';

let initialState: ProfilePageType = {
    postData: [
        {id: 1, message: 'Hello', count: 100},
        {id: 2, message: 'How are you', count: 99},
        {id: 3, message: 'I am fine', count: 98},
    ],
    newPostText: 'it-kamasutra.com',
    profile: null,
    status: ""
}


const profileReducer = (state = initialState, action: ActionTypes): ProfilePageType => {
    switch (action.type) {
        case 'ADD-POSTS': {
            let newPost: PostDataType = {
                id: 4,
                message: state.newPostText,
                count: 0
            }
            return {
                ...state,
                postData: [...state.postData, newPost],
                newPostText: ''
            }
        }
        case 'UP-DATE-NEW-POST-TEXT': {
            return {
                ...state,
                newPostText: action.newText,
            }
        }
        case 'SET-STATUS': {
            return {
                ...state,
               status: action.status,
            }
        }
        case 'GET-STATUS': {
            return {
                ...state,
                status: action.status,
            }
        }
        case 'SET-USERS-PROFILE': {
            return {
                ...state,
                profile: action.profile,
            }
        }
        default:
            return state
    }
}

export const addPostCreator = (): AddPostsActionType => ({type: 'ADD-POSTS'})
export const upDateNewPostTextCreator = (text: string): UpDateNewPostTextActionType => ({
    type: 'UP-DATE-NEW-POST-TEXT',
    newText: text
})
export const setUserProfile = (profile: UserProfileType): SetUserProfileActionType => ({
    type: 'SET-USERS-PROFILE',
    profile
})
export const getUserStatus = (status:string): GetStatusType => ({type: 'GET-STATUS', status})
export const setStatus = (status:string): SetStatusType => ({type: 'SET-STATUS', status})


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