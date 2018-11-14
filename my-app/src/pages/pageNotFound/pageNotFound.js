import React from 'react'
import './pageNotFound.css'
import NotFoundImage from './NotFoundImage.jpg'

function pageNotFound(){
    return(
        <div className='page-not-found'> 
            <h1> Página não encontrada! XD </h1>
            <img src={NotFoundImage} />
        </div>
    )
}

export default pageNotFound
