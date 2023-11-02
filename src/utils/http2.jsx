import axios from "axios"

const Token = sessionStorage.getItem("TokenRegister") ? sessionStorage.getItem("TokenRegister") : undefined

const http2 = axios.create({
    baseURL: process.env.REACT_APP_SERVER,
    timeout: 30000,
    headers: {
        Accept: "application/json",
        Authorization: `Bearer ${Token}`
    }
})
export default http2