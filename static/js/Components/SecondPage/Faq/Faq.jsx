import './index.scss';
import {useEffect, useRef, useState} from 'react';
import faqText from '../../../assets/images/secondBlock/faq/Faq.png';
import faqImage from '../../../assets/images/secondBlock/faq/faq-dog.png';
import question from '../../../assets/images/secondBlock/faq/question.png';
import dog from '../../../assets/images/secondBlock/faq/dogg.png';
import one from '../../../assets/images/secondBlock/faq/01.png';
import two from '../../../assets/images/secondBlock/faq/02.png';
import three from '../../../assets/images/secondBlock/faq/03.png';
import four from '../../../assets/images/secondBlock/faq/04.png';
import five from '../../../assets/images/secondBlock/faq/05.png';
import six from '../../../assets/images/secondBlock/faq/06.png';

import icon1 from '../../../assets/images/secondBlock/faq/zibu/icon1.svg'
import icon2 from '../../../assets/images/secondBlock/faq/zibu/icon2.svg'
import icon3 from '../../../assets/images/secondBlock/faq/zibu/icon3.svg'
import icon4 from '../../../assets/images/secondBlock/faq/zibu/icon4.svg'
import icon5 from '../../../assets/images/secondBlock/faq/zibu/icon5.svg'
import icon6 from '../../../assets/images/secondBlock/faq/zibu/icon6.svg'

import lms1 from '../../../assets/images/secondBlock/faq/lms/lms1.svg'
import lms2 from '../../../assets/images/secondBlock/faq/lms/lms2.svg'
import lms3 from '../../../assets/images/secondBlock/faq/lms/lms3.svg'
import lms4 from '../../../assets/images/secondBlock/faq/lms/lms4.svg'
import lms5 from '../../../assets/images/secondBlock/faq/lms/lms5.svg'
import useViewportSize from "../../../hooks/useViewportSize";
import {useInViewport} from "react-in-viewport";
import classNames from "classnames";
import ScrollDisabler from '../../../Utils/ScrollDisabler';


export default function Faq({ loaded, isShowMenu }) {
    const [act, setAct] = useState('');
    const [modal, setModal] = useState(false);

    const [showComponent, setShowComponent] = useState(false);
    const componentRef = useRef();

    const ViewportSize = useViewportSize();


    const { inViewport } = useInViewport(componentRef, { threshold: ViewportSize.width > 1000 ? 0.2 : 0.1 });

    useEffect(() => {
        if (!loaded) return;
        if (!inViewport || (inViewport && showComponent)) return;
        setShowComponent(true);
    }, [inViewport, loaded]);

    useEffect(() => {
        if (ViewportSize.width > 992) {
            return;
        }


        if (ViewportSize.width < 1024) {
            document.body.style.pointerEvents = modal ? "none" : 'auto';
            document.body.style.overflow = modal ? "hidden" : 'scroll';
        }

        // modal
        // ? ScrollDisabler.disable()
        // : ScrollDisabler.enable()
    }, [modal]);

    useEffect(() => {
        if (!isShowMenu) return;

        document.body.style.pointerEvents = 'auto';
        setModal(false);
        setAct('');
    }, [isShowMenu]);

    const openModalZibu = () => {
        if (act === 'zibu') {
            setModal(false);
            setAct('');
        }
        else {
            setModal(true);
            setAct('zibu');
        }
    }

    const openModalLms = () => {
        if (act === 'lms') {
            setAct('');
            setModal(false);
        }
        else {
            setModal(true);
            setAct('lms')
        }
    }

    const activeZibuPage = () => {
        console.log('close mob')
        if (act === 'zibu') {
            setModal(false);
            setAct('');
        }
        else {
            setModal(true);
            setAct('zibu');
        }
    }

    const activeLmsPage = () => {
        console.log('lms')
        if (act === 'lms') {
            setModal(false);
            setAct('')
        }
        else {
            setModal(true);
            setAct('lms')
        }
    };

    return (
        <div ref={componentRef} id='faq' className={classNames('faqMain', showComponent && 'show')}>

            <div className="faqMain-text">
                <img src={faqText} alt="faqImage" />
            </div>

            <div className='faqMain-wrapper'>
                <div
                    onClick={() => openModalZibu()}
                    className={act === 'zibu'
                        ? 'faqMain-wrapper-zibuActive'
                        : 'faqMain-wrapper-zibu'}>
                    <span className={act === 'zibu'
                        ? 'gradient-borderActive'
                        : 'gradient-border'} />
                    <span className={act === 'zibu'
                        ? 'textActive'
                        : 'text'
                    }>Zibu</span>
                </div>
                <div className='faqMain-wrapper-image'>
                    <img className='faqMain-wrapper-image-pic' src={faqImage} alt="faqImage" />
                </div>

                <div
                    onClick={() => openModalLms()}
                    className={act === 'lms'
                        ? 'faqMain-wrapper-lmsActive'
                        : 'faqMain-wrapper-lms'}>
                    <span className={act === 'lms'
                        ? 'gradient-borderActive'
                        : 'gradient-border'} />
                    <span className={act === 'lms'
                        ? 'textActive'
                        : 'text'
                    }>Lms</span>
                </div>
            </div>

            <div
                className={(modal && act === 'zibu') ? 'modalWindowActive' : 'modalWindow'}>
                <div className='modalWindow-left'>
                    <div className='modalWindow-left-buttons'>
                        <div
                            onClick={() => activeZibuPage()}
                            className={act === 'zibu'
                                ? 'modalWindow-left-buttons-buttonZibuActive'
                                : 'modalWindow-left-buttons-buttonZibu'}>
                            <span className={act === 'zibu'
                                ? 'gradient-borderLongActive'
                                : 'gradient-borderLong'} />
                            <span className={act === 'zibu'
                                ? 'textLongActive'
                                : 'textLong'
                            }>Zibu</span>
                        </div>
                        <div
                            onClick={() => activeLmsPage()}
                            className={act === 'lms'
                                ? 'modalWindow-left-buttons-buttonLmsActive'
                                : 'modalWindow-left-buttons-buttonLms'}>
                            <span className={act === 'lms'
                                ? 'gradient-borderLongActive'
                                : 'gradient-borderLong'} />
                            <span className={act === 'lms'
                                ? 'textLongActive'
                                : 'textLong'
                            }>Lms</span>
                        </div>
                    </div>


                    <div className='modalWindow-left-images'>
                        {/* <div className='modalWindow-left-images-imageQuestion'>
                            <img src={question} alt="question" />
                        </div> */}
                        <div className='modalWindow-left-images-imageDog'>
                            <img src={dog} alt="dog" />
                        </div>
                    </div>
                </div>

                <div className='modalWindow-second'>

                    <div className='modalWindow-second-buttonsMob'>
                        <div
                            onClick={() => activeZibuPage()}
                            className={act === 'zibu'
                                ? 'modalWindow-second-buttonsMob-buttonMobZibuActive'
                                : 'modalWindow-second-buttonsMob-buttonMobZibu'}>
                            <span className={act === 'zibu'
                                ? 'gradient-borderLongActive'
                                : 'gradient-borderLong'} />
                            <span className={act === 'zibu'
                                ? 'textLongActive'
                                : 'textLong'
                            }>Zibu</span>
                        </div>
                        <div
                            onClick={() => activeLmsPage()}
                            className={act === 'lms'
                                ? 'modalWindow-second-buttonsMob-buttonMobLmsActive'
                                : 'modalWindow-second-buttonsMob-buttonMobLms'}>
                            <span className={act === 'lms'
                                ? 'gradient-borderLongActive'
                                : 'gradient-borderLong'} />
                            <span className={act === 'lms'
                                ? 'textLongActive'
                                : 'textLong'
                            }>Lms</span>
                        </div>
                    </div>

                    <div className='modalWindow-second-block'>
                        <div className='modalWindow-second-block-left'>
                            <div className="modalWindow-second-block-left-cell">
                                <img className='modalWindow-second-block-left-topImage' src={one} alt="one" />
                            </div>
                            <div className="modalWindow-second-block-left-cell">
                                <img className='modalWindow-second-block-left-bottomImage' src={icon1} alt="one" />
                            </div>
                        </div>

                        <div className='modalWindow-second-block-right'>
                            <div className='modalWindow-second-block-right-texts'>
                                <p className='modalWindow-second-block-right-texts-title'>How do I qualify for the Last Man Standing bonus?</p>
                                <p className='modalWindow-second-block-right-texts-text'>Anyone who holds at least one billion $ZIBU and doesn't sell any $ZIBU during that cycle will qualify for the bonus payout.</p>
                            </div>
                        </div>
                    </div>

                    <div className='modalWindow-second-block'>
                        <div className='modalWindow-second-block-left'>
                            <div className="modalWindow-second-block-left-cell">
                                <img className='modalWindow-second-block-left-topImage' src={two} alt="two" />
                            </div>
                            <div className="modalWindow-second-block-left-cell">
                                <img className='modalWindow-second-block-left-bottomImage' src={icon2} alt="two" />
                            </div>


                        </div>

                        <div className='modalWindow-second-block-right'>
                            <div className='modalWindow-second-block-right-texts'>
                                <p className='modalWindow-second-block-right-texts-title'>What is ZIBU?</p>
                                <p className='modalWindow-second-block-right-texts-text'>By linking the excitement of a Play-to-Earn game with the rewards of a multi-reflection token, ZIBU introduces VOLT, the Voters Only Loyalty Treasury, a new rewards system that puts the power in the hands of the holder.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className='modalWindow-second-block'>
                        <div className='modalWindow-second-block-left'>
                            <div className="modalWindow-second-block-left-cell">
                                <img className='modalWindow-second-block-left-topImage' src={three} alt="three" />
                            </div>
                            <div className="modalWindow-second-block-left-cell">
                                <img className='modalWindow-second-block-left-bottomImage' src={icon2} alt="three" />
                            </div>
                        </div>

                        <div className='modalWindow-second-block-right'>
                            <div className='modalWindow-second-block-right-texts'>
                                <p className='modalWindow-second-block-right-texts-title'>How can I buy ZIBU?</p>
                                <p className='modalWindow-second-block-right-texts-text'>Please visit our How to Buy section for directions on how to purchase ZIBU tokens.</p>
                            </div>
                        </div>
                    </div>

                    <div className='modalWindow-second-block'>
                        <div className='modalWindow-second-block-left'>
                            <div className="modalWindow-second-block-left-cell">
                                <img className='modalWindow-second-block-left-topImage' src={four} alt="four" />
                            </div>
                            <div className="modalWindow-second-block-left-cell">
                                <img className='modalWindow-second-block-left-bottomImage' src={icon4} alt="four" />
                            </div>
                        </div>

                        <div className='modalWindow-second-block-right'>
                            <div className='modalWindow-second-block-right-texts'>
                                <p className='modalWindow-second-block-right-texts-title'>When will I receive my reflections?</p>
                                <p className='modalWindow-second-block-right-texts-text'>The BUSD reflections are distributed on a per-transaction basis. Rewards may take longer to process as they are dependent on trading volume.</p>
                            </div>
                        </div>
                    </div>

                    <div className='modalWindow-second-block'>
                        <div className='modalWindow-second-block-left'>
                            <div className="modalWindow-second-block-left-cell">
                                <img className='modalWindow-second-block-left-topImage' src={five} alt="four" />
                            </div>
                            <div className="modalWindow-second-block-left-cell">
                                <img className='modalWindow-second-block-left-bottomImage' src={icon5} alt="four" />
                            </div>
                        </div>

                        <div className='modalWindow-second-block-right'>
                            <div className='modalWindow-second-block-right-texts'>
                                <p className='modalWindow-second-block-right-texts-title'>What is the game about?</p>
                                <p className='modalWindow-second-block-right-texts-text'>Adventures of ZIBU is a 3D voxel free-roam play-to-earn game where players are able to explore, go on missions, customize their character, and much more. More details about the gameplay will be shared closer to the release of the game.</p>
                            </div>
                        </div>
                    </div>

                    <div className='modalWindow-second-block'>
                        <div className='modalWindow-second-block-left'>
                            <div className="modalWindow-second-block-left-cell">
                            <img className='modalWindow-second-block-left-topImage' src={six} alt="six" />
                            </div>
                            <div className="modalWindow-second-block-left-cell">
                            <img className='modalWindow-second-block-left-bottomImage' src={icon6} alt="six" />
                            </div>
                        </div>

                        <div className='modalWindow-second-block-right'>
                            <div className='modalWindow-second-block-right-texts'>
                                <p className='modalWindow-second-block-right-texts-title'>When is the game coming?</p>
                                <p className='modalWindow-second-block-right-texts-text'>Updates about the release of Adventures of ZIBU will be shared in our community chat. <a href="https://t.me/zibuio" className="modalWindow-second-block-right-texts-link" target="_blank">Join here</a></p>
                            </div>
                        </div>
                    </div>


                </div>

            </div>

            <div
                className={(modal && act === 'lms') ? 'modalWindowActive' : 'modalWindow'}>
                <div className='modalWindow-left'>
                    <div className='modalWindow-left-buttons'>
                        <div
                            onClick={() => activeZibuPage()}
                            className={act === 'zibu'
                                ? 'modalWindow-left-buttons-buttonZibuActive'
                                : 'modalWindow-left-buttons-buttonZibu'}>
                            <span className={act === 'zibu'
                                ? 'gradient-borderLongActive'
                                : 'gradient-borderLong'} />
                            <span className={act === 'zibu'
                                ? 'textLongActive'
                                : 'textLong'
                            }>Zibu</span>
                        </div>
                        <div
                            onClick={() => activeLmsPage()}
                            className={act === 'lms'
                                ? 'modalWindow-left-buttons-buttonLmsActive'
                                : 'modalWindow-left-buttons-buttonLms'}>
                            <span className={act === 'lms'
                                ? 'gradient-borderLongActive'
                                : 'gradient-borderLong'} />
                            <span className={act === 'lms'
                                ? 'textLongActive'
                                : 'textLong'
                            }>Lms</span>
                        </div>
                    </div>


                    <div className='modalWindow-left-images'>
                        {/* <div className='modalWindow-left-images-imageQuestion'>
                            <img src={question} alt="question" />
                        </div> */}
                        <div className='modalWindow-left-images-imageDog'>
                            <img src={dog} alt="dog" />
                        </div>

                    </div>
                </div>



                <div className='modalWindow-second'>
                    <div className='modalWindow-second-buttonsMob'>
                        <div
                            onClick={() => activeZibuPage()}
                            className={act === 'zibu'
                                ? 'modalWindow-second-buttonsMob-buttonMobZibuActive'
                                : 'modalWindow-second-buttonsMob-buttonMobZibu'}>
                            <span className={act === 'zibu'
                                ? 'gradient-borderLongActive'
                                : 'gradient-borderLong'} />
                            <span className={act === 'zibu'
                                ? 'textLongActive'
                                : 'textLong'
                            }>Zibu</span>
                        </div>
                        <div
                            onClick={() => activeLmsPage()}
                            className={act === 'lms'
                                ? 'modalWindow-second-buttonsMob-buttonMobLmsActive'
                                : 'modalWindow-second-buttonsMob-buttonMobLms'}>
                            <span className={act === 'lms'
                                ? 'gradient-borderLongActive'
                                : 'gradient-borderLong'} />
                            <span className={act === 'lms'
                                ? 'textLongActive'
                                : 'textLong'
                            }>Lms</span>
                        </div>
                    </div>
                    <div className='modalWindow-second-block'>
                        <div className='modalWindow-second-block-left'>
                            <div className="modalWindow-second-block-left-cell">
                            <img className='modalWindow-second-block-left-topImage' src={one} alt="one" />
                            </div>
                            <div className="modalWindow-second-block-left-cell">
                            <img className='modalWindow-second-block-left-bottomImage' src={lms1} alt="one" />
                            </div>
                        </div>

                        <div className='modalWindow-second-block-right'>
                            <div className='modalWindow-second-block-right-texts'>
                                <p className='modalWindow-second-block-right-texts-title'>How do I qualify for the Last Man Standing bonus?</p>
                                <p className='modalWindow-second-block-right-texts-text'>Anyone who holds at least one billion $ZIBU and doesn't sell any $ZIBU during that cycle will qualify for the bonus payout.</p>
                            </div>
                        </div>
                    </div>

                    <div className='modalWindow-second-block'>
                        <div className='modalWindow-second-block-left'>
                            <div className="modalWindow-second-block-left-cell">
                            <img className='modalWindow-second-block-left-topImage' src={two} alt="two" />
                            </div>
                            <div className="modalWindow-second-block-left-cell">
                            <img className='modalWindow-second-block-left-bottomImage' src={lms2} alt="two" />
                            </div>
                        </div>

                        <div className='modalWindow-second-block-right'>
                            <div className='modalWindow-second-block-right-texts'>
                                <p className='modalWindow-second-block-right-texts-title'>When will I receive my Last Man Standing bonus?</p>
                                <p className='modalWindow-second-block-right-texts-text'>LMS pays out every Friday to all qualified holders.</p>
                            </div>
                        </div>
                    </div>

                    <div className='modalWindow-second-block'>
                        <div className='modalWindow-second-block-left'>
                            <div className="modalWindow-second-block-left-cell">
                            <img className='modalWindow-second-block-left-topImage' src={three} alt="three" />
                            </div>
                            <div className="modalWindow-second-block-left-cell">
                            <img className='modalWindow-second-block-left-bottomImage' src={lms3} alt="three" />
                            </div>


                        </div>

                        <div className='modalWindow-second-block-right'>
                            <div className='modalWindow-second-block-right-texts'>
                                <p className='modalWindow-second-block-right-texts-title'>When can I get into Last Man Standing?</p>
                                <p className='modalWindow-second-block-right-texts-text'>If you hold over one billion $ZIBU, you will be automatically qualified at the start of each cycle.</p>
                            </div>
                        </div>
                    </div>

                    <div className='modalWindow-second-block'>
                        <div className='modalWindow-second-block-left'>
                            <div className="modalWindow-second-block-left-cell">
                            <img className='modalWindow-second-block-left-topImage' src={four} alt="four" />
                            </div>
                            <div className="modalWindow-second-block-left-cell">
                            <img className='modalWindow-second-block-left-bottomImage' src={lms4} alt="four" />
                            </div>


                        </div>


                        <div className='modalWindow-second-block-right'>
                            <div className='modalWindow-second-block-right-texts'>
                                <p className='modalWindow-second-block-right-texts-title'>What happens if I sell any of my $ZIBU tokens during the cycle?</p>
                                <p className='modalWindow-second-block-right-texts-text'>Anyone who sells any amount of $ZIBU tokens, even if you still hold over one billion, will be disqualified for the current payment cycle</p>
                            </div>
                        </div>
                    </div>

                    <div className='modalWindow-second-block'>
                        <div className='modalWindow-second-block-left'>
                            <div className="modalWindow-second-block-left-cell">
                            <img className='modalWindow-second-block-left-topImage' src={five} alt="four" />
                            </div>
                            <div className="modalWindow-second-block-left-cell">
                            <img className='modalWindow-second-block-left-bottomImage' src={lms5} alt="four" />
                            </div>
                        </div>

                        <div className='modalWindow-second-block-right'>
                            <div className='modalWindow-second-block-right-texts'>
                                <p className='modalWindow-second-block-right-texts-title'>If I buy more than one billion $ZIBU, will it increase how much I will get from LMS?</p>
                                <p className='modalWindow-second-block-right-texts-text'>No, LMS is a fair split between all qualified holders.</p>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    )
}
