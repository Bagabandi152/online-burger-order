import React from 'react'
import css from './style.module.css'

const Order = (props) => {
    const { data } = props
    return (
        <div className={css.Order}>{data.order.totalPrice}</div>
    )
}

export default Order;