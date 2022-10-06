import React from 'react';
import "./button.scss";

const Button = ({variant,label, ...others}) => {

    return (
        <button {...others} className={`button button__${variant === "outlined" ? "outlined" : "contained"}`}>
            {label}
        </button>
    )
}


export default Button;