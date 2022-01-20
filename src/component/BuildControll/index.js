import React from 'react'
import css from './style.module.css'

const BuildControll = (props) =>{
    
    return(
        <div className={css.BuildControl}>
            <div className={css.Label}>{props.text}</div>
            <button className={css.Less} onClick={() => props.removeIngredient(props.type)}>Хасах</button>
            <button className={css.More} onClick={() => props.addIngredient(props.type)}>Нэмэх</button>
        </div>
    )
}

export default BuildControll;