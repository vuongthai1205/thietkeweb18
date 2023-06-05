import './index.scss';
import React, {useEffect, useRef} from "react";
import voltVideo from '../../../assets/videos/secondPage/VoltLogo.mp4';
import voltVideoMobile from '../../../assets/videos/secondPage/VoltLogoMobile.mp4';
import useViewportSize from "../../../hooks/useViewportSize";

const VoltVideo = ({ loaded }) => {
    const videoRef = useRef();
    const ViewportSize = useViewportSize();

    useEffect(() => {
      if (!loaded) return;
      videoRef.current.play();
    }, [loaded]);

    return (
        <div className='wrap-mainvideo wrap-voltvideo'>
            <video ref={videoRef} className='main-video volt-video' width="100%" height="100%" loop playsInline muted>
                <source src={ViewportSize.width > 1000 ? voltVideo : voltVideoMobile} type="video/mp4" />
            </video>
        </div>
    )
}

export default VoltVideo;
