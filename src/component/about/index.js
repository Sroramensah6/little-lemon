import React from 'react'

import './about.css'

import Image from '../image'
import Container from '../container'

import { chef, restaurant } from '../../assets'

function About() {
    return (
        <section id="about" className='primary-background'>
            <Container className="about-section">
                <div className="about-text-box">
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
                </div>
                <div className="about-img-box">
                    <Image className="about-img img-one" src={chef} alt="chef" />
                    <Image className="about-img img-two" src={restaurant} alt="restaurant" />
                </div>
            </Container>
        </section>
    )
}

export default About
