import React,{useState} from 'react'
import { setBlog } from '../Api/Blog';
const AddBlog = () => {
    const [form,setForm] = useState({title: "", description: "", Image: "", content:""});
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
        await setBlog(form,setMessage);
        console.log(message);
    }
    
    return (
        <div>

            <form >
                <label htmlFor="">title</label><br />
                <input type="text" name='title' onChange={changeInput}/> <br />
                <label htmlFor="">mô tả</label><br />
                <input type="text" name='description' onChange={changeInput}/><br />
                <label htmlFor="">content</label><br />
                <textarea name="content" id="" cols="30" rows="10" onChange={changeInput}></textarea><br />
                <label htmlFor="">Image</label><br />
                <input type="file" name="image" id="" onChange={(e)=>changeImage(e)}/><br />
                <input type="submit" value="submit" onClick={handleSubmit} /><br />
                {(message)?message:''}
            </form>
        </div>
    )
}

export default AddBlog
