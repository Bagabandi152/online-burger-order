import React from 'react'
import css from './style.module.css'
import FormatMnt from '../FormatMnt'
import Button from '../General/Button'

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
                <Button onClick={props.showModal} btnType='Success'>Цааш үргэлжлүүлэх</Button>
                <Button onClick={props.showModal} btnType='Danger'>Хаах</Button>
            </div>
        </>
    )
}

export default OrderSummary;