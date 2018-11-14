import React from 'react'
import { storiesOf } from '@storybook/react'
import Label from './label'

storiesOf('Components/Form/Label', module) 
    .add('default', () =>(
        <Label type='text'>Teste</Label>
    ))
