import React, {useEffect, useRef, useState} from "react";
import './index.scss';
import soulImage from '../../../assets/images/advisors/saul-min.png'
import wizardsImage from '../../../assets/images/advisors/wizards-min.png'
import labcoatsImage from '../../../assets/images/advisors/labcoats-min.png'
import {useInViewport} from "react-in-viewport";
import classNames from "classnames";

const Advisors = ({ loaded }) => {
    const [showComponent, setShowComponent] = useState(false);
    const componentRef = useRef();

    const { inViewport } = useInViewport(componentRef, { threshold: window.innerWidth > 800 ? 0.3 : 0.1 });

    useEffect(() => {
        if (!loaded) return;
        if (!inViewport || (inViewport && showComponent)) return;
        setShowComponent(true);
    }, [inViewport, loaded]);

    return (
        <div ref={componentRef} className={classNames('advisors', showComponent && 'show')}>
            <div className='advisors-title showTitle'>
                Advisors & Marketers
            </div>
            <div className={classNames('advisors-wrapper', showComponent && 'show')}>
                <div className='advisors-wrapper-block'>
                    <img className='image' src={soulImage} alt='soulImage'/>
                    <div className='description'>
                        <div className="title">Saul PinkSale</div>
                        <div className='dopText'>CEO - PinkSale</div>
                    </div>
                </div>
                <div className='advisors-wrapper-block mid'>
                    <img className='image sec' src={wizardsImage} alt='wizardsImage'/>
                    <div className='description'>
                        <div className="title">Marketing Wizards</div>
                    </div>
                </div>
                <div className='advisors-wrapper-block'>
                    <img className='image third' src={labcoatsImage} alt='labcoatsImage'/>
                    <div className='description'>
                        <div className="title">Lab Coats</div>
                        <div className='dopText'>Creative Consultant</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Advisors;
