import React from 'react';
import '../../App.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPostsContainer from './MyPosts/Post/MyPostsContainer';
import {UserProfileType} from '../redux/types';


type PropsType = {
    profile: UserProfileType
    status:string,
    updateStatus:(status:string)=>void
}

const Profile = (props:PropsType) => {
    return  <div>
        <ProfileInfo profile={props.profile} status={props.status} updateStatus={props.updateStatus}  />
       <MyPostsContainer/>
    </div>
}
export default Profile