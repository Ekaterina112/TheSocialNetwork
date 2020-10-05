import React from 'react';
import '../../App.css';
import c from './Profile.module.css'
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPostsContainer from './MyPosts/Post/MyPostsContainer';




const Profile = () => {
    return  <div>
        <ProfileInfo/>
       <MyPostsContainer/>
    </div>
}
export default Profile