import React from 'react';
import Form from '../../components/form'
import Container from '../../components/container'

// function Login(){
//     return (
//     <Container>
//         <Form title='Login' text='Entre com seu Email e Senha'>
//             <Form.Label htmlFor='email'>Email</Form.Label>
//             <Form.Input id='email' type='email' placeholder='Email' required/>
//             <Form.Label htmlFor='password'>Password</Form.Label>
//             <Form.Input id='password' type='password' placeholder='Password' minLength={6} required/>
//             <Form.Button disabled>Enviar</Form.Button>
//             <Form.Link href='#'>Criar uma conta</Form.Link>     
//         </Form>
//     </Container>
//     )
// }

class Login extends React.Component {
    constructor(){
        super()
        this.state = { disabled : true }
    }

    onDisabledButton = () => {
        console.log ('Eita!')
    }

    render() {
        return (
            <Container>
            <Form title='Login' text='Entre com seu Email e Senha'>
                <Form.Label htmlFor='email'>Email</Form.Label>
                <Form.Input id='email' type='email' placeholder='Email' onChange={this.onDisabledButton} required/>
                <Form.Label htmlFor='password'>Password</Form.Label>
                <Form.Input id='password' type='password' placeholder='Password' minLength={6} onChange={this.onDisabledButton} required/>
                <Form.Button disabled={this.state.disabled}>Enviar</Form.Button>
                <Form.Link href='#'>Criar uma conta</Form.Link>     
            </Form>
        </Container>
        )
    }
}     
export default Login 