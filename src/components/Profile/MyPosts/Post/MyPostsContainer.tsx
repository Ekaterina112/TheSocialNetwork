import React from 'react';
import {addPostCreator, upDateNewPostTextCreator} from '../../../redux/ProfilePageReducer';
import MyPosts from '../MyPosts';
import {connect} from 'react-redux';
import {DispatchType, RootStateType} from '../../../redux/types';
import {Dispatch} from 'redux';




/*const MyPostsContainer = () => {
    return  (
        <StoreContext.Consumer>
            {(store) => {
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
}*/
const mapStateToProps = (state:RootStateType) =>{
    return {
        postData: state.profilePage.postData,
        newPostText:state.profilePage.newPostText
    }
}

const mapDispatchToProps = (dispatch:Dispatch) => {
    return { upDateNewPostText: (text: string) => {
            let action = upDateNewPostTextCreator(text)
            dispatch(action)},
        addPost: () => {
            dispatch(addPostCreator())},
    }
}
const MyPostsContainer= connect (mapStateToProps,mapDispatchToProps ) (MyPosts) //create container components

export default MyPostsContainer