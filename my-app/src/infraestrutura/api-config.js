import axios from 'axios'


const config = {
    baseUrl : 'https://lehtodoapi.herokuapp.com/',
    timeout: 5000,
}

function api(){
    return axios.create(config)
}
 
export function startServer() {
    const url ='/ping'
    api().get(url)
}

startServer()
export default api