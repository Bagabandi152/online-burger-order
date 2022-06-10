import React from 'react'
import css from './style.module.css'

const Spinner = () => {
    return (
        <div className={css.LoadingContainer}>
            <div className={css.Loading}></div>
        </div>
    )
}

export default Spinner;