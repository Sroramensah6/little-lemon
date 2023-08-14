import React from 'react'
import { useNavigate } from 'react-router-dom'

import './hero.css'

import Image from '../image'
import Button from '../button'
import Container from '../container'
import { restaurant_food } from '../../assets'

function Hero() {
    const navigate = useNavigate();
    return (
        <section id="hero" className='primary-background'>
            <Container>
                <header className="hero-header">
                    <h3 aria-label='Little Lemon'>Little Lemon</h3>
                    <h5 aria-label='Chicago'>Chicago</h5>
                </header>
                <section className='section-hero'>
                    <section className="hero-text-box">
                        <article className="hero-text">
                            <p aria-label='hero text'>
                                We are a family owned Mediterranean restaurant,
                                focused on traditional recipes served with a modern twist.
                            </p>
                        </article>
                    </section>
                    <section className="hero-img-box">
                        <Image aria-label='hero image' className="hero-img" src={restaurant_food} alt="restaurant food" />
                    </section>
                </section>
                <section className="hero-btn-box">
                    <Button onClick={() => navigate('/booking')} aria-label='Reserve a table' title={"Reserve a table"} />
                </section>
            </Container>
        </section>
    )
}

export default Hero
