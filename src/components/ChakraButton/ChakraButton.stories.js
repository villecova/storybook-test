import React from 'react';
import { Button } from '@chakra-ui/react'
import { action, actions } from '@storybook/addon-actions'

export default {
    title: 'Chakra/Button',
    component: Button,
    // tags: ['autodocs'],
    // argTypes: {
    //     onClick: { action: "clicked"}
    // }
}

// const Template = args => <Button {...args}/>

// export const Success = Template.bind({})
// Success.args = {
//     colorScheme: "green",
//     children: "Success",   
// }

export const chakraSuccess = () => <Button onClick={action('Click Handler')} colorScheme='red'>Button</Button>;

// export const Danger = Template.bind({})
// Danger.args = {
//     colorScheme: "orange",
//     children: "Danger"
// }

export const chakraDanger = () => <Button {...actions('onClick', 'onMouseOver')} colorScheme='orange'>Danger</Button>;

export const Log = () => (
    <Button colorScheme='green' onClick={() => console.log('Button Clicked')}>LOG</Button>
)