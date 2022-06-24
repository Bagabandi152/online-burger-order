import React from "react";
import css from "./style.module.css";
import MenuItem from "../MenuItem";

const Menu = (props) => {
  return (
    <ul className={css.Menu}>
      <MenuItem exact link="/">
        ШИНЭ ЗАХИАЛГА
      </MenuItem>
      <MenuItem link="/orders">ЗАХИАЛГУУД</MenuItem>
    </ul>
  );
};

export default Menu;
