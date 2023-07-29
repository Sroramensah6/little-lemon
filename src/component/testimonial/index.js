import React from 'react'
import './testimonial.css'
import TestimonialCard from '../testimonial-card'

function Testimonial() {
    return (
        <section id="testimonial" className='secondary-background2'>
            <main className="container testimonial-container">
                <section className='testimonial-header'>
                    <h1 className='testimonial-title'>Testimonials</h1>
                </section>
                <section className='testimonial-card-section'>
                    <TestimonialCard />
                    <TestimonialCard />
                    <TestimonialCard />
                    <TestimonialCard />
                </section>
            </main>
        </section>
    )
}

export default Testimonial
