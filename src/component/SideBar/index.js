import React from "react";
import css from "./style.module.css";
import Logo from "../Logo";
import Menu from "../Menu";
import Shadow from "../General/Shadow";

const SideBar = (props) => {
  let classes = [css.SideBar, props.showSideBar ? css.Open : css.Close];

  return (
    <div>
      {props.showSideBar && <Shadow showShadow={props.toggleSideBar}/>}
      <div className={classes.join(' ')}>
        <div className={css.Logo}>
          <Logo />
        </div>
        <Menu />
      </div>
    </div>
  );
};

export default SideBar;
