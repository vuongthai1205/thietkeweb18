import React, {useEffect, useRef, useState} from "react";
import './index.scss';
import Line from "../../../../assets/images/howToBuy/line(2).png";
import Video3 from "../../../../assets/videos/howToBuy/Step3.mp4";
import LineMob from "../../../../assets/images/howToBuy/line_horizontal.png";
import classNames from "classnames";
import useViewportSize from "../../../../hooks/useViewportSize";

const StepThirdBlock = ({activeStep}) => {
  const componentRef = useRef();
  const [firstShowed, setFirstShowed] = useState(false);
  const viewportSize = useViewportSize();

    useEffect(() => {
      if (activeStep === 3) componentRef.current.play();
      else componentRef.current.pause();
    }, [activeStep]);

    return(
        <div
          className={classNames('stepThirdBlock', !firstShowed && 'start-show', activeStep === 3 && 'active')}
          style={{zIndex: activeStep === 3 ? '7' : ''}}
          onAnimationEnd={() => setFirstShowed(true)}
        >
            <div className='stepThirdBlock-description'>
                <div className='stepThirdBlock-description-wrapper'>
                    <div className='stepThirdBlock-description-wrapper-text'>
                        Make sure to write down your recovery/seed phrase and password and keep them private. No one in the crypto community will ever need your recovery/seed phrase.
                    </div>
                </div>
            </div>
            <img  className="separation-line reverse-img" src={viewportSize.width > 760 ? Line : LineMob} alt='line'/>
            <video ref={componentRef} className={"stepThirdBlock-video"} width="100%" height="100%" loop playsInline muted>
                <source src={Video3} type="video/mp4"/>
            </video>
        </div>
    )
}

export default StepThirdBlock;
