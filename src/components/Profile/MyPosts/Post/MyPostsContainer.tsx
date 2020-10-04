import React from 'react';
import {addPostCreator, upDateNewPostTextCreator} from '../../../redux/ProfilePageReducer';
import {StoreType} from '../../../redux/store';
import MyPosts from '../MyPosts';

type PropsType ={
    store:StoreType
}


const MyPostsContainer = (props:PropsType) => {
    let state = props.store.getState()
    let addPost = () => {
            props.store.dispatch(addPostCreator())
    }
    let onPostChange =(text:string)=> {
            let action = upDateNewPostTextCreator(text)
            props.store.dispatch(action)
    }
    return  (<MyPosts upDateNewPostText={onPostChange}
                      addPost={addPost}
                      postData={state.profilePage.postData}
                      newPostText={state.profilePage.newPostText}/>)
}
export default MyPostsContainer