import React, {useEffect, useRef, useState} from "react";
import './index.scss';
import Video from '../../../../assets/videos/tokenomics/Graph4.mp4';
import VideoMobile from '../../../../assets/videos/tokenomics/Graph4Mobile.mp4';
import {useInViewport} from "react-in-viewport";
import classNames from "classnames";
import useViewportSize from "../../../../hooks/useViewportSize";
import shapeImg from '../../../../assets/images/tokenomics/tokenomics2.svg'

const TokenSupply = () => {
    const [showComponent, setShowComponent] = useState(false);
    const componentRef = useRef();
    const [copyTO, setCopyTO] = useState();


    const { inViewport } = useInViewport(componentRef, { threshold: window.innerWidth > 800 ? 0.2 : 0.1 });

    useEffect(() => {
        if (!inViewport || (inViewport && showComponent)) return;
        setShowComponent(true);
    }, [inViewport]);

    const viewportSize = useViewportSize();

    const address = '0x580e2b3170AA36e7018eaD248298C8cc18B0f019';

    return(
        <div ref={componentRef} className={classNames('tokenSupply', showComponent && 'show')}>
            <div className='tokenSupply-tokenCount'>
                <div className='title'>
                    Token supply = <span style={{color: '#FF3BC8'}}>1.000.000.000.000</span>
                </div>
                <video width="100%" height="100%" loop autoPlay playsInline muted>
                    <source src={window.innerWidth > 500 ? Video : VideoMobile} type="video/mp4"/>
                </video>
            </div>
            <div className='tokenSupply-infoToken'>
                <div className='tokenSupply-infoToken-price'>
                    <div className='buy'>
                        <div className='title'>Buy Tax = <span style={{color: '#FF3BC8'}}>10%</span></div>
                        <div className='text'>
                            <div>Reflections = 4%</div>
                            <div>Liquidity = 1%</div>
                            <div>LMS = 2%</div>
                            <div>Buy Back & Burn = 1%</div>
                            <div>Project Development = 2%</div>
                        </div>
                    </div>
                    <div className='sell'>
                        <div className='title'>Sell Tax = <span style={{color: '#FF3BC8'}}>10%</span></div>
                        <div className='text'>
                            <div>Reflections = 4%</div>
                            <div>Liquidity = 1%</div>
                            <div>LMS = 2%</div>
                            <div>Buy Back & Burn = 1%</div>
                            <div>Project Development = 2%</div>
                        </div>
                    </div>
                </div>
                {viewportSize.width > 760 ?
                <div className='tokenSupply-infoToken-contactAddress'>
                    <div className='title'>CONTRACT ADDRESS</div>
                    <div
                      className='address'
                      onClick={e => {
                          e.target.classList.add('copied');
                          navigator.clipboard.writeText(address);
                          clearTimeout(copyTO);

                          setCopyTO(setTimeout(() => {
                              e.target.classList.remove('copied');
                          }, 1000));
                      }}
                    >
                        {address}
                        <div className='copy' />
                    </div>
                </div>
                : <div className="tokenSupply-shapeBox">
                    <img src={shapeImg} alt="" className="tokenSupply-shape" />
                </div>
                }
            </div>
        </div>
    )
}

export default TokenSupply;
