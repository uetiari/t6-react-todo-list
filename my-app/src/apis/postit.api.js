import api from '../infraestrutura/api-config'

export function createPostit(postit){
    const url = '/todo'

    const data = {
        title : postit.title,
        desc : postit.text,
    }

    return api().post(url, data)
}
