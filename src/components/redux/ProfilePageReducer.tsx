
import {ActionTypes, AddPostsActionType, PostDataType, ProfilePageType, UpDateNewPostTextActionType} from './state';



const ADD_POST='ADD-POST';
const UP_DATE_NEW_POST_TEXT='UP-DATE-NEW-POST-TEXT';


const profileReducer=(state: ProfilePageType, action:ActionTypes) => {
    if (action.type === 'ADD-POSTS') {
        let newPost: PostDataType = {
            id: 4,
            message: state.newPostText,
            count: 0
        }
       state.postData.push(newPost)
    } else if (action.type === 'UP-DATE-NEW-POST-TEXT') {
        state.newPostText = action.newText
    }
    return state
}

export  const addPostCreator = ():AddPostsActionType =>({type: 'ADD-POSTS'})
export const upDateNewPostTextCreator = (text:string):UpDateNewPostTextActionType => ({
    type:'UP-DATE-NEW-POST-TEXT',newText:text})

export default profileReducer