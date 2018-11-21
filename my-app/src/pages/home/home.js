import React from 'react'
import { getUser } from '../../infraestrutura/local-storage'
import { Redirect } from 'react-router-dom'
import Postit from '../../components/postit';

class Home extends React.Component {
    constructor(){
        super ()
    }

    // componentDidMount () {
    //     console.log('Hello ConponentDidMount foi criado :)')
    // }
    // componentWillUnmout() {
    //     console.log('Heloo componentWillUnmout morreu :(')
    // }

    render(){
        if(getUser()){
            return <Postit />
        }else {
            return <Redirect to='/login' />
        }
    }
}
export default Home