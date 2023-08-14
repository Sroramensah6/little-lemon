import React from 'react'
import "./btn.css"

function Button({ title, type, onClick, className, ...ButtonOptions }) {
    const handleClick = (e) => {
        if (type !== 'submit') e.preventDefault()
        if (onClick) onClick(e)
    };

    return (
        <button
            type={type}
            {...ButtonOptions}
            onClick={handleClick}
            className={`btn button ${className}`}
        >
            {title}
        </button>
    )
}

export default Button
