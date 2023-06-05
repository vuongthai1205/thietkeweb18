import React, {useEffect, useRef, useState} from "react";
import './index.scss';

import Line from "../../../../assets/images/howToBuy/line(1).png";
import LineMob from "../../../../assets/images/howToBuy/line_horizontal.png";
import Video2 from "../../../../assets/videos/howToBuy/Step2.mp4";
import classNames from "classnames";
import useViewportSize from "../../../../hooks/useViewportSize";

const StepSecondBlock = ({activeStep}) => {
    const componentRef = useRef();
    const [firstShowed, setFirstShowed] = useState(false);
    const viewportSize = useViewportSize();

    useEffect(() => {
      if (activeStep === 2) componentRef.current.play();
      else componentRef.current.pause();
    }, [activeStep]);

    return(
        <div
          className={classNames('stepSecondBlock', !firstShowed && 'start-show', activeStep === 2 && 'active')}
          style={{zIndex: activeStep === 2 ? '7' : ''}}
          onAnimationEnd={() => setFirstShowed(true)}
        >
            <video ref={componentRef} className={"stepSecondBlock-video"}  width="100%" height="100%" loop playsInline muted>
                <source src={Video2} type="video/mp4"/>
            </video>
            <img className="separation-line" src={viewportSize.width > 760 ? Line : LineMob} alt='line'/>
            <div className='stepSecondBlock-description'>
                <div className='stepSecondBlock-description-wrapper'>
                    If your MetaMask does not come with Binance Smart Chain pre-installed,
                    please <a href='https://academy.binance.com/en/articles/connecting-metamask-to-binance-smart-chain' target='_blank' style={{color: '#FF3BC8'}}>click here</a>, for instructions on how to add the Binance Smart Chain network to your wallet.
                </div>
            </div>
        </div>
    )
}

export default StepSecondBlock;
