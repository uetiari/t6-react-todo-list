import React from 'react'
import './postit.css'
import Form from '../form'


class Postit extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            id: 0,
            title: '',
            text: '',
            editing: false
        }
    }

    handlePostitClick = () => {
        this.setState({
            editing: true
        })
    }

    handlePostitRemove = () => {
        console.log('handlePostitRemove =D')
    }

    handlePostitSubmit = (e) => {
        e.preventDefault()

        const postit = {
            title: this.state.title,
            text: this.state.text
        }
    }

    setTitle = (e) => {
        const inputTitle = e.target.value
        this.setState({
            title: inputTitle
        }
        )
    }

    setText = (e) => {
        const inputText = e.target.value
        this.setState({
            text: inputText
        }
        )
    }


        render() {
            return (
                <div className='postit' onClick={this.handlePostitClick}>
                    <Form onSubmit={this.handlePostitSubmit}>
                        {this.state.editing && (
                            <button onClick={this.handlePostitRemove} className='postit__button-remove'>
                                x
                            </button>
                        )}

                        <input
                            type='text'
                            className='postit__title'
                            placeholder='Título'
                            value={this.state.title}
                            onChange={this.setTitle}
                        />

                        <textarea
                            className='postit__text'
                            placeholder='Digite o texto'
                            name='text'
                            value={this.state.text}
                            onChange={this.setText}
                        />

                        {this.state.editing && (
                            <button className='postit__button-completed'> Concluído </button>
                        )
                        }
                    </Form>
                </div>
            )
        }
}

    export default Postit