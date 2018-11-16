import React from 'react'
import './menu.css'
import { Link } from 'react-router-dom'


class Menu extends React.Component {
    constructor(){
        super()
        this.state = { open : false }

    }
    handleOpenOrClose = () => {
        this.setState({ open : !this.state.open })
    }

    render (){
        let classesOfButton = 'menu__button'
        let classesOfOption = 'menu__options'
        if(this.state.open) {
            classesOfButton += ' menu__button--open'
            classesOfOption += ' menu__options--open'
        }
        return (
        <div>
            <a className={classesOfButton} onClick={this.handleOpenOrClose} >
                Menu
            </a>
            <ul className={classesOfOption} onClick={this.handleOpenOrClose}>
            <li><Link to='/quem-somos'>Quem Somos</Link></li>
            <li><Link to='/contato'>Contato</Link></li>
            <li><Link to='/login'>Login</Link></li>
            </ul>
        </div>
        )
    }
}

export default Menu 