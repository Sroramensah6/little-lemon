import React from 'react'

import Card from '../../card'
import Image from '../../image'

import { star } from '../../../assets'

function TestimonialCard ({ img_url, name, body, rating }) {
    return (
        <Card className={'testimonial-card'}>
            <section className='card-container'>
                <section className='card-rating'>
                    {rating &&
                    [...Array(rating)].map((_, index) => (
                        <Image key={index} src={star} alt="star" height={15} width={15} />
                    ))}
                </section>
                <section className='testimonial-card-body'>
                    <section className='testimonial-card-img'>
                        <Image alt={name} src={img_url} />
                    </section>
                    <section className='testimonial-card-author'>{name}</section>
                </section>
                <section className='card-review'>
                    <p>{body}</p>
                </section>
            </section>
        </Card>
    )
}

export default TestimonialCard
