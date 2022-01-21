import react, { Component } from 'react';
import Burger from '../../component/Burger';
import BuildControlls from '../../component/BuildControlls';

const INGREDIENTS_COSTS = {salad: 250, cheese: 500, bacon: 800, meat: 1500}; 

class BurgerBuilder extends Component{
    state = {
        ingredients: {
            salad: 0,
            cheese: 0,
            bacon: 0,
            meat: 0
        },
        totalPrice: 0
    }

    addIngredient = (type) => {
        let newObj = {...this.state.ingredients};
        newObj[type]++;
        let newTotalPrice = this.state.totalPrice + INGREDIENTS_COSTS[type]
        this.setState({totalPrice: newTotalPrice, ingredients: newObj}); 
    }

    removeIngredient = (type) => {
        let newObj = {...this.state.ingredients};
        if(newObj[type] > 0){
            newObj[type]--;
            let newTotalPrice = this.state.totalPrice - INGREDIENTS_COSTS[type]
            this.setState({totalPrice: newTotalPrice, ingredients: newObj})
        };
    }

    render(){
        const disabledIngredients = {...this.state.ingredients};
        for(let key in disabledIngredients){
            disabledIngredients[key] = disabledIngredients[key] <= 0;
            //console.log(key + "----> "+ disabledIngredients[key])
        }
        return(
            <div>
                <Burger ingredients={this.state.ingredients}/>
                <BuildControlls price={this.state.totalPrice} disabledIngredients={disabledIngredients} addIngredient={this.addIngredient} removeIngredient={this.removeIngredient}/>
            </div>
        )
    }
}

export default BurgerBuilder;