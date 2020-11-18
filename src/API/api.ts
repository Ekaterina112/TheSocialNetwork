import axios from 'axios'


//вопросы для тех поддержки 1.почему не работает * from axios 2. расширение такого рода файлов
//екземпляр со всеми настройками для конкретного API
//без типизации
const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        'API-KEY': '97580e0f-7747-4533-9c03-60f1b0e4f8a8'
    }
})
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
export const profileAPI = {
    getProfile: (userId: number) => {
        return instance.get(`profile/${userId}`)
            .then(response => response.data)
    },
    getStatus (userId: number) {
        return instance.get(`profile/status/${userId}`)
    },
    updateStatus (status:string){
        return instance.put('profile/status', {status})
    },

}
export const authAPI = {
    getAuth() {
        return instance.get(`auth/me`)
    }

}