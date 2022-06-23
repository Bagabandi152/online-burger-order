import React, { Component } from "react";
import css from "./style.module.css";
import Toolbar from "../../component/Toolbar";
import BurgerPage from "../BurgerPage";
import OrderPage from "../OrderPage";
import SideBar from "../../component/SideBar";
import { Switch, Route } from 'react-router-dom';

class App extends Component {
  state = {
    showSideBar: false
  };

  toggleSideBar = () => {
    this.setState(prevState => {
      return { showSideBar: !prevState.showSideBar }
    })
  };

  render(){
    return (
      <div>
        <Toolbar showSideBar={this.state.showSideBar} toggleSideBar={this.toggleSideBar}/>
        <SideBar showSideBar={this.state.showSideBar} toggleSideBar={this.toggleSideBar}/>
        <main className={css.Content}>
          <Switch>
            <Route path="/" exact component={BurgerPage}/>
            <Route path="/orders" exact component={OrderPage}/>
          </Switch>
        </main>
      </div>
    );
  }
}

export default App;
