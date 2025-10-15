import axios from "../api/axiosConfig";


export const registerUser = async(data)=>{
    const response = await axios.post("/user/register",data);
    return response.data;
}


export const login = async(data)=>{
    const response = await axios.post("/user/login",data);
    return response.data;
}