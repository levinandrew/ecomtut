import React from 'react'
import './styles.scss'

// children allows us to pass custom html into function itself
const Button = ({ children, ...otherProps }) => {
    return (
        <button className="btn" {...otherProps}>
            {children}  
        </button>
    );
}

export default Button