import React, {useEffect, useRef, useState} from "react";
import './index.scss';
import Line from "../../../../assets/images/howToBuy/line(1).png";
import LineReverse from "../../../../assets/images/howToBuy/line(2).png";
import Video4 from "../../../../assets/videos/howToBuy/Step4.mp4";
import LineMob from "../../../../assets/images/howToBuy/line_horizontal.png";
import classNames from "classnames";
import useViewportSize from "../../../../hooks/useViewportSize";

const StepFourthBlock = ({activeStep}) => {
    const componentRef = useRef();
    const [firstShowed, setFirstShowed] = useState(false);
    const viewportSize = useViewportSize();

    useEffect(() => {
      if (activeStep === 4) componentRef.current.play();
      else componentRef.current.pause();
    }, [activeStep]);

    return(
        <div
          className={classNames('stepFourthBlock', !firstShowed && 'start-show', activeStep === 4 && 'active')}
          style={{zIndex: activeStep === 4 ? '7' : ''}}
          onAnimationEnd={() => setFirstShowed(true)}
        >
            <video className={"stepFourthBlock-video"} ref={componentRef} width="100%" height="100%" loop playsInline muted>
                <source src={Video4} type="video/mp4"/>
            </video>
            <img className="separation-line stepFourthBlock-separation" src={viewportSize.width > 1300 ? Line : viewportSize.width > 760 ? LineReverse : LineMob} alt='line'/>
            <div className='stepFourthBlock-description'>
                <div className='stepFourthBlock-description-wrapper'>
                    <div className='stepFourthBlock-description-wrapper-title'>Make ZIBU Visible In Your Wallet</div>
                    <div className='stepFourthBlock-description-wrapper-text'>
                        <span style={{color: '#FF3BC8'}}>BEP20</span> – Open Your <span style={{color: '#FFA53B'}}>MetaMask</span>, make sure that you’re on the Smart Chain network, and click
                        the <span style={{color: '#FFF'}}>“Add Token”</span> text, at the bottom of the <span style={{color: '#FFF'}}>“Assets”</span> screen.
                    </div>
                </div>
            </div>
        </div>
    )
}

export default StepFourthBlock;
