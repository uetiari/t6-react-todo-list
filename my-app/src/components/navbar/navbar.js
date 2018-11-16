import React from 'react'
import { Link } from 'react-router-dom'
import logo from './navbar__logo.png'
import './navbar.css'

const Navbar = () => (
    <nav className='navbar'>
        <Link to='/'>
            <img className='navbar__logo' src={logo} alt='Reprograma'></img>
        </Link>
    </nav>
)

export default Navbar