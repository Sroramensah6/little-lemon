import React from 'react'

function Container ({ id, className, children }) {
    return <main id={id} className={`container ${className}`}>{children}</main>
}

export default Container
