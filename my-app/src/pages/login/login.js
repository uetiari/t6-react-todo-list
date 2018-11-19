import React from 'react';
import Form from '../../components/form'
import Container from '../../components/container'
import { setUser } from '../../infraestrutura/local-storage'
import { loginUser } from '../../apis/login.api'

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
        this.email = React.createRef()
        this.password = React.createRef()
    }

    onDisabledButton = () => {
        //currente tag do React; necessário quando usa createRef
        const inputEmail = this.email.current
        const inputPassword = this.password.current 

        //para saber se tem algum erro nos inputs para habilitar ou não o botão de enviar
        if(inputEmail.hasError() || inputPassword.hasError()){
            this.setState({ disabled : true })
        } else {
            this.setState({ disabled : false })
        }
    }

    handleSubmit = (e) => {
        e.preventDefault()

        const inputEmail = this.email.current
        const inputPassword = this.password.current 

        const user = {
            email : inputEmail.getValue(),
            password : inputPassword.getValue()
            }
 
        loginUser(user)
        .then((response) =>  {
            setUser({ email : user.email })
            this.props.history.push('/')
        })
        .catch((error) => {
            console.log(error)
        })

        setUser(user)
        this.props.history.push('/')
    }

    render() {
        return (
            <Container>
            <Form title='Login' text='Entre com seu Email e Senha'onSubmit={this.handleSubmit}>
                <Form.Label htmlFor='email'>Email</Form.Label>
                <Form.Input ref={this.email} id='email' type='email' placeholder='Email' onChange={this.onDisabledButton} required/>
                <Form.Label htmlFor='password'>Password</Form.Label>
                <Form.Input ref={this.password}id='password' type='password' placeholder='Password' minLength={6} onChange={this.onDisabledButton} required/>
                <Form.Button disabled={this.state.disabled}>Enviar</Form.Button>
                <Form.Link href='/conta'>Criar uma conta</Form.Link>     
            </Form>
        </Container>
        )
    }
}     
export default Login 