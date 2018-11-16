import React from 'react'
import './menu.css'
import { Link } from 'react-router-dom'

class Menu extends React.Component {
    constructor(){
        super()

    }
    render (){
        return (
        <div>
            <ul>
            <li><Link to='/quem-somos'>Quem Somos</Link></li>
            <li><Link to='/contato'>Contato</Link></li>
            <li><Link to='/login'>Login</Link></li>
            </ul>
        </div>
        )
    }
}

export default Menu 