import React from "react"
import css from './style.module.css'

const Modal = (props) => {
    return(
        <div className={css.Modal}>{props.children}</div>
    )
}

export default Modal;