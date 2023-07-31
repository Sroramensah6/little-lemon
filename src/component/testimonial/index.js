import React from 'react'

import './testimonial.css'

import Container from '../container'
import TestimonialCard from './testimonial-card'
import { testimonial_data } from '../../data'

function Testimonial() {
    return (
        <section id="testimonial" className='secondary-background2'>
            <Container className="testimonial-container">
                <section className='testimonial-header'>
                    <h1 className='testimonial-title'>Testimonials</h1>
                </section>
                <section className='testimonial-card-section'>
                    {testimonial_data.map((item) => (
                        <TestimonialCard
                            key={item.id}
                            name={item.name}
                            img_url={item.img}
                            body={item.testimony}
                        />
                    ))}
                </section>
            </Container>
        </section>
    )
}

export default Testimonial
