import axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {'API-KEY': '01aa801c-2a8e-4bdc-82d2-9950462da9ea'}
})

export const commonAPI = {
    getUsers(currentPage: number, pageSize: number) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`,)
            .then(response => response.data)
    },
    getAuth() {
        return instance.get(`auth/me`,).then(response => response.data)
    },
    getProfile(userId: string) {
        return axios.get(`profile/` + userId)
            .then(response => response.data)
    },
    getUnFollow(id: number) {
        return instance.delete(`follow/${id}`,)
            .then(response => response.data)
    },
    getFollow(id: number) {
        return instance.post(`follow/${id}`, {},)
            .then(response => response.data)
    }
}
