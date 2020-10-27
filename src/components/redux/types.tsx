//SAVE SOME TYPES //ONLY FOR TYPES

import {UsersDataType} from './UsersPageReducer';

export type MessageDataType = {
    message: string
    id?: number
}
export type DialogItemDataType = {
    name: string
    id: number
}
export type PostDataType = {
    id?: number
    message: string
    count: number
}
export type MessagePageType = {
    dialogItemsData: Array<DialogItemDataType>
    messageData: Array<MessageDataType>
    newMessageText: string
}
export type ProfilePageType = {
    postData: Array<PostDataType>
    newPostText: string
}
export type RootStateType = {
    profilePage: ProfilePageType
    messagePage: MessagePageType
}

export type StoreType = {
    _state: RootStateType,
    getState: () => RootStateType,
    _callSubscriber: (_state: RootStateType) => void,
    subscribe: (observer: () => void) => void,
    dispatch: DispatchType
}
export type AddPostsActionType = {
    type: 'ADD-POSTS', //string

}
export type UpDateNewPostTextActionType = {
    type: 'UP-DATE-NEW-POST-TEXT', //string
    newText: string
}
export type SendMessageActionType = {
    type: 'SEND-MESSAGE', //string
}
export type UpDateNewMessageTextActionType = {
    type: 'UP-DATE-NEW-MESSAGE-TEXT', //string
    body: string
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
export type ActionTypes =
    AddPostsActionType
    | UpDateNewPostTextActionType
    | UpDateNewMessageTextActionType
    | SendMessageActionType
    | FollowActionType
    | UnFollowActionType
    | SetUsersActionType
    | SetCurrentPageActionType
    | SetUsersTotalCountType
    | SetFetchingActionType

export type DispatchType = { dispatch: (action: ActionTypes) => void }




