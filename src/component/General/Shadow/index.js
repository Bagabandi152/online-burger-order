import React from 'react'
import css from './style.module.css'

const Shadow = (props) => {
    return (
        <div className={css.Shadow} onClick={props.showShadow}></div>
    )
}

export default Shadow;