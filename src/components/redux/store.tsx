//SAVE SOME TYPES //ONLY FOR TYPES

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
export type   MessagePageType = {
    dialogItemsData: Array<DialogItemDataType>
    messageData: Array<MessageDataType>
    newMessageText: string
}
export type   ProfilePageType = {
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
export type FollowActionType = {
    type: 'FOLLOW', //string
}
export type UnFollowActionType = {
    type: 'UNFOLLOW', //string
}
export type ActionTypes =
    AddPostsActionType
    | UpDateNewPostTextActionType
    | UpDateNewMessageTextActionType
    | SendMessageActionType
    | FollowActionType
    | UnFollowActionType

export type DispatchType = { dispatch: (action: ActionTypes) => void }


//for users page
export type UsersData = {
    id: number,
    followed: boolean,
    fullName: string,
    status: string,
    location: { city: string, country: string }
}
export type UsersPageType = {
    usersData: Array<UsersData>
}


/*let store: StoreType = {
    _state: {
        profilePage: {
            postData: [
                {id: 1, message: 'Hello', count: 100},
                {id: 2, message: 'How are you', count: 99},
                {id: 3, message: 'I am fine', count: 98},
            ],
            newPostText: 'it-kamasutra.com'
        },
        messagePage: {
            dialogItemsData: [
                {id: 1,name: 'Kate'},
                {id: 2,name: 'Tom'},
                {id: 3,name: 'Kristi'},
                {id: 4, name: 'Mike'},
                {id: 5, name: 'Jeny' }
            ],
            messageData: [
                {id: 1, message: 'Hi'},
                {id: 2, message: 'What\'s up?'},
                {id: 3, message: 'Well'},
                {id: 4, message: 'Good'},
                {id: 5, message: 'wOoOo'}
            ],
newMessageText: ''
        }
    },
    _callSubscriber() {
        console.log('state changed')
    },

    getState() {
        return this._state
    },
    subscribe(listener) {
        this._callSubscriber = listener
    },

    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.messagePage = messageReducer(this._state.messagePage, action)
        this._callSubscriber(this._state)
    }
}*/

// @ts-ignore
/*window.store = store
export default store*/
