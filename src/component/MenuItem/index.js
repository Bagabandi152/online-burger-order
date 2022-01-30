import React from "react";
import css from "./style.module.css";

const MenuItem = (props) => {
  return <li className={css.MenuItem}><a href={props.link} className={props.active ? css.active : null}>{props.children}</a></li>;
};

export default MenuItem;
