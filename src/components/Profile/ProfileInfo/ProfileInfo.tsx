import React, {ChangeEvent, useState} from 'react';
import c from './ProfileInfo.module.css'
import {UserProfileType} from '../../../redux/types';
import Preloader from '../../common/Preloader';
import ProfileStatusWithHooks from './ProfileStatus/ProfileStatusWithHooks';
import ProfileData from './ProfileData/ProfileData';
import ProfileDataForm from './ProfileDataForm/ProfileDataForm';
import userPhoto from '../../../avatar.jpg';


type PropsType = {
    profile: UserProfileType
    status: string
    updateStatus: (status: string) => void,
    isOwner: boolean,
    savePhoto: (file: any) => void,
    saveNewProfileData: (formData: any) => void
}


const ProfileInfo: React.FC<PropsType> = ({profile, status, updateStatus, isOwner, savePhoto, saveNewProfileData}) => {
    let [editMode, setEditMode] = useState<boolean>(false)
    const openEditMode = () => setEditMode(true)
    const onMainPhotoSelected = (e: ChangeEvent<HTMLInputElement>) => {
        // @ts-ignore
        if (e.target.files.length) {
            // @ts-ignore
            savePhoto(e.target.files[0])
        }
    }
    const onSubmitEdit = (formData: any) => {
        // @ts-ignore
        saveNewProfileData(formData).then(() => {
            setEditMode(false)
        })
    }

    if (!profile) {
        return <Preloader/>
    }

    return <div className={c.profile}>
        <div className={c.photoBlock}>
            <img src={profile.photos.large != null ? profile.photos.large : userPhoto} alt={'here avatar'}/>
            {isOwner &&
                <div className={c.label}>
                    <label htmlFor="upload-photo">change photo</label>
                    <input type="file" name="photo" id="upload-photo" onChange={onMainPhotoSelected} className={c.input} />
                </div>
            }
        </div>
        <div className={c.profileBlock}>
            <ProfileStatusWithHooks status={status} updateStatus={updateStatus}/>
            <div>
                {editMode
                    ? <ProfileDataForm profile={profile}
                                       initialValues={profile}
                                       onSubmit={onSubmitEdit}/>
                    : <ProfileData profile={profile} isOwner={isOwner} openEditMode={openEditMode}/>}
            </div>
        </div>
    </div>
}


export default ProfileInfo