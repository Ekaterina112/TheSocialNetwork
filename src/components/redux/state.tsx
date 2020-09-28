
const ADD_POST='ADD-POST';
const UP_DATE_NEW_POST_TEXT='UP-DATE-NEW-POST-TEXT';
const UP_DATE_NEW_MESSAGE_TEXT= 'UP-DATE-NEW-MESSAGE-TEXT';
const SEND_MESSAGE= 'SEND-MESSAGE'




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
    newMessageText:string
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
    dispatch: (action:ActionTypes) => void
}
type AddPostsActionType = {
    type: 'ADD-POSTS', //string

}
type UpDateNewPostTextActionType = {
    type: 'UP-DATE-NEW-POST-TEXT', //string
    newText:string
}
type SendMessageActionType = {
    type: 'SEND-MESSAGE', //string
}
type UpDateNewMessageTextActionType = {
    type: 'UP-DATE-NEW-MESSAGE-TEXT', //string
    body:string
}

export type ActionTypes = AddPostsActionType | UpDateNewPostTextActionType | UpDateNewMessageTextActionType | SendMessageActionType

let store: StoreType = {
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
        if (action.type === 'ADD-POSTS') {
            let newPost: PostDataType = {
                id: 4,
                message: this._state.profilePage.newPostText
                , count: 0
            }
            this._state.profilePage.postData.push(newPost)
            this._callSubscriber(this._state)
        } else if (action.type === 'UP-DATE-NEW-POST-TEXT') {
            this._state.profilePage.newPostText = action.newText
            this._callSubscriber(this._state)
        } else if (action.type === 'UP-DATE-NEW-MESSAGE-TEXT') {
            this._state.messagePage.newMessageText=action.body
            this._callSubscriber(this._state )
        } else if (action.type === 'SEND-MESSAGE') {
            let body= this._state.messagePage.newMessageText
            this._state.messagePage.newMessageText = " "
            this._state.messagePage.messageData.push({id:6, message:body})
            this._callSubscriber(this._state )
    }
    }
}

export  const addPostCreator = ():AddPostsActionType =>({type: 'ADD-POSTS'})
export const upDateNewPostTextCreator = (text:string):UpDateNewPostTextActionType => ({
        type:'UP-DATE-NEW-POST-TEXT',newText:text})

export const sendMessageCreator = ():SendMessageActionType =>({type:'SEND-MESSAGE'})
export const upDateNewMessageTextCreator = (b:string):UpDateNewMessageTextActionType => ({
    type:'UP-DATE-NEW-MESSAGE-TEXT', body:b})

// @ts-ignore
window.store = store
export default store
