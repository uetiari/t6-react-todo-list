import React from 'react'
import './postit.css'
import Form from '../form'


class Postit extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            editing : false
        }
    }
        
        handlePostitClick = () => {
            this.setState({
                editing: true
            })
        }

        render(){
            return (
                <div className='postit' onClick={this.handlePostitClick}>
                    <Form>
                        {this.state.editing && (
                            <button className='postit__button-remove'>
                            x
                            </button>
                        )
                        }

                        <input type='text' className='postit__title' placeholder='Título' />
                        <textarea className='postit__text' placeholder='Digite o texto' name='text' />
                        <button className='postit__button-completed'> Concluído </button>
                    </Form>
                </div>
            )
        }
}

export default Postit