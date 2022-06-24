import React from "react";
import css from "./style.module.css";
import { NavLink } from "react-router-dom";

const MenuItem = (props) => {
  return (<li className={css.MenuItem}>
      <NavLink 
        to={props.link} 
        exact={props.exact}
        activeClassName={css.active}
      >
        {props.children}
      </NavLink>
    </li>);
};

export default MenuItem;
