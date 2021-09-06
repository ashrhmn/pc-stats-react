import axios from "axios";

const instance = axios.create({
    baseURL: 'http://192.168.187.18:5000/'
})

export default instance