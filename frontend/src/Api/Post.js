import axios from "axios";
import { BASE_URL } from "./Common"; {/* need user token */ }

export const getPostById = (id, setRentItem) => {
    axios({
        method: 'get',
        url: `${BASE_URL}posts/${id}`,
        headers: { 'Content-Type': 'application/json' },
    })
        .then(response => {
            setRentItem(response.data[0])
        })
        .catch(err => {console.log(err)})
}
export const getPosts = (setPosts) => {
    return axios({
        method:"get",
        url: `${BASE_URL}posts`,
        headers: { 'Content-Type': 'application/json' },
    })
        .then(response => setPosts(response.data))
        .catch(err => {console.error(err)})
}
