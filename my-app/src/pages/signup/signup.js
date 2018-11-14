import React from 'react';
import Form from '../../components/form'
import Container from '../../components/container'

// function Signup(){
//     return (
//     <Container>
//     <Form title='Cadastro' text='Preencha com seus dados'>
//         <Form.Label htmlFor='nome'>Nome</Form.Label>
//         <Form.Input id='nome' type='text' placeholder='Nome' />
//         <Form.Label htmlFor='email'>Email</Form.Label>
//         <Form.Input id='email' type='email' placeholder='Email' />
//         <Form.Label htmlFor='telefone'>Telefone</Form.Label>
//         <Form.Input id='telefone' type='tel' placeholder='(__) _____-______' />
//         <Form.Label htmlFor='password'>Password</Form.Label>
//         <Form.Input id='password' type='password' placeholder='Mínimo de 6 caracteres' />
//         <Form.Button disabled>Enviar</Form.Button>

//         <Form.Link href='#'>Faça Login</Form.Link>     
//     </Form>
//     </Container>
//     )
// }

class Signup extends React.Component {
    constructor(){
        super()
        this.state = { disabled : true }
        this.nome = React.createRef()
        this.email = React.createRef()
        this.telefone = React.createRef()
        this.password = React.createRef()

    }

    onDisabledButton = () => {
        const inputNome = this.nome.current
        const inputEmail = this.email.current
        const inputTelefone = this.telefone.current
        const inputPassword = this.password.current 

        if(inputNome.hasError() || inputEmail.hasError() || inputTelefone.hasError() || inputPassword.hasError()) {
            this.setState({ disabled : true })
        } else {
            this.setState({ disabled : false })
        }

    }


    render() {
        return (
        <Container>
            <Form title='Cadastro' text='Preencha com seus dados'>
                <Form.Label htmlFor='nome'>Nome</Form.Label>
                <Form.Input ref={this.nome} id='nome' type='text' placeholder='Nome' onChange={this.onDisabledButton} required/>
                <Form.Label htmlFor='email'>Email</Form.Label>
                <Form.Input  ref={this.email} id='email' type='email' placeholder='Email' onChange={this.onDisabledButton} required/>
                <Form.Label htmlFor='telefone'>Telefone</Form.Label>
                <Form.Input ref={this.telefone} id='telefone' type='tel' placeholder='(__) _____-______' onChange={this.onDisabledButton} minLength={10} />
                <Form.Label htmlFor='password'>Password</Form.Label>
                <Form.Input ref={this.password} id='password' type='password' placeholder='Mínimo de 6 caracteres' onChange={this.onDisabledButton} minLength={6} required/>
                <Form.Button disabled={this.state.disabled}>Enviar</Form.Button>
        
                <Form.Link href='#'>Faça Login</Form.Link>     
            </Form>
        </Container>
        )}
}


export default Signup 