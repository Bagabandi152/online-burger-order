import React from 'react'
import BuildControll from '../BuildControll'
import css from './style.module.css'

const BuildControlls = (props) =>{
    return(
        <div className={css.BuildControls}>
            <p>Бургерийн үнэ: <strong style={{color: 'red'}}>{props.price}₮</strong></p>
            <BuildControll addIngredient={props.addIngredient} removeIngredient={props.removeIngredient} disabledIngredients={props.disabledIngredients} type="salad" text="Салад"/>
            <BuildControll addIngredient={props.addIngredient} removeIngredient={props.removeIngredient} disabledIngredients={props.disabledIngredients} type="cheese" text="Бяслаг"/>
            <BuildControll addIngredient={props.addIngredient} removeIngredient={props.removeIngredient} disabledIngredients={props.disabledIngredients} type="bacon" text="Гахайн мах"/>
            <BuildControll addIngredient={props.addIngredient} removeIngredient={props.removeIngredient}  disabledIngredients={props.disabledIngredients} type="meat" text="Үхрийн мах"/>
        </div>
    )
}

export default BuildControlls;