import './index.scss';
import roadmapImage from '../../../assets/images/secondBlock/roadmap/Roadmap.png';
import tonnel from '../../../assets/videos/secondPage/Tonnel.mp4';
import tonnelMobile from '../../../assets/videos/secondPage/TonnelMobile.mp4';
import step from '../../../assets/images/secondBlock/roadmap/step.svg';

import s from '../../../assets/images/secondBlock/roadmap/white/s-white.svg';
import t from '../../../assets/images/secondBlock/roadmap/white/t-white.svg';
import e from '../../../assets/images/secondBlock/roadmap/white/e-white.svg';
import p from '../../../assets/images/secondBlock/roadmap/white/p-white.svg';

import s1 from '../../../assets/images/secondBlock/roadmap/s/s-1.svg';
import s2 from '../../../assets/images/secondBlock/roadmap/s/s-2.svg';
import s3 from '../../../assets/images/secondBlock/roadmap/s/s-3.svg';
import s4 from '../../../assets/images/secondBlock/roadmap/s/s-4.svg';
import s5 from '../../../assets/images/secondBlock/roadmap/s/s-5.svg';

import p1 from '../../../assets/images/secondBlock/roadmap/p/p-1.svg';
import p2 from '../../../assets/images/secondBlock/roadmap/p/p-2.svg';
import p3 from '../../../assets/images/secondBlock/roadmap/p/p-3.svg';
import p4 from '../../../assets/images/secondBlock/roadmap/p/p-4.svg';
import p5 from '../../../assets/images/secondBlock/roadmap/p/p-5.svg';


import step1 from '../../../assets/images/secondBlock/roadmap/step1.svg'
import step2 from '../../../assets/images/secondBlock/roadmap/step2.svg'
import step3 from '../../../assets/images/secondBlock/roadmap/step3.svg'

import steprot from '../../../assets/images/secondBlock/roadmap/rotated/steprot.png';

import s1rot from '../../../assets/images/secondBlock/roadmap/rotated/1rot.png';
import s2rot from '../../../assets/images/secondBlock/roadmap/rotated/2rot.png';
import s3rot from '../../../assets/images/secondBlock/roadmap/rotated/3rot.png';

import s1rotated from '../../../assets/images/secondBlock/roadmap/rotatedS/s1rot.png';
import s2rotated from '../../../assets/images/secondBlock/roadmap/rotatedS/s2rot.png';
import s3rotated from '../../../assets/images/secondBlock/roadmap/rotatedS/s3rot.png';
import s4rotated from '../../../assets/images/secondBlock/roadmap/rotatedS/s4rot.png';
import s5rotated from '../../../assets/images/secondBlock/roadmap/rotatedS/s5rot.png';

import p1rotated from '../../../assets/images/secondBlock/roadmap/rotatedP/p1rot.png';
import p2rotated from '../../../assets/images/secondBlock/roadmap/rotatedP/p2rot.png';
import p3rotated from '../../../assets/images/secondBlock/roadmap/rotatedP/p3rot.png';
import p4rotated from '../../../assets/images/secondBlock/roadmap/rotatedP/p4rot.png';
import p5rotated from '../../../assets/images/secondBlock/roadmap/rotatedP/p5rot.png';
import useViewportSize from "../../../hooks/useViewportSize";
import {useEffect, useRef, useState} from "react";
import {useInViewport} from "react-in-viewport";
import classNames from "classnames";

export default function Roadmap({ loaded }) {
    const [showComponent, setShowComponent] = useState(false);
    const componentRef = useRef();

    const ViewportSize = useViewportSize();

    const { inViewport } = useInViewport(componentRef, { threshold: ViewportSize.width > 1000 ? 0.25 : 0.1 });

    useEffect(() => {
      if (!loaded) return;
      if (!inViewport || (inViewport && showComponent)) return;
      setShowComponent(true);
    }, [inViewport, loaded]);


    return (
        <div ref={componentRef} id='roadmap' className={classNames("roadmapMain", showComponent && 'show')}>
            <div className="roadmapMain-text">
                <img src={roadmapImage} alt="roadmapText" />
            </div>

            {ViewportSize.width > 768
            ? <div className='roadmapMain-videoWrapper'>

                <div className='roadmapMain-videoWrapper-video'>
                    <video className="roadmapMain-videoWrapper-video-item" width="100%" height="100%" loop playsInline autoPlay muted>
                        <source src={ViewportSize.width > 500 ? tonnel : tonnelMobile} type="video/mp4" />
                    </video>

                    <div className='roadmapMain-videoWrapper-video-stepWrapper'>
                        <img className='roadmapMain-videoWrapper-video-stepWrapper-one' src={step1} alt="" />
                        <img className='roadmapMain-videoWrapper-video-stepWrapper-two' src={step2} alt="" />
                        <img className='roadmapMain-videoWrapper-video-stepWrapper-three' src={step3} alt="" />
                        <div className='roadmapMain-videoWrapper-video-stepWrapper-helper'>
                            <div className='roadmapMain-videoWrapper-video-stepWrapper-helper-word'>
                                <img className='roadmapMain-videoWrapper-video-stepWrapper-helper-word-step' src={p} alt="" />
                                <img className='roadmapMain-videoWrapper-video-stepWrapper-helper-word-step' src={e} alt="" />
                                <img className='roadmapMain-videoWrapper-video-stepWrapper-helper-word-step' src={t} alt="" />
                                <img className='roadmapMain-videoWrapper-video-stepWrapper-helper-word-step' src={s} alt="" />

                                <img className='roadmapMain-videoWrapper-video-stepWrapper-helper-word-absolute1' src={s1} alt="" />
                                <img className='roadmapMain-videoWrapper-video-stepWrapper-helper-word-absolute2' src={s2} alt="" />
                                <img className='roadmapMain-videoWrapper-video-stepWrapper-helper-word-absolute3' src={s3} alt="" />
                                <img className='roadmapMain-videoWrapper-video-stepWrapper-helper-word-absolute4' src={s4} alt="" />
                                <img className='roadmapMain-videoWrapper-video-stepWrapper-helper-word-absolute5' src={s5} alt="" />

                                <img className='roadmapMain-videoWrapper-video-stepWrapper-helper-word-absolute6' src={p1} alt="" />
                                <img className='roadmapMain-videoWrapper-video-stepWrapper-helper-word-absolute7' src={p2} alt="" />
                                <img className='roadmapMain-videoWrapper-video-stepWrapper-helper-word-absolute8' src={p3} alt="" />
                                <img className='roadmapMain-videoWrapper-video-stepWrapper-helper-word-absolute9' src={p4} alt="" />
                                <img className='roadmapMain-videoWrapper-video-stepWrapper-helper-word-absolute10' src={p5} alt="" />
                            </div>
                        </div>
                    </div>


                </div>

                <div className='roadmapMain-videoWrapper-content'>
                    <div className='roadmapMain-videoWrapper-content-wrapperOne'>
                        <p className='roadmapMain-videoWrapper-content-wrapperOne-text roadmapMain-videoWrapper-content-wrapperOne-text-first'>ZIBU Token Development <br/> Market Research <br/>  Brand Development</p>
                        <p className='roadmapMain-videoWrapper-content-wrapperOne-text roadmapMain-videoWrapper-content-wrapperOne-text-second'>Strategic Partnerships and Advisors <br/> Stress Test ZIBU Smart Contract<br/>  Website Launch
                        </p>
                        <p className='roadmapMain-videoWrapper-content-wrapperOne-text roadmapMain-videoWrapper-content-wrapperOne-text-third'>Presale Promotion <br/> Whitelist Opens <br/> Pre-launch Marketing Campaign</p>
                    </div>
                </div>

                <div className='roadmapMain-videoWrapper-content'>
                    <div className='roadmapMain-videoWrapper-content-wrapperTwo'>
                        <p className='roadmapMain-videoWrapper-content-wrapperTwo-text roadmapMain-videoWrapper-content-wrapperOne-text-first'>Presale Launch <br/> Public Launch  on Pancakeswap <br/> Visual Promotions Release</p>
                        <p className='roadmapMain-videoWrapper-content-wrapperTwo-text roadmapMain-videoWrapper-content-wrapperOne-text-second'>Multi-Platform Marketing<br/> Coin Site Listings<br/> Coingecko Listing</p>
                        <p className='roadmapMain-videoWrapper-content-wrapperTwo-text roadmapMain-videoWrapper-content-wrapperOne-text-third'>CoinMarketCap Listing <br/> First Week of Volting<br/> High Voltage Giveaway for LMS holders</p>
                    </div>
                </div>

                <div className='roadmapMain-videoWrapper-content'>
                    <div className='roadmapMain-videoWrapper-content-wrapperThree'>
                        <p className='roadmapMain-videoWrapper-content-wrapperThree-text roadmapMain-videoWrapper-content-wrapperOne-text-first'>Adventures of ZIBU preview for LMS holders<br/>Release of Adventures of ZIBU game <br/>Launch of ZIBU in Game Merch Store</p>
                        <p className='roadmapMain-videoWrapper-content-wrapperThree-text roadmapMain-videoWrapper-content-wrapperOne-text-second'> Limited Edition in-game giveaway<br/> Exchange Listings<br/> Second High Voltage Giveaway for LMS holders</p>
                    </div>
                </div>

            </div>
            : <div className='roadmapMainMob-videoWrapper'>

                <div className='roadmapMainMob-videoWrapper-video'>
                    <video className='roadmapMainMob-videoWrapper-video video' width="100%" height="100%" loop playsInline autoPlay muted>
                        <source src={ViewportSize.width > 500 ? tonnel : tonnelMobile} type="video/mp4" />
                    </video>

                    <div className='roadmapMainMob-videoWrapper-video-stepWrapper'>
                        <div className='roadmapMainMob-videoWrapper-video-stepWrapper-helper'>
                            <div className='roadmapMainMob-videoWrapper-video-stepWrapper-helper-word'>

                                <div className='roadmapMainMob-videoWrapper-video-stepWrapper-helper-word-steprotWrapper'>
                                    <img className='roadmapMainMob-videoWrapper-video-stepWrapper-helper-word-steprotWrapper-absolute5' src={s5rotated} alt="" />
                                    <img className='roadmapMainMob-videoWrapper-video-stepWrapper-helper-word-steprotWrapper-absolute4' src={s4rotated} alt="" />
                                    <img className='roadmapMainMob-videoWrapper-video-stepWrapper-helper-word-steprotWrapper-absolute3' src={s3rotated} alt="" />
                                    <img className='roadmapMainMob-videoWrapper-video-stepWrapper-helper-word-steprotWrapper-absolute2' src={s2rotated} alt="" />
                                    <img className='roadmapMainMob-videoWrapper-video-stepWrapper-helper-word-steprotWrapper-absolute1' src={s1rotated} alt="" />

                                    <img className='roadmapMainMob-videoWrapper-video-stepWrapper-helper-word-steprotWrapper-absolute10' src={p5rotated} alt="" />
                                    <img className='roadmapMainMob-videoWrapper-video-stepWrapper-helper-word-steprotWrapper-absolute9' src={p4rotated} alt="" />
                                    <img className='roadmapMainMob-videoWrapper-video-stepWrapper-helper-word-steprotWrapper-absolute8' src={p3rotated} alt="" />
                                    <img className='roadmapMainMob-videoWrapper-video-stepWrapper-helper-word-steprotWrapper-absolute7' src={p2rotated} alt="" />
                                    <img className='roadmapMainMob-videoWrapper-video-stepWrapper-helper-word-steprotWrapper-absolute6' src={p1rotated} alt="" />
                                    <img className='roadmapMainMob-videoWrapper-video-stepWrapper-helper-word-steprotWrapper-step' src={steprot} alt="" />
                                </div>
                                <div className='roadmapMainMob-videoWrapper-video-stepWrapper-helper-word-steps'>
                                    <img className='roadmapMainMob-videoWrapper-video-stepWrapper-helper-word-steps-one' src={s1rot} alt="" />
                                    <img className='roadmapMainMob-videoWrapper-video-stepWrapper-helper-word-steps-two' src={s2rot} alt="" />
                                    <img className='roadmapMainMob-videoWrapper-video-stepWrapper-helper-word-steps-three' src={s3rot} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='roadmapMainMob-videoWrapper-content'>
                    <div className='roadmapMainMob-videoWrapper-content-wrapperOne'>
                        <p className='roadmapMainMob-videoWrapper-content-wrapperOne-text roadmapMainMob-videoWrapper-content-wrapperOne-text-first'>ZIBU Token Development<br/>  Market Research <br/> Brand Development</p>
                        <p className='roadmapMainMob-videoWrapper-content-wrapperOne-text roadmapMainMob-videoWrapper-content-wrapperOne-text-second'>Strategic Partnerships and Advisors<br/>  Stress Test ZIBU Smart Contract<br/>  Website Launch
                        </p>
                        <p className='roadmapMainMob-videoWrapper-content-wrapperOne-text roadmapMainMob-videoWrapper-content-wrapperOne-text-third'>Presale Promotion <br/> Whitelist Opens <br/> Pre-launch Marketing Campaign</p>
                    </div>
                </div>

                <div className='roadmapMainMob-videoWrapper-content'>
                    <div className='roadmapMainMob-videoWrapper-content-wrapperTwo'>
                        <p className='roadmapMainMob-videoWrapper-content-wrapperTwo-text roadmapMainMob-videoWrapper-content-wrapperOne-text-first'>Presale Launch <br/>Public Launch on Pancakeswap<br/> Visual Promotions Release</p>
                        <p className='roadmapMainMob-videoWrapper-content-wrapperTwo-text roadmapMainMob-videoWrapper-content-wrapperOne-text-second'>Multi-Platform Marketing<br/> Coin Site Listings <br/>Coingecko Listing</p>
                        <p className='roadmapMainMob-videoWrapper-content-wrapperTwo-text roadmapMainMob-videoWrapper-content-wrapperOne-text-third'>CoinMarketCap Listing<br/> First Week of Volting <br/>High Voltage Giveaway for LMS holders</p>
                    </div>
                </div>

                <div className='roadmapMainMob-videoWrapper-content'>
                    <div className='roadmapMainMob-videoWrapper-content-wrapperThree'>
                        <p className='roadmapMainMob-videoWrapper-content-wrapperThree-text roadmapMainMob-videoWrapper-content-wrapperOne-text-first'>Adventures of ZIBU preview for LMS holders <br/>Release of Adventures of ZIBU game<br/> Launch of ZIBU in Game Merch Store</p>
                        <p className='roadmapMainMob-videoWrapper-content-wrapperThree-text roadmapMainMob-videoWrapper-content-wrapperOne-text-second'> Limited Edition in-game giveaway ZIBU <br/>Exchange Listings<br/> Second High Voltage Giveaway for LMS holders</p>
                    </div>
                </div>

            </div>
            }
        </div>
    )
}
