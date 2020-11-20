import React from 'react';
import {addPostCreator} from '../../../redux/ProfilePageReducer';
import MyPosts from '../MyPosts';
import {connect} from 'react-redux';
import {RootStateType} from '../../../redux/types';
import {Dispatch} from 'redux';



const mapStateToProps = (state:RootStateType) =>{
    return {
        postData: state.profilePage.postData,
        newPostText:state.profilePage.newPostText
    }
}

const mapDispatchToProps = (dispatch:Dispatch) => {
    return {addPost: (newPostBody:string) => {
            dispatch(addPostCreator(newPostBody))},
    }
}
const MyPostsContainer= connect (mapStateToProps,mapDispatchToProps ) (MyPosts) //create container components

export default MyPostsContainer