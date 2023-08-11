import React from 'react'

function Card ({ className, children }) {
    return (
        <section className={`inner-card ${className}`}>
            {children}
        </section>
    )
}

export default Card
