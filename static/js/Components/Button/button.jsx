import React from "react";
import './index.scss';
import Icon from '../../assets/images/btnIcon.svg';

const Button = ({text, className, onClick}) => {
    return(
        <div className={`button ${className}`} onClick={() => onClick && onClick()}>
            <div className='button-text'>
                {text}
            </div>
            <div className='button-wrapIcon'>
                <img src={Icon} alt='icon' />
            </div>

        </div>
    )
}

export default Button;
