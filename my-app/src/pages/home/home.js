import React from 'react'
import { getUser } from '../../infraestrutura/local-storage'
import { Redirect } from 'react-router-dom'

class Home extends React.Component {
    constructor(){
        super ()
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