import React from 'react'
import Form from '../form'
import './postit.css'

class Postit extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            editing : false
        }
    }
        
        this.handlePostitClick = () => {
            this.setState({
                editing: true
            })
        }

        render(){
            return (
                <div className='postit' onClick={this.handlePostitClick}>
                    <form>
                        <input type='text' className='postit__title' placeholder='Título' />
                        <textarea className='postit__text' placeholder='Digite o texto' name='text' />
                        <button className='postit__button-completed'> Concluído </button>
                    </form>
                </div>
            )
        }
}

export default Postit