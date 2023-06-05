import React, {useEffect, useRef, useState} from "react";
import './index.scss';
import Line from "../../../../assets/images/howToBuy/line(1).png";
import LineReverse from "../../../../assets/images/howToBuy/line(2).png";
import Video6 from "../../../../assets/videos/howToBuy/Step6.mp4";
import LineMob from "../../../../assets/images/howToBuy/line_horizontal.png";
import classNames from "classnames";
import useViewportSize from "../../../../hooks/useViewportSize";

const StepSixthBlock = ({activeStep}) => {
    const componentRef = useRef();
    const [firstShowed, setFirstShowed] = useState(false);
    const viewportSize = useViewportSize();

    useEffect(() => {
      if (activeStep === 6) componentRef.current.play();
      else componentRef.current.pause();
    }, [activeStep]);

    return(
        <div
          className={classNames('stepSixthBlock', !firstShowed && 'start-show', activeStep === 6 && 'active')}
          style={{zIndex: activeStep === 6 ? '7' : ''}}
          onAnimationEnd={() => setFirstShowed(true)}
        >
            <video className={"stepSixthBlock-video"} ref={componentRef} width="100%" height="100%" loop muted playsInline>
                <source src={Video6} type="video/mp4"/>
            </video>
            <img  className="separation-line stepSixthBlock-separation" src={viewportSize.width > 1400 ? Line : viewportSize.width > 760 ? LineReverse : LineMob} alt='line'/>
            <div className='stepSixthBlock-description'>
                <div className='stepSixthBlock-description-wrapper'>
                    <div className='stepSixthBlock-description-wrapper-title'>Funding Your Wallet </div>
                    <div className='stepSixthBlock-description-wrapper-text'>
                        There are multiple ways to fund your <span style={{color: '#FFA53B'}}>MetaMask wallet</span>, join our Telegram community and ask for suggestions to best suit your needs. To purchase <span style={{color: '#FFF'}}>ZIBU</span>, you need to fund your wallet with <span style={{color: '#FFF'}}>BNB</span>.                     </div>
                    <div className='stepSixthBlock-description-wrapper-dopText'>
                        *Please note that you will need an
                        excess amount of BNB to pay for the transaction.
                    </div>
                </div>
            </div>
        </div>
    )
}

export default StepSixthBlock;
