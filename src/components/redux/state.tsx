export type MessageDataType = {
    message: string
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
    addPosts: () => void
    upDateNewPostText: (newText: string) => void,
    subscribe: (observer: () => void) => void
}


const store: StoreType = {
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
                {name: 'Kate', id: 1},
                {name: 'Tom', id: 2},
                {name: 'Kristi', id: 3},
                {name: 'Mike', id: 4},
                {name: 'Jeny', id: 5}
            ],
            messageData: [
                {message: 'Hi'},
                {message: 'What\'s up?'},
                {message: 'Well'},
                {message: 'Good'},
                {message: 'wOoOo'}
            ]

        }
    },
    getState() {
        return this._state
    },
    _callSubscriber() {
        console.log('state changed')
    },
    addPosts() {
        let newPost: PostDataType = {
            id: 4,
            message: this._state.profilePage.newPostText
            , count: 0
        }
        this._state.profilePage.postData.push(newPost)
        this._callSubscriber(this._state)
    },
    upDateNewPostText(newText) {
        this._state.profilePage.newPostText = newText
        this._callSubscriber(this._state)
    },
    subscribe(listener) {
        this._callSubscriber = listener
    }
}

// @ts-ignore
window.store = store


export default store
