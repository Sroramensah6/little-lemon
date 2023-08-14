import React from 'react'

function Container ({ id, className, children }) {
    className = className || ''
    return <section id={id} className={`${className} container`}>{children}</section>
}

export default Container
