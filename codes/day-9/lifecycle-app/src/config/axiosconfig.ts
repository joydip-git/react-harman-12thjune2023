import axios from "axios";
import { BASE_URL } from "./constants";

const axiosInstance = axios.create({
    baseURL: BASE_URL,
    timeout: 5000,
    timeoutErrorMessage: 'Request timed out',
    headers: {
        "Content-Type": 'appliaction/json'
    }
})

export default axiosInstance