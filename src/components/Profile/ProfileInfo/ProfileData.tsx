import React from 'react';
import {UserProfileType} from '../../../redux/types';
import c from './ProfileInfo.module.css';
import userPhoto from '../../../avatar.jpg';
import Contact from './Contact';


type PropsType = {
    profile: UserProfileType,
}
const ProfileData: React.FC<PropsType> = ({profile}) => {
    return <div className={c.avatar}>
        <img src={profile.photos.large != null ? profile.photos.large : userPhoto} alt={'here avatar'}/>
        <div><b>Full Name</b>: {profile.fullName}</div>
        <div><b>About Me</b>: {profile.aboutMe}</div>
        <div><b>Looking For A Job</b>: {profile.lookingForAJob ? 'yes' : 'no'}</div>
        {profile.lookingForAJob ?
            <div><b>Looking For A Job Description</b>: {profile.lookingForAJobDescription}</div> : ''}
        <div><b>Contacts</b>: {Object.keys(profile.contacts).map(key => {
            // @ts-ignore
            return <Contact key={key} contactTitle={key} contactValue={profile.contacts[key]}/>
        })}</div>

    </div>
}
export default ProfileData