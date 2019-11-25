import * as axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: { 'API-KEY': '9936799b-ed7b-411e-8521-23b1ed72b8a0' }
});

export const API = {
    getStoreData() {
        return instance.get('https://jsonplaceholder.typicode.com/albums/1/photos');
    },
    getLogin() {
        return instance.get('auth/me')
            .then(response => {
                return response.data.data;
            })
    },
    logout() {
        return instance.delete('auth/login')
    },
    login(email, password, rememberMe = false) {
        return instance.post('auth/login', { email, password, rememberMe })
            .then(response => {
                return response.data;
            })
    },
    getUsers(currentPage = 1, pageSize = 50) {
        return instance.get(`users?count=${pageSize}&page=${currentPage}`).then(response => {
            return response.data;
        })
    },
    getProfile(id = 9) {
        return instance.get(`profile/${id}`).then(response => {
            return response.data;
        })
    },
};


























