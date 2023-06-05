import React, {useEffect, useRef, useState} from "react";
import './index.scss';
import Video7 from "../../../../assets/videos/howToBuy/Step7.mp4";
import Line from "../../../../assets/images/howToBuy/line(2).png";
import LineMob from "../../../../assets/images/howToBuy/line_horizontal.png";
import classNames from "classnames";
import useViewportSize from "../../../../hooks/useViewportSize";

const StepSeventhBlock = ({activeStep}) => {
    const componentRef = useRef();
    const [firstShowed, setFirstShowed] = useState(false);
    const viewportSize = useViewportSize();

    useEffect(() => {
      if (activeStep === 7) componentRef.current.play();
      else componentRef.current.pause();
    }, [activeStep]);

    return(
        <div
          className={classNames('stepSeventhBlock', !firstShowed && 'start-show', activeStep === 7 && 'active')}
          style={{zIndex: activeStep === 7 ? '7' : ''}}
          onAnimationEnd={() => setFirstShowed(true)}
        >
            <div className='stepSeventhBlock-description'>
                <div className='stepSeventhBlock-description-wrapper'>
                    <div className='stepSeventhBlock-description-wrapper-title'>Purchasing ZIBU </div>
                    <div className='stepSeventhBlock-description-wrapper-text'>
                        There are multiple ways to purchase <span style={{color: '#FFF'}}>ZIBU</span>.
                        You can use Pancakeswap, Poocoin, or Dextools to Swap <span style={{color: '#FFF'}}>BNB</span> for <span style={{color: '#FFF'}}>ZIBU</span>. The tax is <span style={{color: '#FF3BC8'}}>15%</span> so set your slippage to <span style={{color: '#FF3BC8'}}>17%</span>.
                    </div>
                </div>
            </div>
            <img className="separation-line reverse-img" src={viewportSize.width > 760 ? Line : LineMob} alt='line'/>
            <video className={"stepSeventhBlock-video"} ref={componentRef} width="100%" height="100%" loop playsInline muted>
                <source src={Video7} type="video/mp4"/>
            </video>
        </div>
    )
}

export default StepSeventhBlock
