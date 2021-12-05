import Cookies from "js-cookie"
export const BASE_URL = "http://localhost:8000/api/"
export const setUser = (user) =>{
    localStorage.setItem('user',JSON.stringify(user))
}
export const getUser = () =>{
    return JSON.parse(localStorage.getItem('user'));
}

export const removeUser = () => {
    localStorage.removeItem('user');
}

export const setToken = (token) =>{
    Cookies.set('token',token,{expires : 7})
}
export const getToken = () =>{
    return Cookies.get('token')
}
export const removeToken = () =>{
    Cookies.remove('token');
}