import React from 'react';
import {UserProfileType} from '../../../../redux/types';
import c from '../ProfileInfo.module.css';
import Contact from './Contact/Contact';
import { Button } from 'antd';


type PropsType = {
    profile: UserProfileType,
    isOwner: boolean,
    openEditMode: () => void
}
const ProfileData: React.FC<PropsType> = ({profile, isOwner, openEditMode}) => {
    return <div className={c.avatar}>

        <div><b>Full Name</b>: {profile.fullName}</div>
        <div><b>About Me</b>: {profile.aboutMe}</div>
        <div><b>Looking For A Job</b>: {profile.lookingForAJob ? 'yes' : 'no'}</div>
        {profile.lookingForAJob ?
            <div><b>Looking For A Job Description</b>: {profile.lookingForAJobDescription}</div> : ''}
        <div><b>Contacts</b>: {Object.keys(profile.contacts).map(key => {
            // @ts-ignore
            return <Contact key={key} contactTitle={key} contactValue={profile.contacts[key]}/>
        })}</div>
        {isOwner && <div>
            <Button onClick={openEditMode}>EDIT</Button>
        </div>}
    </div>
}
export default ProfileData