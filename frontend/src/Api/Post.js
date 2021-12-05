import axios from "axios";
import { BASE_URL } from "./Common"; {/* need user token */ }

export const setPost = async (form,setMessage) =>{
    var data = new FormData();
    data.append('uid','1');
    data.append('title',form.title);
    data.append('type',form.type);
    data.append('description',form.description);
    data.append('people',form.people);
    data.append('area',form.area);
    data.append('Image',form.Image);
    data.append('views','1');
    data.append('remain','1');
    data.append('bed','1');
    data.append('airC','1');
    data.append('tv','1');
    data.append('fridg','1');
    data.append('vr',null);
    await axios.post(`${BASE_URL}posts`,data,{'Content-Type': 'multipart/form-data'})
        .then(response =>{
            setMessage('success')
        })
        .catch(err =>{
            setMessage('error')
        })
}

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
