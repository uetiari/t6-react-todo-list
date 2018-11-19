import React from 'react'
import { getUser } from '../../infraestrutura/local-storage'
import { Redirect } from 'react-router-dom'

class Home extends React.Component {
    constructor(){
        super ()
    }
    
    componentDidMount () {
        console.log('Hello ConponentDidMount foi criado :)')
    }
    componentWillUnmout() {
        console.log('Heloo componentWillUnmout morreu :(')
    }

    render(){
        if(getUser()){
            return <div> Hello!</div>
        }else {
            return <Redirect to='/login' />
        }
    }
}
export default Home