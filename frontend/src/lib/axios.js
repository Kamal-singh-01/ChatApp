import axios from "axios"

export const axiosInstance = axios.create({
    baseURL:"https://chatapp-yrso.onrender.com/"
    withCredentials: true,
})
