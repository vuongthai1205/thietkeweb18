import React, {useEffect, useRef, useState} from "react";
import './index.scss';
import Line from "../../../../assets/images/howToBuy/line(2).png";
import LineMob from "../../../../assets/images/howToBuy/line_horizontal.png";
import LineReverse from "../../../../assets/images/howToBuy/line(1).png";
import Video5 from "../../../../assets/videos/howToBuy/Step5.mp4";
import classNames from "classnames";
import useViewportSize from "../../../../hooks/useViewportSize";

const StepFifthBlock = ({activeStep}) => {
    const componentRef = useRef();
    const [firstShowed, setFirstShowed] = useState(false);
    const viewportSize = useViewportSize();

    useEffect(() => {
      if (activeStep === 5) componentRef.current.play();
      else componentRef.current.pause();
    }, [activeStep]);

    return(
        <div
          className={classNames('stepFifthBlock', !firstShowed && 'start-show', activeStep === 5 && 'active')}
          style={{zIndex: activeStep === 5 ? '7' : ''}}
          onAnimationEnd={() => setFirstShowed(true)}
        >
            <div className='stepFifthBlock-description'>
                <div className='stepFifthBlock-description-wrapper'>
                    <div className='stepFifthBlock-description-wrapper-text'>
                        The <span style={{color: '#FFF'}}>“Custom Token”</span> screen will load, and you will paste the <span style={{color: '#FF3BC8'}}>BEP20 $ZIBU</span> contract address that is listed above.
                    </div>
                </div>
            </div>
            <img className="separation-line reverse-img stepFifthBlock-separation" src={viewportSize.width > 1300 ? Line : viewportSize.width > 760 ? LineReverse : LineMob} alt='line'/>
            <video ref={componentRef} className={"stepFifthBlock-video"}  width="100%" height="100%" loop autoPlay playsInline muted>
                <source src={Video5} type="video/mp4"/>
            </video>
        </div>
    )
}

export default StepFifthBlock;
