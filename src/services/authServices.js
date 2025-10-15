import axios from "../api/axiosConfig";

export const _register = async(data) => {
    try {
        const response = await axios.post("/user/register", data);
        return response.data;
    } catch (error) {
        throw error.response?.data || { success: false, message: 'Registration failed' };
    }
}

export const _login = async(data) => {
    try {
        const response = await axios.post("/user/login", data);
        return response.data;
    } catch (error) {
        throw error.response?.data || { success: false, message: 'Login failed' };
    }
}