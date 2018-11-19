import axios from 'axios'


const config = {
    baseURL : 'https://lehtodoapi.herokuapp.com/',
    timeout: 5000,
}

function api(){
    config.headers = {
        user: ''
    }
    return axios.create(config)
}
 
export function startServer() {
    const url ='/ping'
    return api().get(url)
}

export default api