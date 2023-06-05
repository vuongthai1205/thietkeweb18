import './inde.scss';
import React, { useEffect, useRef, useState } from "react";
import dogBox from '../../../assets/videos/secondPage/Dogbox.mp4';
import dogBoxMobile from '../../../assets/videos/secondPage/DogboxMobile.mp4';
import { ReactComponent as Svg } from '../../../assets/images/secondBlock/arrow.svg';
import arrL from '../../../assets/images/secondBlock/arrl.png';
import { Swiper, SwiperSlide } from "swiper/react";
import useViewportSize from "../../../hooks/useViewportSize";
import {useInViewport} from "react-in-viewport";
import classNames from "classnames";

const DogBox = ({ loaded }) => {
    const [activeLeft, setActiveLeft] = useState(false);
    const [activeRight, setActiveRight] = useState(false);
    const [activeIndex, setActiveIndex] = useState(0);
    const [showDogBoxVideo, setShowDogBoxVideo] = useState(false);
    const [showMainContent, setShowMainContent] = useState(false);
    const ViewportSize = useViewportSize();

    const dogBoxVideoRef = useRef();
    const mainContentRef = useRef();
    const swiperRef = useRef();

    const { inViewport: inViewportDogBoxVideo } = useInViewport(dogBoxVideoRef, { threshold: 0.05 });
    const { inViewport: inViewportMainContent } = useInViewport(mainContentRef, { threshold: 0.05 });

    useEffect(() => {
        if (!loaded) return;
        if (!inViewportDogBoxVideo || (inViewportDogBoxVideo && showDogBoxVideo)) return;
        setShowDogBoxVideo(true);
    }, [inViewportDogBoxVideo, loaded]);

    useEffect(() => {
        if (!loaded) return;
        if (!inViewportMainContent || (inViewportMainContent && showMainContent)) return;
        setShowMainContent(true);
    }, [inViewportMainContent, loaded]);

    useEffect(() => {
        const totalElements = 3;
        const interv = setInterval(() => {
            setActiveIndex(currVal => (currVal + 1) < totalElements ? ++currVal : 0);
        }, 1000)
        return () => clearInterval(interv);

        const onFistScroll = () => {
            if (!loaded) return;
            dogBoxVideoRef?.current?.classList.add('no-delay');
            mainContentRef?.current?.classList.add('no-delay');
            document.removeEventListener('scroll', onFistScroll);
        }

        document.addEventListener('scroll', onFistScroll);
    }, []);

    const clickLeft = () => {
        swiperRef?.current?.swiper?.slidePrev();
        setActiveLeft(true);
    }

    const clickRight = () => {
        swiperRef?.current?.swiper?.slideNext();
        setActiveRight(true);
    }

    return (
        <div className='mainBlock'>
            <div ref={dogBoxVideoRef} className={classNames('mainBlock-dogBoxVideo', showDogBoxVideo && 'show')}>
                <video className="mainBlock-dogBoxVideo-video" width="100%" height="100%" loop autoPlay playsInline muted>
                    <source src={ViewportSize.width > 500 ? dogBox : dogBoxMobile} type="video/mp4" />
                </video>
            </div>

            <div ref={mainContentRef} className={classNames('mainContent', showMainContent && 'show')}>

                {ViewportSize.width > 768
                ?
                <div className='mainContent-top'>
                    <div className='mainContent-top-slider'>
                        <Swiper
                            ref={swiperRef}
                            spaceBetween={0}
                            slidesPerView={1.4}
                        // className='infoBlock-textWrap'
                        // className='mainContent-top-slider'
                        >
                            <SwiperSlide className='mainContent-top-slider-text'>
                                The <span className='changing-color'>Last Man Standing</span> wallet is an exclusive reserve of tokens allocated to our most loyal holders. <span className='changing-color'>2%</span> of every buy and sell contributes to the exponential growth of the <span className='changing-color'>LMS</span>, thus compounding your investment. Anyone who buys ZIBU can participate in the <span className='mainContent-bottom-content-yellow-text'>$BUSD</span> reflections but to qualify for the <span className='changing-color'>LMS</span> bonus, each holder must hold a minimum of one billion ZIBU tokens.
                                {/*The <span className='changing-color'>Last Man Standing</span> wallet is an exclusive reserve of tokens allocated to our most loyal holders. <span className='changing-color'>2%</span> of every buy and sell contributes to the exponential growth of the <span className='changing-color'>Last Man Standing</span> wallet thus compounding your investment. To qualify for the LMS bonus, each holder must hold a minimum of one billion ZIBU tokens.*/}
                            </SwiperSlide>
                            <SwiperSlide className='mainContent-top-slider-text'>
                                Holders will only be eligible to receive the bonus from the <span className='changing-color'>Last Man Standing</span> Wallet if they haven’t sold any <span>ZIBU</span> tokens for <span className='changing-color'>7 days</span>. Selling or transferring any of your tokens will prohibit you from receiving bonus rewards for that cycle.
                            </SwiperSlide>
                            <SwiperSlide className='mainContent-top-slider-text'>
                                By allowing <span className='changing-color'>LMS</span> holders to vote for the rewards of their choosing, the Voters Only Loyalty Treasury (<span className='changing-color'>VOLT</span>), puts the power of choice in the hands of the investor. Every week <span className='changing-color'>LMS</span> holders can use the <span className='changing-color'>VOLT</span> system to pick from a list of the most popular tokens for the coming week’s bonus rewards.
                            </SwiperSlide>
                            <SwiperSlide className='mainContent-top-slider-text'>
                                <span className='changing-color'>ZIBU</span> is part of the <span className='changing-color'>Hybrid Portfolio Builder</span> which rewards holders with multiple tokens. With the <span className='changing-color'>Hybrid Portfolio Builder</span>, holders can earn tokens in several ways including reflections, <span className='changing-color'>Last Man Standing</span>, and the upcoming Play to Earn game.
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </div>
                :
                <div className='mainContent-top'>
                    <div className='mainContent-top-slider'>
                        <div className='mainContent-top-slider-text'>
                            The <span className='changing-color'>Last Man Standing</span> wallet is an exclusive reserve of tokens allocated to our most loyal holders. <span className='changing-color'>2%</span> of every buy and sell contributes to the exponential growth of the <span className='changing-color'>LMS</span>, thus compounding your investment. Anyone who buys ZIBU can participate in the <span className='mainContent-bottom-content-yellow-text'>$BUSD</span> reflections but to qualify for the <span className='changing-color'>LMS</span> bonus, each holder must hold a minimum of one billion ZIBU tokens.
                            {/*The <span className='changing-color'>Last Man Standing</span> wallet is an exclusive reserve of tokens allocated to our most loyal holders. <span className='changing-color'>2%</span> of every buy and sell contributes to the exponential growth of the <span className='changing-color'>Last Man Standing</span> wallet thus compounding your investment. To qualify for the LMS bonus, each holder must hold a minimum of one billion ZIBU tokens.*/}
                        </div>
                        <div className='mainContent-top-slider-text'>
                            Holders will only be eligible to receive the bonus from the <span className='changing-color'>Last Man Standing</span> Wallet if they haven’t sold any <span>ZIBU</span> tokens for <span className='changing-color'>7 days</span>. Selling or transferring any of your tokens will prohibit you from receiving bonus rewards for that cycle.
                        </div>
                        <div className='mainContent-top-slider-text'>
                            By allowing <span className='changing-color'>LMS</span> holders to vote for the rewards of their choosing, the Voters Only Loyalty Treasury (<span className='changing-color'>VOLT</span>), puts the power of choice in the hands of the investor. Every week <span className='changing-color'>LMS</span> holders can use the <span className='changing-color'>VOLT</span> system to pick from a list of the most popular tokens for the coming week’s bonus rewards.
                        </div>
                        <div className='mainContent-top-slider-text'>
                            <span className='changing-color'>ZIBU</span> is part of the <span className='changing-color'>Hybrid Portfolio Builder</span> which rewards holders with multiple tokens. With the <span className='changing-color'>Hybrid Portfolio Builder</span>, holders can earn tokens in several ways including reflections, <span className='changing-color'>Last Man Standing</span>, and the upcoming Play to Earn game.
                        </div>
                    </div>
                </div>}

                <div className='mainContent-helper'>
                    <div className='mainContent-center'>

                        <div className='mainContent-center-blocks'>
                            <div className='mainContent-center-blocks-squares'>
                                {[0, 0, 0].map((val, index) => (
                                    <div key={Math.random()} className={activeIndex === index ? 'activeSquare' : 'mainContent-center-blocks-squares-square'}>
                                        <div
                                          className={activeIndex === index ? 'activeCircle' : 'mainContent-center-blocks-squares-square-circle'}>                                     </div>
                                    </div>
                                ))}
                            </div>

                            <div className='mainContent-center-blocks-arrows'>
                                <div
                                    onAnimationEnd={() => setActiveLeft(false)}
                                    onClick={clickLeft}
                                    className={activeLeft ? 'activeLeft' : 'mainContent-center-blocks-arrows-wrapperLeft'}
                                >
                                </div>
                                <div
                                    onAnimationEnd={() => setActiveRight(false)}
                                    onClick={clickRight}
                                    className={activeRight ? 'activeRight' : 'mainContent-center-blocks-arrows-wrapperRight'}
                                >
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className='mainContent-bottom'>
                        <div className='mainContent-bottom-content'>
                            <p>With the <span className='changing-color'>VOLT</span> system, we are putting the power <span className='mainContent-bottom-content-yellow-text'>in the hands of the holder.</span></p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default DogBox;

