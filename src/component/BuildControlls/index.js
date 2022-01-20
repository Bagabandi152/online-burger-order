import React from 'react'
import BuildControll from '../BuildControll'
import css from './style.module.css'

const BuildControlls = (props) =>{
    return(
        <div className={css.BuildControls}>
            <BuildControll addIngredient={props.addIngredient} removeIngredient={props.removeIngredient} type="salad" text="Салад"/>
            <BuildControll addIngredient={props.addIngredient} removeIngredient={props.removeIngredient} type="cheese" text="Бяслаг"/>
            <BuildControll addIngredient={props.addIngredient} removeIngredient={props.removeIngredient} type="bacon" text="Гахайн мах"/>
            <BuildControll addIngredient={props.addIngredient} removeIngredient={props.removeIngredient} type="meat" text="Үхрийн мах"/>
        </div>
    )
}

export default BuildControlls;