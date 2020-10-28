import React from 'react';
import '../../App.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPostsContainer from './MyPosts/Post/MyPostsContainer';
import {UserProfileType} from '../redux/types';


type PropsType = {
    profile: UserProfileType
}

const Profile = (props:PropsType) => {
    return  <div>
        <ProfileInfo profile={props.profile}/>
       <MyPostsContainer/>
    </div>
}
export default Profile