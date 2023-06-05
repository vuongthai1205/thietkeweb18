import React, {useEffect, useRef, useState} from "react";
import './index.scss';
import AboutToken from "./AboutToken";
import TitleTokenomics from '../../../assets/images/tokenomics/Tokenomics.png';
import TokenSupply from "./TokenSupply";
import {useInViewport} from "react-in-viewport";
import classNames from "classnames";

const Tokenomics = ({ loaded }) => {
    const [showComponent, setShowComponent] = useState(false);
    const componentRef = useRef();

    const { inViewport } = useInViewport(componentRef, { threshold: 0.2 });

    useEffect(() => {
      if (!loaded) return;
      if (!inViewport || (inViewport && showComponent)) return;
      setShowComponent(true);
    }, [inViewport, loaded]);

    return(
        <div id='tokenomics' ref={componentRef} className={classNames('tokenomics', showComponent && 'show')}>
            <div className='tokenomics-title'>
                <img src={TitleTokenomics} alt='titleTokenomics'/>
            </div>
            <AboutToken />
            <TokenSupply />
        </div>
    )
}

export default Tokenomics;
