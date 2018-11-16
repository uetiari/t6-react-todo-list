import React from 'react'
import { storiesOf } from '@storybook/react'
import Button from './button'

storiesOf('Components/Form/Button', module) 
    .add('default', () =>(
        <Button>Children Here</Button>
    ))
    .add('with disabled', () => (
        <Button disabled> Children Here</Button>
    ))
