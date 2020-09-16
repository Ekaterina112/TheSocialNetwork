import {rerenderEntireTree} from '../../render';

export type MessageDataType ={
    message:string
}

export type DialogItemDataType ={
    name:string
    id:number
}

 export type PostDataType ={
    id ?:number
    message:string
    count:number
}
export type   MessagePageType = {
    dialogItemsData: Array<DialogItemDataType>
    messageData: Array<MessageDataType>}

 export type   ProfilePageType = {
    postData: Array<PostDataType>
}
export type RootStateType ={
    profilePage: ProfilePageType
    messagePage: MessagePageType
}


let state: RootStateType = {
    profilePage: {
        postData: [
            {id: 1, message: 'Hello', count: 100},
            {id: 2, message: 'How are you', count: 99},
            {id: 3, message: 'I am fine', count: 98},
        ]
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
}

export let addPosts = (mess:string) => {
const newPost:PostDataType ={id: 4, message:mess , count:0}
 state.profilePage.postData.push(newPost)
    rerenderEntireTree(state)
}
export default state
