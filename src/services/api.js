import axios from 'axios'

const Api = axios.create({
    baseURL: 'http://localhost:3030/api' 
})

export default Api