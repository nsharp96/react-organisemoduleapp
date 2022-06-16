import React from 'react';
import './Button.css';

const Button = (props) => {
    //Properties
    //Context
    //Hooks
    //Methods
    //View
    return (
        <button className={props.className} type={props.type} onClick={props.onClick}>
            <i class={props.icon}></i>
            <span className='buttonText'>{props.text}</span>
        </button>
        
    )
}

export default Button;