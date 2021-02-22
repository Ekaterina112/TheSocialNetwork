//SAVE SOME TYPES //ONLY FOR TYPES
import {getCaptchaUrlSuccess, setAuthUsersData} from './authReducer';
import {sendMessageCreator} from './messagePageReducer';
import {
    addPostCreator,
    deletePostCreator,
    getUserStatus,
    setPhoto,
    setStatus,
    setUserProfile
} from './profilePageReducer';
import {setInitialized} from './appReducer';
import {
    followSuccess,
    setCurrentPage,
    setDisabledFollowingBTN,
    setIsFetching,
    setUsers,
    setUsersTotalCount,
    unfollowSuccess
} from './usersPageReducer';


export type ActionTypes =
    ReturnType<typeof addPostCreator>
    | ReturnType<typeof deletePostCreator>
    | ReturnType<typeof setUserProfile>
    | ReturnType<typeof getUserStatus>
    | ReturnType<typeof setStatus>
    | ReturnType<typeof followSuccess>
    | ReturnType<typeof unfollowSuccess>
    | ReturnType<typeof setUsers>
    | ReturnType<typeof setCurrentPage>
    | ReturnType<typeof setUsersTotalCount>
    | ReturnType<typeof setIsFetching>
    | ReturnType<typeof setDisabledFollowingBTN>
    | ReturnType<typeof setInitialized>
    | ReturnType<typeof setAuthUsersData>
    | ReturnType<typeof sendMessageCreator>
    | ReturnType<typeof setPhoto>
    | ReturnType<typeof getCaptchaUrlSuccess>


export type UserProfileType = {
    aboutMe: string,
    contacts: {
        facebook: string,
        website: null,
        vk: string,
        twitter: string,
        instagram: string,
        youtube: string,
        github: string,
        mainLink: null
    },
    lookingForAJob: boolean,
    lookingForAJobDescription: string,
    fullName: string,
    userId: number,
    photos: {
        small: string | null
        large: string | null
    }
}



