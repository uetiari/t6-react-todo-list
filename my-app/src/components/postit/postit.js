import React from 'react'
import Form from '../form'


class Postit extends React.Component {
    constructor(props){
        super(props)
        }
        
        render(){
            return (
                <div className='postit'>
                    <Form>
                        <input type='text' className='postit__title' placeholder='Título' />
                        <textarea className='postit__text' placeholder='Digite o texto' name='text' />
                        <button className='postit__button-completed'> Concluído </button>
                    </Form>
                </div>
            )
        }
}


