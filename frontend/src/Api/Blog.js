import axios from "axios";
import { BASE_URL } from "./Common"; {/* need user token */ }

export const setBlog = async (form,setMessage) =>{
    var data = new FormData();
    data.append('userID','1');
    data.append('title',form.title);
    data.append('description',form.description);
    data.append('content',form.content);
    data.append('Image',form.Image);
    data.append('views','1');
    await axios.post(`${BASE_URL}blogs`,data,{'Content-Type': 'multipart/form-data'})
        .then(response =>{
            setMessage('success')
        })
        .catch(err =>{
            setMessage('error')
        })
}

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
