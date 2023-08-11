import React from 'react'
import './hero.css'

import Image from '../image'
import Button from '../button'
import Container from '../container'
import { restaurant_food } from '../../assets'
import { Link } from 'react-router-dom'

function Hero() {
    return (
        <section id="hero" className='primary-background'>
            <Container>
                <header className="hero-header">
                    <h3>Little Lemon</h3>
                    <h5>Chicago</h5>
                </header>
                <section className='section-hero'>
                    <section className="hero-text-box">
                        <article className="hero-text">
                            <p>
                                We are a family owned Mediterranean restaurant,
                                focused on traditional recipes served with a modern twist.
                            </p>
                        </article>
                    </section>
                    <section className="hero-img-box">
                        <Image className="hero-img" src={restaurant_food} alt="restaurant food" />
                    </section>
                </section>
                <section className="hero-btn-box">
                    <Link to='/booking' className='link'>
                        <Button title={"Reserve a table"} />
                    </Link>
                </section>
            </Container>
        </section>
    )
}

export default Hero
