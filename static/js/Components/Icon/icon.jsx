import React, {useState} from "react";
import './index.scss';
// import IconImg from '../../assets/images/adventures/circleIcon.svg';
import IconImg from '../../assets/images/icons/point3.png';
import IconImgActive from '../../assets/images/icons/point3Active.png';
import classNames from "classnames";

const Icon = ({bg, className, rotate, onClick}) => {
    const [activeState, setActiveState] = useState(false);

    return(
        <div
          className={classNames('icon', className, activeState && 'rotate')}
          onClick={() => {
              setActiveState(true);
              onClick();
          }}
          onAnimationEnd={(e) => setActiveState(false)}
        >
            <img style={{transform: `rotate(${rotate})`}} src={IconImg} alt='IconImage' />
            <img style={{transform: `rotate(${rotate})`}} className='active' src={IconImgActive} alt='IconImage' />
        </div>
    )
}

export default Icon;
