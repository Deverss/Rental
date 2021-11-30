import React,{useState} from 'react'
import {doUserLogin} from './Service/AuthService'
import Cookies from 'js-cookie';
const Test = () => {
    const [username,setUsername] = useState(null);
    const [password,setPassword] = useState(null);
    console.log(Cookies.get('token'))
    async function handleFormSubmit(event){
        event.preventDefault();
        const postData = {
            email : username,
            password : password,
        }
        const response = await doUserLogin(postData)
        console.log(response.token);
    }
    
    return (
        <div>
            <form onSubmit={handleFormSubmit}>
                <label htmlFor="username">username</label>
                <input type="text" name="username" onChange={(event)=>{setUsername(event.target.value)}} />
                <label htmlFor="password">password</label>
                <input type="password" name="password" onChange={(event)=>{setPassword(event.target.value)}} />
                <input type="submit" value="submit" />
            </form>
        </div>
    )
}

export default Test
