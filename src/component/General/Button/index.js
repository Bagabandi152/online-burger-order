import React from "react";
import css from "./style.module.css";

const Button = (props) => {
  return (
    <button
      className={`${css.Button} ${css[props.btnType]}`}
      style={{ borderColor: props.btnType === "Danger" ? "#f00" : "#0f0" }}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};

export default Button;
