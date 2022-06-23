import React from 'react'
import FormatMnt from '../FormatMnt'
import css from './style.module.css'
import bacon from '../../assets/icons/bacon.png'
import cheese from '../../assets/icons/cheese.png'
import meat from '../../assets/icons/meat.png'
import salad from '../../assets/icons/salad.png'
import payPrice from '../../assets/icons/pay_price.png'
import burgerImg from '../../assets/images/burger-img.jpg'

const Order = (props) => {
    const { data } = props
    return (
        <div className={css.Order}>
            <img 
                alt='burgerImg'
                width={100}
                height={80} 
                src={burgerImg}
            />
            <div className={css.OrderCardBody}>
                <div className={css.PriceSection}><img alt='priceIcon' src={payPrice}/>&nbsp;Төлөх дүн: {FormatMnt(parseFloat(data.order.totalPrice))}</div>
                <div className={css.Ingredients}>
                    <div className={css.Ingredient}><img alt='baconIcon' src={bacon}/>&nbsp;{data.order.ingredients.bacon} ш</div>
                    <div className={css.Ingredient}><img alt='cheeseIcon' src={cheese}/>&nbsp;{data.order.ingredients.cheese} ш</div>
                    <div className={css.Ingredient}><img alt='meatIcon' src={meat}/>&nbsp;{data.order.ingredients.meat} ш</div>
                    <div className={css.Ingredient}><img alt='saladIcon' src={salad}/>&nbsp;{data.order.ingredients.salad} ш</div>
                </div>
            </div>
        </div>
    )
}

export default Order;