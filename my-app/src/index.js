import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Form from './components/form/form';

import * as serviceWorker from './serviceWorker';

const component=<Form title='Login' text='Entre com seu Email e Senha'>
    <Form.Label htmlFor='email'>Email</Form.Label>
    <Form.Input id='email' type='text'/>
    <Form.Button disabled>Enviar</Form.Button>
    <Form.Link href='https://www.google.com'>Criar uma conta</Form.Link>
            
    </Form>
ReactDOM.render(component, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
