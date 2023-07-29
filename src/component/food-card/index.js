import React from 'react'
import Card from '../card'

function FoodCard({ title, price, content, img_src }) {
    return (
        <Card className={'food-card'}>
            {img_src ? (
                <div className='img-wrapper'>
                    <img src={img_src} className='card-img' alt="food" />
                </div>
            ) : null}
            <div>
                <header className='card-header'>
                    {title ? <h3>{title}</h3>: null}
                    {price ? <h5>{price}</h5> : null}
                </header>
                {content ? (
                    <article className='card-body'>
                        <p>{content}</p>
                    </article>
                ) : null}
            </div>
        </Card>
    )
}

export default FoodCard
