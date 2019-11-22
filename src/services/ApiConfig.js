import Axios from 'axios'


const BASE_URL = `https://5dd2c3316625890014a6e05e.mockapi.io/`

export const api = Axios.create({
    baseURL: BASE_URL, 
})