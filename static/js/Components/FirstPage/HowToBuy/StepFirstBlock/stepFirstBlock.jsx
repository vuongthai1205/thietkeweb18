import React, {useRef, useState} from "react";
import './index.scss';
import Icon from "../../../../assets/images/howToBuy/image88.svg";
import Line from "../../../../assets/images/howToBuy/line(1).png";
import LineMob from "../../../../assets/images/howToBuy/line_horizontal.png";
import Video1 from "../../../../assets/videos/howToBuy/Step1.mp4";
import classNames from "classnames";
import useViewportSize from "../../../../hooks/useViewportSize";

const StepFirstBlock = ({ activeStep }) => {
    const videoRef = useRef();
    const [firstShowed, setFirstShowed] = useState(false);
    const viewportSize = useViewportSize();

    return(
        <div
          className={classNames('stepFirstBlock', !firstShowed && 'start-show', activeStep === 1 && 'active')}
          onAnimationEnd={({target: { classList }}) => {
              setFirstShowed(true);
              videoRef.current.play();
          }}
          style={{zIndex: activeStep === 1 ? '7' : ''}}
        >
            <div className='stepFirstBlock-description'>
                <div className='stepFirstBlock-description-wrapper'>
                    <div className='stepFirstBlock-description-wrapper-title'>Create a wallet</div>
                    <div className='stepFirstBlock-description-wrapper-text'>
                        <span style={{color: '#FF3BC8'}}>BEP20</span> – Download the <span style={{color: '#FFA53B'}}>MetaMask Wallet</span> and create a wallet.
                    </div>
                    <a className='stepFirstBlock-description-wrapper-stepFirstBtn'
                       href='https://metamask.io/'
                       target='_blank'
                    >
                        <div className='stepFirstBlock-description-wrapper-stepFirstBtn-text'>download <span>metamask</span></div>
                        <div className='stepFirstBlock-description-wrapper-stepFirstBtn-wrapIcon'>
                            <img src={Icon} alt='icon' />
                        </div>
                    </a>
                </div>
            </div>
            <img className="separation-line" src={viewportSize.width > 760 ? Line : LineMob} alt='line'/>
            <video ref={videoRef} className={"stepFirstBlock-video"} width="100%" height="100%" loop playsInline muted>
                <source src={Video1} type="video/mp4"/>
            </video>
        </div>
    )
}

export default StepFirstBlock;
