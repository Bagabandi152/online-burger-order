import React from 'react'
import css from './style.module.css'
import logoImage from '../../assets/images/burger-logo.png'

const Logo = () => {
    return (<div className={css.Logo}>
        <img alt='burgerLogoImage' src={logoImage}/>
    </div>)
}

export default Logo;