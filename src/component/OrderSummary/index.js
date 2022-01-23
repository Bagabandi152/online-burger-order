import React from 'react'
import css from './style.module.css'
import FormatMnt from '../FormatMnt'

const OrderSummary = (props) => {
    return(
        <>
            <div className={css.ModalHeader}>
                <h3>Та өөрийг захиалгыг нягтална уу!</h3>
            </div>
            <div className={css.ModalBody}>
                <p><strong>Захилгын дэлгэрэнгүй мэдээлэл: </strong></p>
                <ul>
                    {Object.keys(props.ingredients).map((el) => (<li key={el}>{`${props.ingredientsName[el]}: ${props.ingredients[el]}, Үнэ: ${FormatMnt(props.ingredientsCost[el])}x${props.ingredients[el]}=${FormatMnt(props.ingredientsCost[el]*props.ingredients[el])}`}</li>))}
                </ul>
                <p><strong>Нийт үнэ:</strong>&nbsp;<span style={{color:'red'}}>{FormatMnt(props.totalPrice)}</span></p>
            </div>
            <div className={css.ModalFooter}>
                <button onClick={props.showModal}>Цааш үргэлжлүүлэх</button>
                <button onClick={props.showModal}>Хаах</button>
            </div>
        </>
    )
}

export default OrderSummary;