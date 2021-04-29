import axios from 'axios'

const baseUrl = process.env.NODE_END === 'production' ? 'https://classroom-management-101.herokuapp.com' : 'http://localhost:3000'

const api = axios.create({
    baseURL: baseUrl
})

export default api