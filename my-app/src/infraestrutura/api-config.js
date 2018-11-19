import axios from 'axios'


const config = {
    baseURL : 'https://lehtodoapi.herokuapp.com/',
    timeout: 5000,
}

function api(){
    return axios.create(config)
}
 
export function startServer() {
    const url ='/ping'
    api().get(url)
}

export default api