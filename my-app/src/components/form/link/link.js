import React from 'react'
import './link.css'
import { Link as LinkRouter } from 'react-router-dom'
function Link(props) {
    return (

        <LinkRouter id={props.id} className='link' to={props.href} target={props.target}>
            {props.children}
        </LinkRouter>
    )
}

export default Link 