import React from 'react'

import Card from '../../card'
import Image from '../../image'

import { star } from '../../../assets'

function TestimonialCard ({ img_url, name, body }) {
    return (
        <Card>
            <section className='card-container'>
                <section className='card-rating'>
                    <Image src={star} alt="star" className='star' />
                    <Image src={star} alt="star" className='star' />
                    <Image src={star} alt="star" className='star' />
                    <Image src={star} alt="star" className='star' />
                    <Image src={star} alt="star" className='star' />
                </section>
                <section className='testimonial-card-body'>
                    <section className='testimonial-card-img'>
                        <Image alt={name} src={img_url} />
                    </section>
                    <section className='testimonial-card-name'>{name}</section>
                </section>
                <section className='card-review'>
                    <p>{body}</p>
                </section>
            </section>
        </Card>
    )
}

export default TestimonialCard
