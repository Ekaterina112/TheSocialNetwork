import axios from 'axios'


//вопросы для тех поддержки 1.почему не работает * from axios 2. расширение такого рода файлов
//екземпляр со всеми настройками для конкретного API
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
    getUseR: (userId: number) => {
        return instance.get(`profile/${userId}`)
            .then(response => response.data)
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
export const authAPI = {

    getAuth: () => {
        return instance.get(`auth/me`)
            .then(response => response.data)//это строка не нужна
    },

}