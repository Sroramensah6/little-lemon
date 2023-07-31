import React from 'react'

function Button({ title, className, ...ButtonOptions }) {
    return <button className={`btn ${className}`} {...ButtonOptions}>{title}</button>
}

export default Button
