import Button from "./Button";
import Center from "../Center/Center";

export default {
    title: "Form/Button",
    component: Button,
    // tags: ['autodocs'],
    decorators: [
        story => <Center>{story()}</Center>
    ]
}

export const Primary = () => <Button variant='primary'>Primary</Button>

export const Secondary = () => <Button variant='secondary'>Secondary</Button>

export const Success = () => <Button variant='success'>Success</Button>

export const Danger = () => <Button variant='danger'>Danger</Button>

// const Template = args => <Button {...args}/>


// export const primaryA = Template.bind({})
// primaryA.args = {
//     variant: "primary",
//     children: "Primary Args"
// }

export const secondaryA = {
    args: {
        variant: "secondary",
        children: "Secondary Args"
    }
}

// export const primary = {
//     args: {
//         variant: "primary",
//         children: 'primary'
//     }
// }

// export const secondary = {
//     args: {
//         variant: "secondary",
//         children: 'secondary'
//     }
// }

// export const success = {
//     args: {
//         variant: "success",
//         children: 'Success'
//     }
// }

// export const danger = {
//     args: {
//         variant: "danger",
//         children: 'Danger'
//     }
// }