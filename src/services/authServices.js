import axios from "../api/axiosConfig";


export const _registerUser = async(data)=>{
    const response = await axios.post("/user/register",data);
    return response.data;
}


export const _login = async(data)=>{
    const response = await axios.post("/user/login",data);
    return response.data;
}