import React from 'react'
import css from './style.module.css'
import bacon from '../../assets/icons/bacon.png'
import cheese from '../../assets/icons/cheese.png'
import meat from '../../assets/icons/meat.png'
import salad from '../../assets/icons/salad.png'
import payPrice from '../../assets/icons/pay_price.png'

const Order = (props) => {
    const { data } = props
    return (
        <div className={css.Order}>
            <div className={css.Ingredients}>
                <div className={css.Ingredient}><img alt='baconIcon' src={bacon}/>{data.order.ingredients.bacon}</div>
                <div className={css.Ingredient}><img alt='cheeseIcon' src={cheese}/>{data.order.ingredients.cheese}</div>
                <div className={css.Ingredient}><img alt='meatIcon' src={meat}/>{data.order.ingredients.meat}</div>
                <div className={css.Ingredient}><img alt='saladIcon' src={salad}/>{data.order.ingredients.salad}</div>
            </div>
            <div><img alt='priceIcon' src={payPrice}/>{data.order.totalPrice}</div>
        </div>
    )
}

export default Order;