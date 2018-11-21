import React from 'react'
import { getUser } from '../../infraestrutura/local-storage'
import { Redirect } from 'react-router-dom'
import Postit from '../../components/postit';
import { getPostitsApi} from '../../apis/postit.api'

class Home extends React.Component {
    constructor(){
        super ()
        this.state = {
            postits : []
        }
    }
    componentDidMount () {
        this.getPostits()
    }
    componentWillUnmout() {
    console.log('Hello componentWillUnmout morreu :(')
    }

    getPostits = () => {
        getPostitsApi()
        .then((response) => {
            this.setState({
                postits : response.data.todo
            })
        })
        .catch((error) => {
console.log(error)
        })
    }

    render(){
        if(getUser()){
            return this.state.postits.map((item) => {
                   return <Postit />
                })
        }else {
            return <Redirect to='/login' />
        }
    }
}
export default Home