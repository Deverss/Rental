import axios from "axios";
import { BASE_URL } from "./Common"; {/* need user token */ }

export const setPost = async (form, setMessage) => {
    var data = new FormData();
    data.append('uid', '1');
    data.append('title', form.title);
    data.append('type', form.type);
    data.append('description', form.description);
    data.append('people', form.people);
    data.append('address', form.address);
    data.append('price', form.price);
    data.append('electricPrice', form.electricPrice);
    data.append('waterPrice', form.waterPrice);
    data.append('internetPrice', form.internetPrice);
    data.append('vehiclePrice', form.vehiclePrice);
    data.append('Image1', form.Image1);
    data.append('Image2', form.Image2);
    data.append('Image3', form.Image3);
    data.append('Image4', form.Image4);
    data.append('area', form.area);
    data.append('views', '1');
    data.append('remain', '1');
    data.append('bed', '1');
    data.append('airC', '1');
    data.append('tv', '1');
    data.append('fridg', '1');
    data.append('vr', null);
    await axios.post(`${BASE_URL}posts`, data, { 'Content-Type': 'multipart/form-data' })
        .then(response => {
            setMessage('success')
        })
        .catch(err => {
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
        .catch(err => { console.log(err) })
}
export const getLimitPosts = (limit,setPosts) => {
    axios({
        method: 'get',
        url: `${BASE_URL}posts/limit/${limit}`,
        headers: { 'Content-Type': 'application/json' },
    })
        .then(response => {
            setPosts(response.data)
        })
        .catch(err => { console.log(err) })
}
export const getPosts = (setPosts) => {
    return axios({
        method: "get",
        url: `${BASE_URL}posts`,
        headers: { 'Content-Type': 'application/json' },
    })
        .then(response => setPosts(response.data))
        .catch(err => { console.error(err) })
}

export const filter = async(type) =>{
    try {
         await axios.get(`${BASE_URL}posts/filter/?type=`+type)
            .then((response)=> response.data)
    } catch (error) {
        console.log(error);
    }
    
}