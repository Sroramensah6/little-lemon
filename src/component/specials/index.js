import React from 'react'

import './specials.css'
import FoodCard from '../food-card'
import { bruchetta, greek_salad, lemon_dessert } from '../../assets'

function Specials() {
    return (
        <section id="special" className='secondary-background'>
            <main className="container">
                <section className='special-header'>
                    <h1 className='special-title'>This weeks Specials</h1>
                    <button className="btn special-btn">On The Menu</button>
                </section>
                {/* <section className='special-card-section'> */}
                <section className='inner-wrapper-flex'>
                    <FoodCard
                        price={'$ 5.99'}
                        img_src={greek_salad}
                        title={'Greek salad'}
                        content={'We are a family owned Mediterranean restaurant, focused on traditional recipes'}
                    />
                    <FoodCard
                        price={'$ 5.99'}
                        img_src={lemon_dessert}
                        title={'Lemon dessert'}
                        content={'We are a family owned Mediterranean restaurant, focused on traditional recipes'}
                    />
                    <FoodCard
                        price={'$ 5.99'}
                        img_src={bruchetta}
                        title={'Bruchetta'}
                        content={'We are a family owned Mediterranean restaurant, focused on traditional recipes'}
                    />
                </section>
            </main>
        </section>
    )
}

export default Specials
