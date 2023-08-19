import React from "react";
import './Input.scss'

function Input(props) {
    const { variant = 'small', children, ...rest} = props 
    return (
        <label >
            <input type="text" className={`input input__${variant}`} {...rest}/>
        </label>
    )
    
}

export default Input