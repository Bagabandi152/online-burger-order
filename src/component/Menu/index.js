import React from "react";
import css from "./style.module.css";
import MenuItem from "../MenuItem";

const Menu = (props) => {
  return (
    <ul className={css.Menu}>
      <MenuItem active link="/">
        BURGER
      </MenuItem>
      <MenuItem link="/checkout">PAYMENT</MenuItem>
    </ul>
  );
};

export default Menu;
