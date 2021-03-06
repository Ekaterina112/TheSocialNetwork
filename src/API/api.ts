import axios from 'axios'
import {UserProfileType} from '../redux/types';

//екземпляр со всеми настройками для конкретного API
//без типизации
const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        'API-KEY': '97580e0f-7747-4533-9c03-60f1b0e4f8a8'
    }
})

//ENUMS
export enum ResultCodesEnum {
    Success = 0,
    Error = 1,
}

export enum ResultCodeForCaptcha {
    CaptchaIsRequired = 10,
}

//API&TYPES 1

export const usersAPI = {
    getUsers: (currentPage: number, pageSize: number) => {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data)
    },
    getProfile: (userId: number) => {
        return profileAPI.getProfile(userId)
    },
    postFollow: (id: number) => {
        return instance.post(`follow/${id}`)
            .then(response => response.data)
    },
    deleteUnfollow: (id: number) => {
        return instance.delete(`follow/${id}`)
            .then(response => response.data)
    }
}

//API&TYPES 2
export const profileAPI = {
    getProfile: (userId: number) => {
        return instance.get(`profile/${userId}`)
            .then(response => response.data)
    },
    getStatus(userId: number) {
        return instance.get(`profile/status/${userId}`)
    },
    updateStatus(status: string) {
        return instance.put('profile/status', {status})
    },
    savePhoto(file: any) {
        const formData = new FormData()
        formData.append('image', file)
        return instance.put('profile/photo', formData, {headers: {'Content-Type': 'multipart/form-data'}})
    },
    saveNewProfileData(updatedProfile: UserProfileType) {
        return instance.put('profile', updatedProfile)
    },
}
//API&TYPES 3
type getAuthType = {
    data: {
        id: number
        email: string
        login: string
    }
    resultCode: ResultCodesEnum
    messages: Array<string>

}
type loginType = {
    data: {
        userId: number
    }
    resultCode: ResultCodesEnum | ResultCodeForCaptcha
    messages: Array<string>

}
type logoutType = {
    resultCode: ResultCodesEnum
    messages: Array<string>
    data: {}
}
export const authAPI = {
    getAuth() {
        return instance.get<getAuthType>(`auth/me`).then(response => response.data)
    },
    login(email: string, password: string, rememberMe: boolean, captcha: null | string) {
        return instance.post<loginType>('auth/login', {
            email,
            password,
            rememberMe,
            captcha
        }).then(response => response.data)
    },
    logout() {
        return instance.delete<logoutType>('auth/login').then(response => response.data)
    },

}

//API&TYPES 4
type getCaptchaType = {
   url:string
}
export const securityAPI = {
    getCaptcha() {
        return instance.get<getCaptchaType>(`security/get-captcha-url`)
    },
}