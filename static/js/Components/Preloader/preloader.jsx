import React, {useEffect, useRef, useState} from "react";
import './index.scss';
import classNames from "classnames";
import TonnelVideo from '../../assets/videos/Tonnel.mp4';
import TonnelVideoMobile from '../../assets/videos/TonnelMobile.mp4';
import ScrollDisabler from "../../Utils/ScrollDisabler";

import voltVideo from '../../assets/videos/secondPage/VoltLogo.mp4';
import voltVideoMobile from '../../assets/videos/secondPage/VoltLogoMobile.mp4';
import dogBox from "../../assets/videos/secondPage/Dogbox.mp4";
import dogBoxMobile from "../../assets/videos/secondPage/DogboxMobile.mp4";
import coin from "../../assets/videos/secondPage/Coin.mp4";
import coinMobile from "../../assets/videos/secondPage/CoinMobile.mp4";
import chain from "../../assets/videos/secondPage/chainWide.mp4";
import chainMob from "../../assets/videos/secondPage/Chain.mp4";
import tonnel from "../../assets/videos/secondPage/Tonnel.mp4";
import tonnelMobile from "../../assets/videos/secondPage/TonnelMobile.mp4";
import MainVideo from "../../assets/videos/mainVideo.mp4";
import MainVideoMobile from "../../assets/videos/mainVideoMobile.mp4";
import SecondVideo from "../../assets/videos/secondVideo.mp4";
import SecondVideoMobile from "../../assets/videos/secondVideoMobile.mp4";
import Video1 from "../../assets/videos/howToBuy/Step1.mp4";
import FlyDogMp4 from "../../assets/videos/fly-dog.mp4";
import FlyDogWebM from "../../assets/videos/fly-dog.webm";

import chainImage from '../../assets/images/secondBlock/chain/Chain.png';
import paymentImage from '../../assets/images/secondBlock/payment/Payment.png';
import votingImage from '../../assets/images/secondBlock/payment/Voting.png';

const Preloader = ({ onStartPlay, onEnded, loaded }) => {
    const [isEnded, setIsEnded] = useState(false);
    const componentRef = useRef();

    useEffect(() => {
      window.scrollTo(0, 0);
      ScrollDisabler.disable();
    }, []);

    useEffect(() => {
      componentRef.current.play();
      // componentRef.current.currentTime = 7;
    }, [componentRef]);

    return(
      <>
        <video
          ref={componentRef}
          className={classNames('preloader-video', isEnded && 'hide')}
          src={window.innerWidth > 900 ? TonnelVideo : TonnelVideoMobile}
          muted
          autoPlay
          playsInline
          onEnded={() => {
            window.scrollTo(0, 0);
            onEnded(true)
            setIsEnded(true);
            ScrollDisabler.enable();

            if (!window.location.pathname.includes('volt')) {
                fetch(window.innerWidth > 1000 ? voltVideo : voltVideoMobile);
                fetch(window.innerWidth > 500 ? dogBox : dogBoxMobile);
                fetch(window.innerWidth > 500 ? coin : coinMobile);
                fetch(window.innerWidth > 768 ? chain : chainMob);
                fetch(window.innerWidth > 500 ? tonnel : tonnelMobile);
                fetch(chainImage);
                fetch(paymentImage);
                fetch(votingImage);
            }
            else {
                fetch(window.innerWidth > 1000 ? MainVideo : MainVideoMobile);
                fetch(window.innerWidth > 700 ? SecondVideo : SecondVideoMobile);
                fetch(Video1);
            }
          }}
          // onTransitionEnd={() => ScrollDisabler.enable()}
        />
        <div className='video-loader'>
            <video muted playsInline>
                <source src={FlyDogMp4} type='video/mp4;codecs=hvc1' />
                <source src={FlyDogWebM} type="video/webm" />
            </video>
        </div>
      </>
    )
}

export default Preloader;
