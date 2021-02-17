import React from 'react';
import '../../App.css';
import MyPostsContainer from './MyPosts/Post/MyPostsContainer';
import {UserProfileType} from '../../redux/types';
import ProfileInfo from './ProfileInfo/ProfileInfo';


type PropsType = {
    profile: UserProfileType
    status: string,
    updateStatus: (status: string) => void,
    isOwner:boolean,
    savePhoto:(file:any)=>void,
    saveNewProfileData:(formData:any)=>void,
}

const Profile: React.FC<PropsType> = ({profile, status, updateStatus, isOwner,savePhoto,saveNewProfileData}) => {
    return <div>
        <ProfileInfo savePhoto={savePhoto} isOwner={isOwner}  profile={profile} status={status} updateStatus={updateStatus} saveNewProfileData={saveNewProfileData}/>
        <MyPostsContainer/>
    </div>
}
export default Profile