import api from '../infraestrutura/api-config'

export function SignupUser(user) {
    const url = './users'

    return api().post(url,user)
    
}
