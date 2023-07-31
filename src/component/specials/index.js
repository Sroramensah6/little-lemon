import React from 'react'

import './specials.css'

import Button from '../button'
import FoodCard from './food-card'
import Container from '../container'

import { food_data } from '../../data'

function Specials() {
    return (
        <section id="special" className='secondary-background'>
            <Container>
                <section className='special-header'>
                    <h1 className='special-title'>This weeks Specials</h1>
                    <Button className="special-btn" title={"On The Menu"} />
                </section>
                <section className='inner-wrapper-flex'>
                    {food_data.map((food) => (
                        <FoodCard
                            key={food.id}
                            price={food.price}
                            img_src={food.image}
                            title={food.title}
                            content={food.description}
                        />
                    ))}
                </section>
            </Container>
        </section>
    )
}

export default Specials
