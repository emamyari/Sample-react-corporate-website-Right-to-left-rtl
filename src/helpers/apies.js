import axios from "axios";

export const Base_URL="http://192.168.1.120:8000/api/ui/"

export default axios.create(
    {
    baseURL:Base_URL,
    headers:{
            }
    }
);
