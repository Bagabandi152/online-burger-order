import react, { Component } from "react";
import Burger from "../../component/Burger";
import BuildControlls from "../../component/BuildControlls";
import Modal from "../../component/General/Modal";

const INGREDIENTS_COSTS = { salad: 250, cheese: 500, bacon: 800, meat: 1500 };

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
          orderBurger={() => this.setState({ ...this.state, ordering: true })}
          disabled={!this.state.purchasing}
          price={this.state.totalPrice}
          disabledIngredients={disabledIngredients}
          addIngredient={this.addIngredient}
          removeIngredient={this.removeIngredient}
        />
        {this.state.ordering && (
          <Modal>
            <h3>Та өөрийг захиалгыг нягтална уу!</h3>
            <h4>Таны захилгын дэлгэрэнгүй мэдээлэл: </h4>
            <p>Салад: {this.state.ingredients.salad}</p>
            <p>Бяслаг: {this.state.ingredients.cheese}</p>
            <p>Гахайн мах: {this.state.ingredients.bacon}</p>
            <p>Үхрийн мах: {this.state.ingredients.meat}</p>
            <button onClick={() => this.setState({ ...this.state, ordering: false })}>Хаах</button>
          </Modal>
        )}
      </div>
    );
  }
}

export default BurgerBuilder;
