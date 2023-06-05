import React, {useEffect, useRef, useState} from "react";
import './index.scss';
import SecondVideo from '../../../../assets/videos/adventures/Island_1.mp4';
import ThirdVideo from '../../../../assets/videos/adventures/Island_2.mp4';
import FirstVideo from '../../../../assets/videos/adventures/Island_3.mp4';
import SecondVideoMobile from '../../../../assets/videos/adventures/Island_1Mobile.mp4';
import ThirdVideoMobile from '../../../../assets/videos/adventures/Island_2Mobile.mp4';
import FirstVideoMobile from '../../../../assets/videos/adventures/Island_3Mobile.mp4';
import {useInViewport} from "react-in-viewport";
import classNames from "classnames";
// import ScrollDisabler from "../../../../Utils/ScrollDisabler";
import useViewportSize from "../../../../hooks/useViewportSize";

const VideoPresentation = ({ loaded }) => {
    const [wasStarted, setWasStarted] = useState(false);
    const [showComponent, setShowComponent] = useState(false);
    const [afterScrolled, setAfterScrolled] = useState(false);
    const [activeStep, setActiveStep] = useState(0);
    const [activeTextStep, setActiveTextStep] = useState(0);
    const [state, setState] = useState('');
    const wrapComponentRef = useRef();
    const componentRef = useRef();
    const shellInsideRef = useRef();

    const ViewportSize = useViewportSize();

    const { inViewport } = useInViewport(wrapComponentRef, { threshold: 0.4 });
    const { inViewport: inViewport100 } = useInViewport(wrapComponentRef, { threshold: 0.7 });

    useEffect(() => {
        // console.log('inViewport', inViewport, showComponent, activeStep);
        if (!loaded) return;
        if (!inViewport || (inViewport && showComponent)) return;
        if (wasStarted) return;

        const boundingRect = wrapComponentRef.current.getBoundingClientRect();
        // if (boundingRect.top < 0) return;


        // document.getElementsByClassName('App')[0].style.height =
        //   window.scrollY + boundingRect.bottom + 'px';
    }, [inViewport]);

    useEffect(() => {
        // console.log('inViewport100', inViewport100, activeStep);
        if (!loaded) return;
        if (!inViewport100) return;
        if (wasStarted) return;

        setWasStarted(true);
        // ScrollDisabler.disable();

        if (!wasStarted) {
            setShowComponent(true);
            setActiveStep(0);
            playVideoById(0);

            componentRef.current.classList.add('to-small');
            setState('to-small');


            setTimeout(() => {
                // setShowedPresentVideo(true);
            }, 1000);
        }

    }, [inViewport100]);

    const playVideoById = (id) => {
        Array.from(shellInsideRef.current.children).forEach(v => v.pause());
        shellInsideRef.current.children[id].play();
    }

    const onTransitionEnd = (e) => {
        // return;
        const classList = e.target.classList;

        if (e.target !== shellInsideRef.current) return;
        if (e.propertyName !== 'transform') return;


        if (state === 'to-small') {
            setState('to-big');
            componentRef.current.classList.add('to-big');
            // componentRef.current.classList.add('show-video');
        }
        else if (state === 'to-big') {
            if (afterScrolled) {
                setActiveStep(0);
                setActiveTextStep(currActiveTextStep => {
                    return currActiveTextStep === 2 ? 0 : currActiveTextStep + 1;
                });
                setAfterScrolled(false);
                shellInsideRef.current.classList.add('bordered');
                setTimeout(() => {
                    playVideoById(activeStep === 2 ? 0 : activeStep + 1);
                    shellInsideRef.current.classList.remove('bordered');
                    setActiveStep(activeTextStep === 2 ? 0 : activeTextStep + 1);
                    componentRef.current.classList.add('to-big');
                }, 2000);

                return;
            }

            const onScroll = (e) => {
                // if (!e.target.closest('.wrap-video-presentation')) return;
                // if (e.deltaY < 0) return;
                setAfterScrolled(true);
                componentRef.current.classList.remove('to-big');
                // setActiveStep(2);
                // setState('to-small');
                // document.removeEventListener('mousewheel', onScroll);
                // document.removeEventListener('touchstart', onScroll);
            };

            // if (activeStep < 3) {
                setTimeout(onScroll, 3000);
                // document.addEventListener('mousewheel', onScroll);
                // document.addEventListener('touchstart', onScroll);
            // }
            // else {
            //     ScrollDisabler.enable();
            //     document.getElementsByClassName('App')[0].style.height = 'auto';
            // }
        }
    }

    return(
        <div ref={wrapComponentRef} className='wrap-video-presentation'>
            <div
              ref={componentRef}
              className='videoPresentation'
            >
                <div
                  ref={shellInsideRef}
                  className={classNames("shellInside")}
                  onTransitionEnd={(e) => onTransitionEnd(e)}
                >
                    <video
                      className={classNames('firstVideo', activeStep === 0 && 'active')}
                      src={ViewportSize.width > 700 ? FirstVideo : FirstVideoMobile}
                      width="100%" height="100%"
                      loop autoPlay playsInline muted
                    />
                    <video
                      className={classNames('secondVideo', activeStep === 1 && 'active')}
                      src={ViewportSize.width > 700 ? SecondVideo : SecondVideoMobile}
                      width="100%" height="100%"
                      loop autoPlay playsInline muted
                    />
                    <video
                      className={classNames('thirdVideo', activeStep === 2 && 'active')}
                      src={ViewportSize.width > 700 ? ThirdVideo : ThirdVideoMobile}
                      width="100%" height="100%"
                      loop autoPlay playsInline muted
                    />
                </div>
                <div className='textBlock'>
                    <div className={classNames('textWrap first', activeTextStep === 0 && 'active')}>
                        <div className='title'>Furasato Village</div>
                        <div className='text'>Customize ZIBU, replenish, and participate in trading.</div>
                    </div>
                    <div className={classNames('textWrap second', activeTextStep === 1 && 'active')}>
                        <div className='title'>The Cabin</div>
                        <div className='text'>Put together clues to unlock the mysteries of Ashi Island.</div>
                    </div>
                    <div className={classNames('textWrap third', activeTextStep === 2 && 'active')}>
                        <div className='title'>Caves of Kindan</div>
                        <div className='text'>Venture off and discover new lands by navigating the Kodai Ruins.</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default VideoPresentation;
