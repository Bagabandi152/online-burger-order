import React from "react";
import css from "./style.module.css";
import Logo from "../Logo";
import Menu from "../Menu";

const index = () => {
  return (
    <div className={css.Toolbar}>
      <div>...</div>
      <Logo />
      <nav className={css.HideOnMenu}>
        <Menu />
      </nav>
    </div>
  );
};

export default index;
