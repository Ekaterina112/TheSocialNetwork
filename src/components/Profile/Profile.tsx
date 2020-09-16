
import React from 'react';
import '../../App.css';
import c from './Profile.module.css'
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import {RootStateType, ProfilePageType} from '../redux/state';

type PropsType ={
    profilePage: ProfilePageType
    addPosts:(mess:string)=>void
}


const Profile = (props:PropsType) => {
    return  <div>
        <ProfileInfo/>
       <MyPosts postData={props.profilePage.postData} addPosts={props.addPosts}/>
    </div>
}
export default Profile