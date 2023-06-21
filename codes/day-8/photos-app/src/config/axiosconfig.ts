import axios, { AxiosInstance } from "axios";

const axiosInstance: AxiosInstance = axios.create({
    baseURL: 'http://localhost:4000/photos/',
    timeout: 5000,
    timeoutErrorMessage: 'Request timed out...try later',
    headers: {
        "Content-Type": "application/json"
    }
});

export default axiosInstance