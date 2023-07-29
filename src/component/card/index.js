import React from 'react'

function Card ({ className, children }) {
    return (
        <section className={`card ${className}`}>
            <div class="inner-card">
                {children}
            </div>
        </section>
    )
}

export default Card
