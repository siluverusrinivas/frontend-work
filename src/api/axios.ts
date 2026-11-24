import axios from 'axios'

const api=axios.create({
    baseURL:'/api/accounts/',
    headers:{
        'Content-Type':'application/json'
    }
})


export default api;