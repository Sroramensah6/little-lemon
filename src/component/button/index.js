import React from 'react'
import "./btn.css"

function Button({ title, type, disabled, onClick, className, ...ButtonOptions }) {
    const handleClick = (e) => {
        if (type !== 'submit') e.preventDefault()
        if (onClick) onClick(e)
    };
    console.log('disabled', disabled);
    return (
        <button
            type={type}
            {...ButtonOptions}
            disabled={disabled}
            onClick={handleClick}
            className={`${disabled ? "btn_disabled" : "btn button"} ${className}`}
        >
            {title}
        </button>
    )
}

export default Button
