import React from 'react'
import { storiesOf } from '@storybook/react'
import Alert from './alert'

storiesOf('Components/Form/Alert', module) 
    .add('default', () =>(
        <Alert>Teste</Alert>
    ))
