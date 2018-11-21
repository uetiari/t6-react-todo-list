import React from 'react'
import './menu.css'
import { Link } from 'react-router-dom'
import { getUser } from '../../../infraestrutura/local-storage'

class Menu extends React.Component {
    constructor(props){
        super(props)
        this.state = { open : false }
    }

    componentDidMount(){
        this.user = getUser()
    }

    handleOpenOrClose = () => {
        this.setState({ open : !this.state.open })
    }

    handleLoginOrLogout = (e) => {
        e.preventDefault()
    }

    render (){
        console.log('hello render')
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
            <li>
                <a onClick={this.handleLoginOrLogout}>{ 
                    this.user ? 'Sair' : 'Login'
                }
                </a></li>
            </ul>
        </div>
        )
    }
}

export default Menu 