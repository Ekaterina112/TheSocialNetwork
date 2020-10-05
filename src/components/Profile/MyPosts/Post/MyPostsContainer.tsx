import React from 'react';
import {addPostCreator, upDateNewPostTextCreator} from '../../../redux/ProfilePageReducer';
import MyPosts from '../MyPosts';
import StoreContext from '../../../../StoreContext';




const MyPostsContainer = () => {
    return  (
        <StoreContext.Consumer>
            {(store) => {
                let state = store.getState()
                let addPost = () => {
                    store.dispatch(addPostCreator())
                }
                let onPostChange = (text: string) => {
                    let action = upDateNewPostTextCreator(text)
                    store.dispatch(action)
                }
                return <MyPosts upDateNewPostText={onPostChange}
                                addPost={addPost}
                                postData={store.getState().profilePage.postData}
                                newPostText={store.getState().profilePage.newPostText}/>
            }
            }
        </StoreContext.Consumer>
    )
}
export default MyPostsContainer