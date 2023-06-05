import './index.scss';
import chainImage from '../../../assets/images/secondBlock/chain/Chain.png';
import chain from '../../../assets/videos/secondPage/chainWide.mp4';
import chainMob from '../../../assets/videos/secondPage/Chain.mp4';
import useViewportSize from '../../../hooks/useViewportSize';
import {useEffect, useRef, useState} from "react";
import classNames from "classnames";
import {useInViewport} from "react-in-viewport";

export default function Chain({ loaded }) {
    const [showComponent, setShowComponent] = useState(false);
    const componentRef = useRef();

    const viewportSize = useViewportSize();

    const { inViewport } = useInViewport(componentRef, { threshold: viewportSize.width > 1000 ? 0.25 : 0.1 });


  useEffect(() => {
      if (!loaded) return;
      if (!inViewport || (inViewport && showComponent)) return;
      setShowComponent(true);
    }, [inViewport, loaded]);

    return (
        <div ref={componentRef} id='chain' className={classNames("chainMain", showComponent && 'show')}>
            <div className="chainMain-text">
                <img src={chainImage} alt="chainImage" />
            </div>
            <div className="chainMain-video">
                <video className="chainMain-video-item" width="100%" height="100%" loop playsInline autoPlay muted>
                    <source src={viewportSize.width > 768 ? chain : chainMob} type="video/mp4" />
                </video>
            </div>
        </div>
    )
}
