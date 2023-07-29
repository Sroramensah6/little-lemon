import React from 'react'
import Card from '../card'
import { star } from '../../assets'

function TestimonialCard() {
    return (
        <Card>
            <section className='card-container'>
                <section className='card-rating'>
                    <img src={star} alt="star" className='star' />
                    <img src={star} alt="star" className='star' />
                    <img src={star} alt="star" className='star' />
                    <img src={star} alt="star" className='star' />
                    <img src={star} alt="star" className='star' />
                </section>
                <section className='testimonial-card-body'>
                    <section className='testimonial-card-img'>
                        <img
                            alt="img"
                            src="https://prayagtandon.github.io/Omnifood-Project/Hero-section/img/customers/customer-1.jpg"
                        />
                    </section>
                    <section className='testimonial-card-name'>Jane Doe</section>
                </section>
                <section className='card-review'>
                    <p>We are a family owned Mediterranean restaurant, focused on traditional recipes</p>
                </section>
            </section>
        </Card>
    )
}

export default TestimonialCard
