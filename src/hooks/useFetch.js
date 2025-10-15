import { useState, useEffect } from "react";
import axios from "../api/axiosConfig";


const useFetch = (url) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);


    useEffect(() => {
        axios.get(url).then((response) => {
            setData(response.data);
        }).catch(console.error).finally(()=>{
            setLoading(false);
        })
    },[url]);
    return {data, loading}
}


export default useFetch;