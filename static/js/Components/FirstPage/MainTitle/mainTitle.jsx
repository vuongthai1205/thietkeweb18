import React, {useEffect, useRef, useState} from "react";
import './index.scss';
import MainVideo from '../../../assets/videos/mainVideo.mp4';
import MainVideoMobile from '../../../assets/videos/mainVideoMobile.mp4';
import SecondVideo from '../../../assets/videos/secondVideo.mp4';
import SecondVideoMobile from '../../../assets/videos/secondVideoMobile.mp4';
import FlyDogWebM from '../../../assets/videos/fly-dog.webm';
import FlyDogMp4 from '../../../assets/videos/fly-dog.mp4';
import DescBlock from "./DescBlock";
import {useInViewport} from "react-in-viewport";
import classNames from "classnames";
import '../../../Utils/maqrquee';
import useViewportSize from "../../../hooks/useViewportSize";

const MainTitle = ({ show }) => {
    const [showComponent, setShowComponent] = useState(false);
    const componentRef = useRef();
    const flyDogRef = useRef();
    const ViewportSize = useViewportSize();

    //XRPL


    useEffect(() => {
      const interval = setInterval(() => {
        let testElements = document.getElementsByClassName('cr-marquee-item-coin__name');
        Array.prototype.filter.call(testElements, (testElement) => {
          // clearInterval(interval)
          return testElement.textContent = testElement.textContent.replace('XRPL', 'ripple');
        });
      }, 300)
    }, []);

    const mainVideoRef = useRef();
    const secondVideoRef = useRef();

    const { inViewport } = useInViewport(componentRef, { threshold: 0.05 });
    const { inViewport: inViewport80 } = useInViewport(secondVideoRef, { threshold: ViewportSize.width > 800 ? 0.8 : 0.5 });

    useEffect(() => {
      if (!show) return;
      if (!inViewport || (inViewport && showComponent)) return;
      setShowComponent(true);
    }, [inViewport, show]);

    useEffect(() => {
      if (!show) return;
      if (!inViewport80) return;
      secondVideoRef.current.play();
    }, [inViewport80, show]);

    useEffect(() => {
      secondVideoRef.current.play()
        .then(() => secondVideoRef.current.pause());
    }, [secondVideoRef]);

    useEffect(() => {
        window.MarqueeWidget.init();
    },[])

    useEffect(() => {
      if (!show) return;

      // mainVideoRef.current.currentTime = 0;
      mainVideoRef.current.play();

      setTimeout(() => {
        flyDogRef.current.play();
      }, 800);

      document.addEventListener('scroll', (e) => {
        if (!show) return;
        flyDogRef?.current?.classList.add('hide');
        componentRef?.current?.classList.add('no-delay');
      });
    }, [show]);

    return(
        <div id='main-top' className='mainTitleBlock'>
            <div className='wrap-mainvideo'>
              <video
                ref={mainVideoRef}
                src={ViewportSize.width > 1000 ? MainVideo : MainVideoMobile}
                className='main-video'
                width="100%" height="100%"
                loop muted playsInline
              />
            </div>
            <div className='mainTitleBlock-widgetWrap'>
                <div className='wrap-fly-dog'>
                  <video ref={flyDogRef} className='fly-dog' muted playsInline>
                    <source src={FlyDogMp4} type='video/mp4;codecs=hvc1' />
                    <source src={FlyDogWebM} type="video/webm" />
                  </video>
                  <div className='mainTitleBlock-widgetWrap-widget' id="cr-widget-marquee"
                       data-coins="ripple,avalanche,matic-network,ethereum,polkadot,shiba-inu,chainlink,uniswap,dogecoin,bitcoin"
                       data-theme="dark"
                       data-show-symbol="true"
                       data-show-icon="true"
                       data-show-period-change="false"
                       data-period-change="24H"
                       data-api-url="https://api.cryptorank.io/v0"
                  >
                    {/*<a href="https://cryptorank.io">Coins by Cryptorank</a>*/}
                  </div>
                </div>
            </div>
            <div ref={componentRef} className={classNames('wrap-second-video-section', showComponent && 'show')}>
              <DescBlock />
              <video
                ref={secondVideoRef}
                src={ViewportSize.width > 700 ? SecondVideo : SecondVideoMobile}
                className='second-video border'
                style={{marginTop: '-4px'}}
                width="100%"
                height="100%"
                muted playsInline
                onEnded={() => {
                  secondVideoRef.current.currentTime = 1.7;
                  secondVideoRef.current.play();
                }}
              />
            </div>
        </div>
    )
}

export default MainTitle;
