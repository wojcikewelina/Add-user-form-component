import React from 'react';
import "./Button.css";


const Button = (props) => {
    return <button
        className={`buttonType ${props.className}`}
        type={props.type || "button"}
        onClick={props.onClick}
    >{props.children}
    </button>
};

export default Button;