import React from 'react';
import '../../App.css';
import c from './Profile.module.css'
import ProfileInfo from './ProfileInfo/ProfileInfo';
import {StoreType} from '../redux/store';
import MyPostsContainer from './MyPosts/Post/MyPostsContainer';

type PropsType ={
    store: StoreType
}


const Profile = (props:PropsType) => {
    return  <div>
        <ProfileInfo/>
       <MyPostsContainer store={props.store}/>
    </div>
}
export default Profile