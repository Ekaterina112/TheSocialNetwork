//SAVE SOME TYPES //ONLY FOR TYPES

import {UsersDataType} from './UsersPageReducer';
import {UsersAuthDataType} from './AuthReducer';

export type MessageDataType = {
    message: string
    id?: number
}
export type DialogItemDataType = {
    name: string
    id: number
}
export type PostDataType = {
    id: string
    message: string
    count: number
}
export type MessagePageType = {
    dialogItemsData: Array<DialogItemDataType>
    messageData: Array<MessageDataType>
}
export type ProfilePageType = {
    postData: Array<PostDataType>
    newPostText: string
    profile: null | UserProfileType
    status:string
}
export type RootStateType = {
    auth: UsersAuthDataType;
    profilePage: ProfilePageType
    messagePage: MessagePageType
}

export type AddPostsActionType = {
    type: 'ADD-POST',
    newPostBody:string

}

export type SetUserProfileActionType = {
    type: 'SET-USERS-PROFILE',
    profile: UserProfileType
}
export type SetStatusType = {
    type: 'SET-STATUS',
    status: string
}

export type GetStatusType = {
    type: 'GET-STATUS',
    status: string
}
export type SendMessageActionType = {
    type: 'SEND-MESSAGE',
    newMessageBody:string
}

//FOR USERS PAGE
export type FollowActionType = {
    type: 'FOLLOW', //string
    userID: number
}
export type UnFollowActionType = {
    type: 'UNFOLLOW',
    userID: number
}
export type SetUsersActionType = {
    type: 'SET-USERS',
    usersData: Array<UsersDataType>
}
export type SetCurrentPageActionType = {
    type: 'SET-CURRENT-PAGE',
    currentPage: number
}
export type SetUsersTotalCountType = {
    type: 'SET-USERS-TOTAL-COUNT',
    totalCount: number
}
export type SetFetchingActionType = {
    type: 'SET-FETCHING',
    isFetching: boolean
}
export type SetDisabledFollowingBTNActionType = {
    type: 'SET_DISABLED_FOLLOWING_BTN',
    isFetching: boolean,
    userID:number
}


export type SetAuthActionType = {
    type: 'SET_USER_DATA',
    payload: UsersAuthDataType
}
export type AuthUsersType = {
    email: null | string,
    id: null | number,
    login: null | string
}
export type ActionTypes =
    AddPostsActionType
    |SetUserProfileActionType
    | SendMessageActionType
    | FollowActionType
    | UnFollowActionType
    | SetUsersActionType
    | SetCurrentPageActionType
    | SetUsersTotalCountType
    | SetFetchingActionType
    | SetAuthActionType
    | SetDisabledFollowingBTNActionType
|SetStatusType
|GetStatusType

export type DispatchType = { dispatch: (action: ActionTypes) => void }

export type UserProfileType = {
    aboutMe: string,
    contacts: {
        facebook: string,
        website: null,
        vk: string,
        twitter: string,
        instagram: string,
        youtube: string,
        github: string,
        mainLink: null
    },
    lookingForAJob: boolean,
    lookingForAJobDescription: string,
    fullName: string,
    userId: number,
    photos: {
        small: string,
        large: string
    }
}



