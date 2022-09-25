import axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {'API-KEY': '01aa801c-2a8e-4bdc-82d2-9950462da9ea'}
})

export const usersAPI = {
    getUsers(currentPage: number, pageSize: number) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`,)
            .then(response => response.data)
    },
    getUnFollow(id: number) {
        return instance.delete(`follow/${id}`)
            .then(response => response.data)
    },
    getFollow(id: number) {
        return instance.post(`follow/${id}`, {})
            .then(response => response.data)
    }
}

export const profileAPI = {
    getProfile(userId: string) {
        return instance.get(`profile/${userId}`)
            .then(response => response.data)
    },
    getStatus(userId: string) {
        return instance.get(`profile/status/${userId}`)
            .then(response => response.data)
    },
    updateStatus(status: string) {
        return instance.put(`profile/status`, {status})
            .then(response => response.data)
    }
}

export const authAPI = {
    getAuth() {
        return instance.get(`auth/me`).then(response => response.data)
    },
    login(email: string, password: string, rememberMe: boolean) {
        return instance.post(`auth/login`, {email, password, rememberMe}).then(response => response.data)
    },
    logout() {
        return instance.delete(`auth/login`).then(response => response.data)
    }
}
