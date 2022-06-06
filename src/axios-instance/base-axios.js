import axios from "axios";

const instance = axios.create({
    baseURL: 'https://online-burger-b9e79-default-rtdb.asia-southeast1.firebasedatabase.app/'
})

export default instance;