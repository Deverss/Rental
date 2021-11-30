import axios from "axios";
import { BASE_URL } from "./Common"; {/* need user token */ }

export const getBlogById = (id, setRentItem) => {
    axios({
        method: 'get',
        url: `${BASE_URL}blogs/${id}`,
        headers: { 'Content-Type': 'application/json' },
    })
        .then(response => {
            setRentItem(response.data[0])
        })
        .catch(err => {console.log(err)})
}
export const getBlogs = (setBlogs) => {
    return axios({
        method:"get",
        url: `${BASE_URL}blogs`,
        headers: { 'Content-Type': 'application/json' },
    })
        .then(response => setBlogs(response.data))
        .catch(err => {console.error(err)})
}
