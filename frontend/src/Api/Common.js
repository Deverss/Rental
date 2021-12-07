import Cookies from "js-cookie"
import axios from "axios";

export const BASE_URL = "http://localhost:8000/api/"

// export const BASE_URL = "https://94fb-2402-800-6235-2953-f10a-60af-8da8-7275.ngrok.io/api/"
export const setUser = (user) => {
    localStorage.setItem('user', JSON.stringify(user))
}
export const getUser = () => {
    return JSON.parse(localStorage.getItem('user'));
}

export const removeUser = () => {
    localStorage.removeItem('user');
}

export const setToken = (token) => {
    Cookies.set('token', token, { expires: 7 })
}
export const getToken = () => {
    return Cookies.get('token')
}
export const removeToken = () => {
    Cookies.remove('token');
}
export const signUp = async (data) => {
    try {
        return await axios.post(`${BASE_URL}register`, data);
    } catch (error) {
        return error;
    }
}

export const editUser = async (id,data) => {
    try {
        const response = await axios({
            method : 'put',
            url : `${BASE_URL}users/${id}`,
            data :data,
            headers : {
                "accept": "application/json",
                "Authorization": 'Bearer '+getToken(),
            }
        })
        if(response) {setUser(data)}
        return response;
    } catch (error) {
        return error;
    }
}