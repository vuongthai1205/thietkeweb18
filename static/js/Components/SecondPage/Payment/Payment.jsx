import './index.scss';
import paymentImage from '../../../assets/images/secondBlock/payment/Payment.png';
import votingImage from '../../../assets/images/secondBlock/payment/Voting.png';
import coin from '../../../assets/videos/secondPage/Coin.mp4';
import coinMobile from '../../../assets/videos/secondPage/CoinMobile.mp4';
import useViewportSize from "../../../hooks/useViewportSize";
import {useInViewport} from "react-in-viewport";
import {useEffect, useRef, useState} from "react";
import classNames from "classnames";

export default function Payment({ loaded }) {
    const [showComponent, setShowComponent] = useState(false);
    const componentRef = useRef();
    const coinVideo = useRef();

    const ViewportSize = useViewportSize();

    const { inViewport } = useInViewport(componentRef, { threshold: ViewportSize.width > 1000 ? 0.25 : 0.05 });
    const { inViewport: inViewportVideo } = useInViewport(coinVideo, { threshold: 0.01 });

    useEffect(() => {
        if (!loaded) return;
        if (!inViewport || (inViewport && showComponent)) return;
        setShowComponent(true);
    }, [inViewport, loaded]);

    useEffect(() => {
        if (!loaded) return;
        if (!inViewportVideo || (inViewportVideo && !coinVideo.current.paused)) return;
        coinVideo.current.play();
    }, [inViewportVideo, loaded]);

    return (
        <div
          ref={componentRef}
          id='payment'
          className={classNames('paymentMain', showComponent && 'show')}
        >
            <div className='paymentMain-images'>
                <div className='paymentMain-images-paymentImg'>
                    <img src={paymentImage} alt='paymentImage' />
                </div>
                <div className='paymentMain-images-votingImg'>
                    <img src={votingImage} alt='votingImage' />
                </div>
            </div>

            <div className='paymentMain-content'>
                <div className='paymentMain-content-textWrapper'>
                    <p className='paymentMain-content-textWrapper-text'>
                        To participate in the first reward cycle, a snapshot is taken and all participating <span className='changing-color'>ZIBU</span> holders will be accounted for.
                    </p>
                    <p className='paymentMain-content-textWrapper-text'>At the end of the week, we will take another snapshot which will end the cycle for that period. Only the remaining participants who didn’t sell or transfer their tokens will receive funds from the <span className='changing-color'>Last Man Standing wallet.</span></p>
                    <p className='paymentMain-content-textWrapper-text'>After the rewards have been distributed, we will begin the next cycle for the next week.
                        (Continuing the same exact process)
                    </p>
                    <p className='paymentMain-content-textWrapper-text'>Every week <span className='changing-color'>LMS</span> holders can connect to the dashboard and vote for the token they wish to receive that week.</p>
                </div>
                <div className='paymentMain-content-coinVideo'>
                    <video ref={coinVideo} className="paymentMain-content-video" width="100%" height="100%" loop playsInline muted>
                        <source src={ViewportSize.width > 500 ? coin : coinMobile} type="video/mp4" />
                    </video>
                </div>
            </div>
        </div>
    )
}
