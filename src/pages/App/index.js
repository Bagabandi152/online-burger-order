import React, { Component } from "react";
import css from "./style.module.css";
import Toolbar from "../../component/Toolbar";
import BurgerPage from "../BurgerPage";
import OrderPage from "../OrderPage";
import SideBar from "../../component/SideBar";

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
          {/* <BurgerPage /> */}
          <OrderPage />
        </main>
      </div>
    );
  }
}

export default App;
