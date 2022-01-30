import React from "react";
import styles from "./style.module.css";
import Logo from "../Logo";
import Menu from "../Menu";

const index = () => {
  return (
    <div className={styles.Toolbar}>
      <div>...</div>
      <Logo />
      <nav>
        <Menu />
      </nav>
    </div>
  );
};

export default index;
