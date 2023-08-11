import React from 'react'
import './food-card.css'

import Card from '../../card'
import Image from '../../image'

import { delivery } from '../../../assets'

function FoodCard({ title, price, content, img_src }) {
    return (
        <Card className={'food-card'}>
            <section className="food-card-image">
                {img_src ? (<Image src={img_src} alt="food" height={200} />) : null}
            </section>
            <section className="food-card-body">
                <div className="food-card-body-header">
                    <div className="food-card-body-title-header">
                        {title ? <p className="food-card-title">{title}</p>: null}
                        {price ?    <p className="food-card-price">{price}</p>: null}
                    </div>
                    <p className="food-card-description">{content}</p>
                </div>
                <div className="food-card-delivery">
                    <p className="food-card-delivery-title">Order a delivery</p>
                    <img src={delivery} alt="uber eats"></img>
                </div>
            </section>
        </Card>
    )
}

export default FoodCard
