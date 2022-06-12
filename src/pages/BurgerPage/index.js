import React, { Component } from "react";
import Burger from "../../component/Burger";
import BuildControls from "../../component/BuildControls";
import Modal from "../../component/General/Modal";
import OrderSummary from "../../component/OrderSummary";
import Shadow from "../../component/General/Shadow";
import baseAxios from "../../axios-instance/base-axios";
import Spinner from "../../component/General/Spinner";
import toast, { Toaster } from 'react-hot-toast';

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
    loading: false
  };

  componentDidMount = () => {
    this.setState({ loading: true })
    baseAxios.get('/orders.json')
    .then(res =>{
      console.log('---orders res: ', res.data)
    })
    .catch((err) => {
      toast.error('Error: ' + err)
    })
    .finally(() => {
      this.setState({ loading: false })
    })
  }

  successOrder = () => {
    return(
      <Toaster
        position="top-center"
        reverseOrder={false}
      />
    )
  }

  continueOrder = () => {
    this.setState({ ordering: false })
    const order = {
      order: {
        ingredients: this.state.ingredients,
        totalPrice: this.state.totalPrice
      },
      user: {
        name: 'Bagabandi',
        email: 'Bagabandi.erd9920@gmail.com',
        phone: '99206304',
        region: 'mongolia',
        city: 'UB city',
        street: 'University street, Small round',
        apartment: 'Dorm 2 in NUM'
      }
    }
    this.setState({ loading: true })
    baseAxios.post('/orders.json', order)
      .then(res =>{
        toast.success('Successfully ordered!')
      })
      .catch((err) => {
        toast.error('Error: ' + err)
      })
      .finally(() => {
        this.setState({ loading: false })
      })
  }

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
        <Toaster
          position="top-center"
          reverseOrder={false}
        />
        <Burger ingredients={this.state.ingredients} />
        {this.state.loading && <Spinner />}
        <BuildControls
          ingredientNames={INGREDIENTS_NAME}
          orderBurger={() => this.setState({ ordering: true })}
          disabled={!this.state.purchasing}
          price={this.state.totalPrice}
          disabledIngredients={disabledIngredients}
          addIngredient={this.addIngredient}
          removeIngredient={this.removeIngredient}
        />
        {this.state.ordering && (
          <>
            <Modal>
              <OrderSummary
                ingredients={this.state.ingredients}
                ingredientsName={INGREDIENTS_NAME}
                ingredientsCost={INGREDIENTS_COSTS}
                totalPrice={this.state.totalPrice}
                continueOrder={this.continueOrder}
                showModal={() => this.setState({ ordering: false })}
              />
            </Modal>
            <Shadow showShadow={() => this.setState({ ordering: false })}/>
          </>
        )}
      </div>
    );
  }
}

export default BurgerBuilder;
