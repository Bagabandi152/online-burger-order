import react, { Component } from "react";
import Burger from "../../component/Burger";
import BuildControlls from "../../component/BuildControlls";
import Modal from "../../component/General/Modal";
import OrderSummary from "../../component/OrderSummary";

const INGREDIENTS_COSTS = { salad: 250, cheese: 500, bacon: 800, meat: 1500 };
const INGREDIENTS_NAME = {
  salad: "Салад",
  cheese: "Бяслаг",
  bacon: "Гахайн мах",
  meat: "Үхрийн мах",
};

class BurgerBuilder extends Component {
  state = {
    ingredients: {
      salad: 0,
      cheese: 0,
      bacon: 0,
      meat: 0,
    },
    totalPrice: 0,
    purchasing: false,
    ordering: false,
  };

  addIngredient = (type) => {
    let newObj = { ...this.state.ingredients };
    newObj[type]++;
    let newTotalPrice = this.state.totalPrice + INGREDIENTS_COSTS[type];
    this.setState({
      purchasing: true,
      totalPrice: newTotalPrice,
      ingredients: newObj,
    });
  };

  removeIngredient = (type) => {
    let newObj = { ...this.state.ingredients };
    if (newObj[type] > 0) {
      newObj[type]--;
      let newTotalPrice = this.state.totalPrice - INGREDIENTS_COSTS[type];
      this.setState({
        purchasing: newTotalPrice > 10,
        totalPrice: newTotalPrice,
        ingredients: newObj,
      });
    }
  };

  render() {
    const disabledIngredients = { ...this.state.ingredients };
    for (let key in disabledIngredients) {
      disabledIngredients[key] = disabledIngredients[key] <= 0;
    }
    return (
      <div>
        <Burger ingredients={this.state.ingredients} />
        <BuildControlls
          ingredientNames={INGREDIENTS_NAME}
          orderBurger={() => this.setState({ ordering: true })}
          disabled={!this.state.purchasing}
          price={this.state.totalPrice}
          disabledIngredients={disabledIngredients}
          addIngredient={this.addIngredient}
          removeIngredient={this.removeIngredient}
        />
        {this.state.ordering && (
          <Modal>
            <OrderSummary
              ingredients={this.state.ingredients}
              ingredientsName={INGREDIENTS_NAME}
              ingredientsCost={INGREDIENTS_COSTS}
              totalPrice={this.state.totalPrice}
              showModal={() => this.setState({ ordering: false })}
            />
          </Modal>
        )}
      </div>
    );
  }
}

export default BurgerBuilder;
