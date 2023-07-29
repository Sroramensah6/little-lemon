import React from 'react'
import './about.css'
import { chef, restaurant } from '../../assets'

function About() {
    return (
        <section id="about" className='primary-background'>
            <main className="container about-section">
                <aside className="about-text-box">
                    <header className="about-header">
                        <h3>Little Lemon</h3>
                        <h5>Chicago</h5>
                    </header>
                    <article className="about-text">
                        <p>
                            We are a family owned Mediterranean restaurant,
                            focused on traditional recipes served with a modern twist.
                            We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.We are a family owned
                        </p>
                    </article>
                </aside>
                <aside className="about-img-box">
                    <img  className="about-img img-one" src={chef} alt="chef" />
                    <img  className="about-img img-two" src={restaurant} alt="restaurant" />
                </aside>
            </main>
        </section>
    )
}

export default About
