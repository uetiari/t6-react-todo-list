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
                        <Form.Input className='postit__title' placeholder='Título' />
                        <textarea className='postit__text' placeholder='Digite o texto' name='text' />
                        <Form.Button className='postit__button-completed'> Concluído </Form.Button>
                    </Form>
                </div>
            )
        }
}


