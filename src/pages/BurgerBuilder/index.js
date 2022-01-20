import react, { Component } from 'react';
import Burger from '../../component/Burger';
import BuildControlls from '../../component/BuildControlls';
class BurgerBuilder extends Component{

    state = {
        ingredients: {
            salad: 0,
            cheese: 0,
            bacon: 0,
            meat: 0
        }
    }

    addIngredient = (type) => {
        let newObj = {...this.state.ingredients};
        newObj[type]++;
        this.setState({ingredients: newObj}); 
    }

    removeIngredient = (type) => {
        let newObj = {...this.state.ingredients};
        if(newObj[type] > 0) newObj[type]--;
        this.setState({ingredients: newObj});
    }

    render(){
        return(
            <div>
                <Burger ingredients={this.state.ingredients}/>
                <BuildControlls addIngredient={this.addIngredient} removeIngredient={this.removeIngredient}/>
            </div>
        )
    }
}

export default BurgerBuilder;