import React from "react";
import './Button.scss'

function Button(props) {
    const { variant = 'primary', children, ...rest} = props 
    return (
        <button 
            className={`button button__${variant}`} {...rest}>
            {children} 
        </button>
    )
    
}

export default Button

