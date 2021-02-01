import React from 'react';
import '../../App.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPostsContainer from './MyPosts/Post/MyPostsContainer';
import {UserProfileType} from '../../redux/types';


type PropsType = {
    profile: UserProfileType
    status: string,
    updateStatus: (status: string) => void
}

const Profile: React.FC<PropsType> = ({profile, status, updateStatus}) => {
    return <div>
        <ProfileInfo profile={profile} status={status} updateStatus={updateStatus}/>
        <MyPostsContainer/>
    </div>
}
export default Profile