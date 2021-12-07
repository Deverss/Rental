import React,{useState} from 'react'
import { setPost } from '../Api/Post';
const AddPost = () => {
    const [form,setForm] = useState({title: "", type: "", description: "", people: "", area: "", Image1: "",Image2: "",Image3: "",Image4: "",price:'',electricPrice:'',waterPrice:'',internetPrice:'',vehiclePrice:'', address :'', });
    const [message,setMessage] = useState(null);

    const changeInput = (e) => {
        setForm({...form, [e.target.name] : e.target.value})
    }

    const changeImage = (event) =>{
        var file = event.target.files[0];
        setForm({...form, [event.target.name] : file});
    }
    const handleSubmit = async(event) =>{
        event.preventDefault();
        console.log(form)
        await setPost(form,setMessage);
    }
    return (
        <div>
            <form >
                <label htmlFor="">loại nhà (nhà trọ || căn hộ)</label><br />
                <input type="text" name='type' onChange={changeInput}/> <br />
                <label htmlFor="">title</label><br />
                <input type="text" name='title' onChange={changeInput}/> <br />
                <label htmlFor="">mô tả</label><br />
                <textarea name="description" id="" cols="30" rows="10" onChange={changeInput}></textarea><br />
                <label htmlFor="">số người</label><br />
                <input type="number" name='people' onChange={changeInput}/><br />
                <label htmlFor="">address</label><br />
                <input type="text" name='address' onChange={changeInput}/><br />
                <label htmlFor="">price</label><br />
                <input type="number" name='price' onChange={changeInput}/><br />
                <label htmlFor="">electricPrice</label><br />
                <input type="number" name='electricPrice' onChange={changeInput}/><br />
                <label htmlFor="">waterPrice</label><br />
                <input type="number" name='waterPrice' onChange={changeInput}/><br />
                <label htmlFor="">internetPrice</label><br />
                <input type="number" name='internetPrice' onChange={changeInput}/><br />
                <label htmlFor="">vehiclePrice</label><br />
                <input type="number" name='vehiclePrice' onChange={changeInput}/><br />
                <label htmlFor="">diện tích</label><br />
                <input type="number" name='area' onChange={changeInput}/><br />
                <label htmlFor="">Image</label><br />
                <input type="file" name="Image1" id="" onChange={(e)=>changeImage(e)}/><br />
                <input type="file" name="Image2" id="" onChange={(e)=>changeImage(e)}/><br />
                <input type="file" name="Image3" id="" onChange={(e)=>changeImage(e)}/><br />
                <input type="file" name="Image4" id="" onChange={(e)=>changeImage(e)}/><br />
                <input type="submit" value="submit" onClick={handleSubmit}/> <br />
                {(message)?message:''}
            </form>
        </div>
    )
}

export default AddPost
