import React, { useState } from 'react'
import Axios from 'axios'
const Test = () => {
    const [name,setUserId] = useState('sakjdh129837jkasd723');
    const [email,setTitle] = useState(null);
    const [password,setDesc] = useState(null);
    const [zalo,setContent] = useState('null');
    const [imgData,setImgData] = useState(null);
    const [phone,setView] = useState('null');
    const [facebook,setFacebook] = useState('null');
    const handleChange = files => {
        setImgData(files[0]);
    }
    const submitData = e => {
        e.preventDefault();
        const fData = new FormData();
        fData.append('Image',imgData);
        fData.append('name',name);
        fData.append('password',password);
        fData.append('zalo',zalo);
        fData.append('email',email);
        fData.append('phone',phone);
        fData.append('facebook',facebook);
        console.log(fData)
        Axios.post('http://127.0.0.1:8000/api/users',fData,{'Content-Type': 'multipart/form-data'},)
        .then(res =>{
            console.log(res);
        }).catch(e=>console.error(e));
    }
    return (
        <>
            <form action="">
                <label htmlFor="title">name</label>
                <input type="text" name="title" id="" onChange={e=>setTitle(e.target.value)}/>
                <label htmlFor="description">email</label>
                <input type="text" name="description" id="" onChange={e=>setDesc(e.target.value)}/>
                <label htmlFor="content">password</label>
                <input type="text" name="content" id="" onChange={e=>setContent(e.target.value)}/>
                <label htmlFor="image">upload img</label>
                <input type="file" name="image" id="image" onChange={e=>handleChange(e.target.files)} />
                <button type="submit" onClick={submitData}>upload img</button>
            </form>  
        </>
    )
}

export default Test
