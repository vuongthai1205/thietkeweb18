import React, {useEffect, useRef, useState} from "react";
import './index.scss';
import TitleImage from '../../../assets/images/howToBuy/HowToBuy.png';
import PurchaseSteps from "./PurchaseSteps";
import {useInViewport} from "react-in-viewport";
import classNames from "classnames";

const HowToBuy = ({ loaded }) => {
    const [showComponent, setShowComponent] = useState(false);
    const componentRef = useRef();

    const { inViewport } = useInViewport(componentRef, { threshold: 0.3 });

    useEffect(() => {
      if (!loaded) return;
      if (!inViewport || (inViewport && showComponent)) return;
      setShowComponent(true);
    }, [inViewport, loaded]);

    return(
        <div id='howBuy' ref={componentRef} className={classNames('howToBuy', showComponent && 'show')}>
            <div className='howToBuy-title'>
                <img src={TitleImage} alt='titleImg'/>
            </div>
            <PurchaseSteps />
        </div>
    )
}

export default HowToBuy;
