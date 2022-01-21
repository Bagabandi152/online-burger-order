import React from 'react'
import BurgerIngredient from '../BurgerIngredient';
import css from './style.module.css'
const Burger = (props) => {
    let burgerContent = [];

    const burgerItems = Object.entries(props.ingredients);
    //console.log("----burgerItems: ", burgerItems);
    burgerItems.map((bi, idx) => {
        for(let i = 0; i < bi[1]; i++){
            burgerContent.push(<BurgerIngredient key={`${idx + 1}${i + 1}`} type={bi[0]}/>)
        }
    })

    if(burgerContent.length === 0){
        burgerContent = <p>Та өөрийн захиалах бургерийн орцыг сонгоно уу...</p>
    }

    return(
        <div className={css.Burger}>
            <BurgerIngredient type="bread-top"/>
                {burgerContent}
            <BurgerIngredient type="bread-bottom"/>
        </div>
    )
}
export default Burger;