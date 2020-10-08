import {ActionTypes, AddPostsActionType, PostDataType, ProfilePageType, UpDateNewPostTextActionType} from './store';


const ADD_POST='ADD-POST'; //is it need ???
const UP_DATE_NEW_POST_TEXT='UP-DATE-NEW-POST-TEXT';



 let initialState: ProfilePageType = {
         postData: [
             {id: 1, message: 'Hello', count: 100},
             {id: 2, message: 'How are you', count: 99},
             {id: 3, message: 'I am fine', count: 98},
         ],
         newPostText: 'it-kamasutra.com'
     }


const profileReducer=(state =initialState, action:ActionTypes) => {
    switch (action.type) {
        case 'ADD-POSTS': {
            let newPost: PostDataType = {
                id: 4,
                message: state.newPostText,
                count: 0
            }
            let stateCopy = {...state}
            stateCopy.postData = [...state.postData]
            stateCopy.postData.push(newPost)
            stateCopy.newPostText = ''
            return stateCopy
        }
        case 'UP-DATE-NEW-POST-TEXT': {
            let stateCopy = {...state}
            stateCopy.newPostText = action.newText
            return stateCopy
        }
        default:
            return state
    }
}

export  const addPostCreator = ():AddPostsActionType =>({type: 'ADD-POSTS'})
export const upDateNewPostTextCreator = (text:string):UpDateNewPostTextActionType => ({
    type:'UP-DATE-NEW-POST-TEXT',newText:text})

export default profileReducer