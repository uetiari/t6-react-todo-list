import api from '../infraestrutura/api-config'

export function loginUser(user){
    const url = '/users/login'

    const data = {
        login : user.email,
        password : user.password,
    }

    return api().post(url,data)
}