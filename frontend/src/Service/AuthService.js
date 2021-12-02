import { Credential } from "../Model/Credential";
import { BASE_URL } from '../Api/Common'
import axios from 'axios'

export async function doUserLogin(Credential) {
    try {
        const response = await axios.post(`${BASE_URL}login`, Credential);
        return response;
    } catch (err) { 
        return err.response;
     };
}