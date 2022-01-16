import React from 'react'
import BurgerIngredient from '../BurgerIngredient';
const Burger = () => {
    return(
        <div>
            <BurgerIngredient type="bread-top"/>
            <BurgerIngredient type="meat"/>
            <BurgerIngredient type="cheese"/>
            <BurgerIngredient type="salad"/>
            <BurgerIngredient type="meat"/>
            <BurgerIngredient type="bacon"/>
            <BurgerIngredient type="meat"/>
        </div>
    )
}
export default Burger;