import React from 'react'
import './hero.css'
import { restaurant_food } from '../../assets'

function Hero() {
    return (
        <section id="hero" className='primary-background'>
            <main className="container">
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
                        <img className="hero-img" src={restaurant_food} alt="restaurant food" />
                    </section>
                </section>
                <section className="hero-btn-box">
                    <button className="btn">
                        Reserve a table
                    </button>
                </section>
            </main>
        </section>
    )
}

export default Hero
