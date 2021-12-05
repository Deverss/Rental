import React,{useState} from 'react'
import { setPost } from '../Api/Post';
const AddPost = () => {
    const [form,setForm] = useState({title: "", type: "", description: "", people: "", area: "", Image: "", });
    const [message,setMessage] = useState(null);

    const changeInput = (e) => {
        setForm({...form, [e.target.name] : e.target.value})
    }

    const changeImage = (event) =>{
        var file = event.target.files[0];
        setForm({...form, ["Image"] : file});
    }
    const handleSubmit = async(event) =>{
        event.preventDefault();
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
                <label htmlFor="">diện tích</label><br />
                <input type="number" name='area' onChange={changeInput}/><br />
                <label htmlFor="">Image</label><br />
                <input type="file" name="Image" id="" onChange={(e)=>changeImage(e)}/><br />
                <input type="submit" value="submit" onClick={handleSubmit}/> <br />
                {(message)?message:''}
            </form>
        </div>
    )
}

export default AddPost
