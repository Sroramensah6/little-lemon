import React from 'react'
import Hero from '../hero'
import Specials from '../specials'
import Testimonial from '../testimonial'
import About from '../about'

function Main ({ children }) {
    return (
        <main>
            <Hero />
            <Specials />
            <Testimonial />
            <About />
        </main>
    )
}

export default Main
