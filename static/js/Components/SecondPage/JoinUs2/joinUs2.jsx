import './index.scss';
import TitleImage from '../../../assets/images/joinUs/JoinUs.png';
import JoinUsVideo from "../../../assets/videos/joinUs/video1.mp4";
import TextImage from '../../../assets/images/joinUs/FollowUs.png';
import tickerIcon from '../../../assets/images/joinUs/tickericon.png';
import ArrowImage from '../../../assets/images/joinUs/arrowImage.png';

import F1Icon from "../../../assets/images/joinUs/f1.png";
import F2Icon from "../../../assets/images/joinUs/f2.png";
import F3Icon from "../../../assets/images/joinUs/f3.png";
import F4Icon from "../../../assets/images/joinUs/f4.png";
import F5Icon from "../../../assets/images/joinUs/f5.png";

import S1Icon from "../../../assets/images/joinUs/s1.png";
import S2Icon from "../../../assets/images/joinUs/s2.png";
import S3Icon from "../../../assets/images/joinUs/s3.png";
import S4Icon from "../../../assets/images/joinUs/s4.png";
import S5Icon from "../../../assets/images/joinUs/s5.png";
import { useEffect, useRef, useState } from "react";
import { useInViewport } from "react-in-viewport";
import classNames from "classnames";


export default function JoinUs({ loaded }) {
    const [showComponent, setShowComponent] = useState(false);
    const componentRef = useRef();

    const { inViewport } = useInViewport(componentRef, { threshold: window.innerWidth > 800 ? 0.3 : 0.1 });

    useEffect(() => {
        if (!loaded) return;
        if (!inViewport || (inViewport && showComponent)) return;
        setShowComponent(true);
    }, [inViewport, loaded]);

    const onSubscribe = (e) => {
        e.preventDefault();
    }

    return (
        <div id='joinUs' ref={componentRef} className={classNames("joinusMain", showComponent && 'show')}>
            <div className='joinUs-title'>
                <img src={TitleImage} alt='joinUsTitle' />
            </div>
            <div className='joinusMain-block'>
                <div className="joinusMain-block-video">
                    <video className='video' width="100%" height="100%" loop autoPlay playsInline muted>
                        <source src={JoinUsVideo} type="video/mp4" />
                    </video>
                </div>
                <div className='joinusMain-block-stay'>
                    <div className='joinusMain-block-stay-top'>
                        <p className='joinusMain-block-stay-top-stay'>STAY UPDATED</p>
                        <div className='joinusMain-block-stay-top-subscribe' >
                            <form className='joinusMain-block-stay-top-subscribe-wrapper' onSubmit={(e) => onSubscribe(e)}>
                                <input type="text" placeholder='Email Address' className='joinusMain-block-stay-top-subscribe-wrapper-input' />
                                <button className='joinusMain-block-stay-top-subscribe-wrapper-but'>
                                    <span className="gradient-border" />
                                    <span className='text'>SUBSCRIBE</span>
                                    {/*<img src={iconBtn} alt="iconBtn" className='iconBtn' />*/}
                                </button>
                            </form>
                        </div>
                    </div>
                    <div className='joinusMain-block-stay-bottom'>
                        <div className='joinusMain-block-stay-bottom-word'>
                            <img src={TextImage} alt='text' className='joinusMain-block-stay-bottom-word-follow' />
                            <img className='joinusMain-block-stay-bottom-word-f1' src={F1Icon} alt='iconImage' />
                            <img className='joinusMain-block-stay-bottom-word-f2' src={F2Icon} alt='iconImage' />
                            <img className='joinusMain-block-stay-bottom-word-f3' src={F3Icon} alt='iconImage' />
                            <img className='joinusMain-block-stay-bottom-word-f4' src={F4Icon} alt='iconImage' />
                            <img className='joinusMain-block-stay-bottom-word-f5' src={F5Icon} alt='iconImage' />
                            <img className='joinusMain-block-stay-bottom-word-s1' src={S1Icon} alt='iconImage' />
                            <img className='joinusMain-block-stay-bottom-word-s2' src={S2Icon} alt='iconImage' />
                            <img className='joinusMain-block-stay-bottom-word-s3' src={S3Icon} alt='iconImage' />
                            <img className='joinusMain-block-stay-bottom-word-s4' src={S4Icon} alt='iconImage' />
                            <img className='joinusMain-block-stay-bottom-word-s5' src={S5Icon} alt='iconImage' />
                        </div>
                    </div>
                </div>
                <div className='joinusMain-block-join'>
                    <div className='joinusMain-block-join-top'>
                        <p className='joinusMain-block-join-top-join'>JOIN OUR COMMUNITY</p>
                        <a className='joinusMain-block-join-top-ticker' href='https://t.me/zibuio' target='_blank'>
                            <span className="gradient-border" />

                            <marquee direction="right" scrollamount="10">
                                <div className='joint-telegram' style={{ display: "flex", alignItems: "center" }}>
                                    JOIN OUR TELEGRAM<img src={tickerIcon} className='tickerIcon' alt='telegramIcon' />
                                    JOIN OUR TELEGRAM<img src={tickerIcon} className='tickerIcon' alt='telegramIcon' />
                                    JOIN OUR TELEGRAM<img src={tickerIcon} className='tickerIcon' alt='telegramIcon' />
                                </div>
                            </marquee>
                        </a>
                    </div>
                    <div className='joinusMain-block-bottom'>
                        <div className='joinusMain-block-bottom-arrows'>
                            <img className='joinusMain-block-bottom-arrows-arrow1' src={ArrowImage} alt='ArrowImage' />
                            <img className='joinusMain-block-bottom-arrows-arrow2' src={ArrowImage} alt='ArrowImage' />
                            <img className='joinusMain-block-bottom-arrows-arrow3' src={ArrowImage} alt='ArrowImage' />
                            <img className='joinusMain-block-bottom-arrows-arrow4' src={ArrowImage} alt='ArrowImage' />
                            <img className='joinusMain-block-bottom-arrows-arrow5' src={ArrowImage} alt='ArrowImage' />
                            <img className='joinusMain-block-bottom-arrows-arrow6' src={ArrowImage} alt='ArrowImage' />
                            <img className='joinusMain-block-bottom-arrows-arrow7' src={ArrowImage} alt='ArrowImage' />
                            <img className='joinusMain-block-bottom-arrows-arrow8' src={ArrowImage} alt='ArrowImage' />
                        </div>
                        <div className='joinusMain-block-bottom-soc'>
                            <a className='joinusMain-block-bottom-soc-icon' href='https://twitter.com/ZIBUio' target='_blank' />
                            <a className='joinusMain-block-bottom-soc-icon' href='https://t.me/zibuio' target='_blank' />
                            <a className='joinusMain-block-bottom-soc-icon' href='https://medium.com/@zibuio' target='_blank' />
                            <a className='joinusMain-block-bottom-soc-icon' href='https://www.youtube.com/@zibuio' target='_blank' />
                            <a className='joinusMain-block-bottom-soc-icon' href='https://www.instagram.com/zibuio/' target='_blank' />
                            <a className='joinusMain-block-bottom-soc-icon' href='https://www.reddit.com/r/zibuio/' target='_blank' />
                        </div>
                    </div>
                </div>
            </div>

            <div className='joinusMainMob-block'>
                <div className="joinusMainMob-block-video">
                    <video className='video' width="100%" height="100%" loop autoPlay playsInline muted>
                        <source src={JoinUsVideo} type="video/mp4" />
                    </video>
                </div>

                <div className='joinusMainMob-block-stay'>
                    <div className='joinusMainMob-block-stay-top'>
                        <p className='joinusMainMob-block-stay-top-text'>STAY UPDATED</p>
                        <div className='joinusMainMob-block-stay-top-subscribe'>
                            <form className='joinusMainMob-block-stay-top-subscribe-wrapper' onSubmit={(e) => onSubscribe(e)}>
                                <span className="gradient-border" />

                                <div className='inputWrapper'>
                                    <input type="text" placeholder='Email Address' className='joinusMainMob-block-stay-top-subscribe-wrapper-input inp' />
                                </div>

                                <input type="text" placeholder='Email Address' className='joinusMainMob-block-stay-top-subscribe-wrapper-input' />
                                <button className='joinusMainMob-block-stay-top-subscribe-wrapper-but'>
                                    <span className="gradient-border" />
                                    <span className='text'>SUBSCRIBE</span>
                                </button>
                            </form>
                        </div>
                    </div>

                    <div className='joinusMainMob-block-stay-bottom'>
                        <div className='joinusMainMob-block-stay-bottom-word'>
                            <img src={TextImage} alt='text' className='joinusMainMob-block-stay-bottom-word-follow' />
                            <img className='joinusMainMob-block-stay-bottom-word-f1' src={F1Icon} alt='iconImage' />
                            <img className='joinusMainMob-block-stay-bottom-word-f2' src={F2Icon} alt='iconImage' />
                            <img className='joinusMainMob-block-stay-bottom-word-f3' src={F3Icon} alt='iconImage' />
                            <img className='joinusMainMob-block-stay-bottom-word-f4' src={F4Icon} alt='iconImage' />
                            <img className='joinusMainMob-block-stay-bottom-word-f5' src={F5Icon} alt='iconImage' />
                            <img className='joinusMainMob-block-stay-bottom-word-s1' src={S1Icon} alt='iconImage' />
                            <img className='joinusMainMob-block-stay-bottom-word-s2' src={S2Icon} alt='iconImage' />
                            <img className='joinusMainMob-block-stay-bottom-word-s3' src={S3Icon} alt='iconImage' />
                            <img className='joinusMainMob-block-stay-bottom-word-s4' src={S4Icon} alt='iconImage' />
                            <img className='joinusMainMob-block-stay-bottom-word-s5' src={S5Icon} alt='iconImage' />
                        </div>
                    </div>
                    <div className='joinusMainMob-block-join'>
                        <div className='joinusMainMob-block-join-top'>
                            <p className='joinusMainMob-block-join-top-join'>JOIN OUR COMMUNITY</p>
                            <a className='joinusMainMob-block-join-top-ticker' href='https://t.me/zibuio' target='_blank'>
                                <span className="gradient-border" />
                                <marquee className='marquee-joinus' direction="right" scrollamount="10">
                                    <div style={{ display: "flex", alignItems: "center" }}>
                                        JOIN OUR TELEGRAM<img src={tickerIcon} className='tickerIcon' alt='telegramIcon' />
                                        JOIN OUR TELEGRAM<img src={tickerIcon} className='tickerIcon' alt='telegramIcon' />
                                        JOIN OUR TELEGRAM<img src={tickerIcon} className='tickerIcon' alt='telegramIcon' />
                                    </div>
                                </marquee>
                            </a>
                        </div>
                    </div>

                    <div className='joinusMainMob-block-bottom'>
                        <div className='joinusMainMob-block-bottom-arrows'>
                            <img className='joinusMainMob-block-bottom-arrows-arrow1' src={ArrowImage} alt='ArrowImage' />
                            <img className='joinusMainMob-block-bottom-arrows-arrow2' src={ArrowImage} alt='ArrowImage' />
                            <img className='joinusMainMob-block-bottom-arrows-arrow3' src={ArrowImage} alt='ArrowImage' />
                            <img className='joinusMainMob-block-bottom-arrows-arrow4' src={ArrowImage} alt='ArrowImage' />
                            <img className='joinusMainMob-block-bottom-arrows-arrow5' src={ArrowImage} alt='ArrowImage' />
                            <img className='joinusMainMob-block-bottom-arrows-arrow6' src={ArrowImage} alt='ArrowImage' />
                            <img className='joinusMainMob-block-bottom-arrows-arrow7' src={ArrowImage} alt='ArrowImage' />
                            <img className='joinusMainMob-block-bottom-arrows-arrow8' src={ArrowImage} alt='ArrowImage' />
                            <img className='joinusMainMob-block-bottom-arrows-arrow9' src={ArrowImage} alt='ArrowImage' />
                            <img className='joinusMainMob-block-bottom-arrows-arrow10' src={ArrowImage} alt='ArrowImage' />
                            <img className='joinusMainMob-block-bottom-arrows-arrow11' src={ArrowImage} alt='ArrowImage' />
                            <img className='joinusMainMob-block-bottom-arrows-arrow12' src={ArrowImage} alt='ArrowImage' />
                        </div>
                        <div className='joinusMainMob-block-bottom-soc'>
                            <a className='joinusMainMob-block-bottom-soc-icon' href='https://twitter.com/ZIBUio' target='_blank' />
                            <a className='joinusMainMob-block-bottom-soc-icon' href='https://t.me/zibuio' target='_blank' />
                            <a className='joinusMainMob-block-bottom-soc-icon' href='https://medium.com/@zibuio' target='_blank' />
                            <a className='joinusMainMob-block-bottom-soc-icon' href='https://www.youtube.com/@zibuio' target='_blank' />
                            <a className='joinusMainMob-block-bottom-soc-icon' href='https://www.instagram.com/zibuio/' target='_blank' />
                            <a className='joinusMainMob-block-bottom-soc-icon' href='https://www.reddit.com/r/zibuio/' target='_blank' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
