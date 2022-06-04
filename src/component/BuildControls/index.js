import React from "react";
import BuildControll from "../BuildControll";
import FormatMnt from "../FormatMnt";
import css from "./style.module.css";

const BuildControlls = (props) => {
  return (
    <div className={css.BuildControls}>
      <p>
        Бургерийн үнэ:&nbsp;<strong style={{ color: "red" }}>{FormatMnt(props.price)}</strong>
      </p>
      {Object.keys(props.ingredientNames).map((ctrl) => (
        <BuildControll
          key={ctrl}
          addIngredient={props.addIngredient}
          removeIngredient={props.removeIngredient}
          disabledIngredients={props.disabledIngredients}
          type={ctrl}
          text={props.ingredientNames[ctrl]}
        />
      ))}
      <button className={css.OrderButton} disabled={props.disabled} onClick={props.orderBurger}>Захиалах</button>
    </div>
  );
};

export default BuildControlls;
