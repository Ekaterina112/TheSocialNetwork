import {ActionTypes, PostDataType, ProfilePageType, UserProfileType} from './types';
import {Dispatch} from 'redux';
import {profileAPI, usersAPI} from '../API/api';
import {v1} from 'uuid';


const ADD_POST = 'profileReducer/ADD-POST';
const SET_USERS_PROFILE = 'profileReducer/SET-USERS-PROFILE';
const SET_STATUS = 'profileReducer/SET-STATUS';
const SET_PHOTO = 'profileReducer/SET-PHOTO';
const GET_STATUS = 'profileReducer/GET-STATUS';
const DELETE_POST = 'profileReducer/DELETE_POST';

let initialState: ProfilePageType = {
    postData: [
        {id: v1(), message: 'Hello', count: 100},
        {id: v1(), message: 'How are you', count: 99},
        {id: v1(), message: 'I am fine', count: 98},
    ],
    newPostText: 'it-kamasutra.com',
    profile: null as UserProfileType | null,
    status: ''
}


export const profileReducer = (state = initialState, action: ActionTypes): ProfilePageType => {
    switch (action.type) {
        case ADD_POST:
            let newPost: PostDataType = {
                id: v1(),
                message: action.newPostBody,
                count: 0
            }
            return {
                ...state,
                postData: [...state.postData, newPost],
            }
        case DELETE_POST:
            return {
                ...state,
                postData: state.postData.filter(el => el.id !== action.postId),
            }
        case SET_STATUS:
            return {
                ...state,
                status: action.status,
            }
        case SET_PHOTO:
            return {
                ...state,
                profile: {...state.profile, photos: action.photos} as UserProfileType
            }
        case GET_STATUS:
            return {
                ...state,
                status: action.status,
            }
        case SET_USERS_PROFILE:
            return {
                ...state,
                profile: action.profile,
            }
        default:
            return state
    }
}

export const addPostCreator = (newPostBody: string) => ({type: ADD_POST, newPostBody}) as const
export const deletePostCreator = (postId: string) => ({type: DELETE_POST, postId}) as const
export const setUserProfile = (profile: UserProfileType) => ({type: SET_USERS_PROFILE, profile}) as const
export const getUserStatus = (status: string) => ({type: GET_STATUS, status}) as const
export const setStatus = (status: string) => ({type: SET_STATUS, status}) as const
export const setPhoto = (photos: { small: string, large: string }) => ({type: SET_PHOTO, photos}) as const

export const getStatus = (userId: number) => async (dispatch: Dispatch<ActionTypes>) => {
    let response = await profileAPI.getStatus(userId)
    dispatch(getUserStatus(response.data))
}
export const updateStatus = (status: string) => async (dispatch: Dispatch<ActionTypes>) => {
    let response = await profileAPI.updateStatus(status)
    if (response.data.resultCode === 0) {
        dispatch(setStatus(status))
    }
}

export const getUserProfile = (userId: number) => async (dispatch: Dispatch<ActionTypes>) => {
    let data = await usersAPI.getProfile(userId)
    dispatch(setUserProfile(data))
}
export const savePhoto = (file: string) => async (dispatch: Dispatch<ActionTypes>) => {
    let response = await profileAPI.savePhoto(file)
    if (response.data.resultCode === 0) {
        dispatch(setPhoto(response.data.data.photos))
    }
}
export const saveNewProfileData = (formData: any) => async (dispatch: Dispatch<ActionTypes>) => {
    let response = await profileAPI.saveNewProfileData(formData)
    if (response.data.resultCode === 0) {
        //dispatch())
    }
}

export default profileReducer