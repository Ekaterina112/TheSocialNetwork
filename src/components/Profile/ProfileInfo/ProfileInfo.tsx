import React, {ChangeEvent, useState} from 'react';
import c from './ProfileInfo.module.css'
import {UserProfileType} from '../../../redux/types';
import Preloader from '../../common/Preloader';
import ProfileStatusWithHooks from './ProfileStatus/ProfileStatusWithHooks';
import ProfileData from './ProfileData/ProfileData';
import ProfileDataForm from './ProfileDataForm/ProfileDataForm';
import userPhoto from '../../../avatar.jpg';
import {FormDataType} from '../../LoginPage/LoginForm';

type PropsType = {
    profile: UserProfileType
    status: string
    updateStatus: (status: string) => void,
    isOwner: boolean,
    savePhoto: (file: any) => void
}


const ProfileInfo: React.FC<PropsType> = ({profile, status, updateStatus, isOwner, savePhoto}) => {
    let [editMode, setEditMode] = useState<boolean>(false)
    const openEditMode = () => setEditMode(true)
    const onMainPhotoSelected = (e: ChangeEvent<HTMLInputElement>) => {
        // @ts-ignore
        if (e.target.files.length) {
            // @ts-ignore
            savePhoto(e.target.files[0])
        }
    }
    const onSubmitEdit = (formData:any) => {
        //будет диспатчи
       console.log(formData)
    }

    if (!profile) {
        return <Preloader/>
    }
    return <div className={c.profile}>
        <img src={profile.photos.large != null ? profile.photos.large : userPhoto} alt={'here avatar'}/>
        {isOwner && <input type={'file'} onChange={onMainPhotoSelected}/>}
        {editMode
            ? <ProfileDataForm onSubmit={onSubmitEdit} />
            : <ProfileData profile={profile} isOwner={isOwner} openEditMode={openEditMode}/>}
        <ProfileStatusWithHooks status={status} updateStatus={updateStatus}/>
    </div>
}


export default ProfileInfo