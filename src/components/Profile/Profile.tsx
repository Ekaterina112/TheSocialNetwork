
import React from 'react';
import '../../App.css';
import c from './Profile.module.css'
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import {RootStateType, ProfilePageType, ActionTypes} from '../redux/state';

type PropsType ={
    profilePage: ProfilePageType
    dispatch: (action:ActionTypes) => void,
}


const Profile = (props:PropsType) => {
    return  <div>
        <ProfileInfo/>
       <MyPosts postData={props.profilePage.postData}
                newPostText={props.profilePage.newPostText}
                dispatch={props.dispatch}/>
    </div>
}
export default Profile