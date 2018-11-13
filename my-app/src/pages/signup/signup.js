import React from 'react';
import Form from '../../components/form'
import Container from '../../components/container'

function Signup(){
    return (
    <Container>
    <Form title='Cadastro' text='Preencha com seus dados'>
        <Form.Label htmlFor='nome'>Nome</Form.Label>
        <Form.Input id='nome' type='text' placeholder='Nome' />
        <Form.Label htmlFor='email'>Email</Form.Label>
        <Form.Input id='email' type='email' placeholder='Email' />
        <Form.Label htmlFor='telefone'>Telefone</Form.Label>
        <Form.Input id='telefone' type='tel' placeholder='(__) _____-______' />
        <Form.Label htmlFor='password'>Password</Form.Label>
        <Form.Input id='password' type='password' placeholder='Mínimo de 6 caracteres' />
        <Form.Button disabled>Enviar</Form.Button>

        <Form.Link href='#'>Faça Login</Form.Link>     
    </Form>
    </Container>
    )
}

export default Signup 