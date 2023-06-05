import React, {useEffect, useRef, useState} from "react";
import { useInViewport } from 'react-in-viewport';
import './index.scss';
import InfoBlock from "./infoBlock";
import HouseImage from '../../../assets/images/adventures/imageHouse.jpg';
import TitleImage from '../../../assets/images/adventures/titleImage.png';
import VideoPresentation from "./VideoPresentation";
import classNames from "classnames";
import useViewportSize from "../../../hooks/useViewportSize";

const Adventures = ({ loaded }) => {
    const [showAdvTop, setShowAdvTop] = useState(false);
    const advTopRef = useRef();
    const ViewportSize = useViewportSize();

    const { inViewport: advTopInViewPort } = useInViewport(advTopRef, { threshold: ViewportSize.width > 800 ? 0.2 : 0.1 });

    useEffect(() => {
      if (!loaded) return;
      if (!advTopInViewPort || (advTopInViewPort && showAdvTop)) return;
      setShowAdvTop(true);
    }, [advTopInViewPort, loaded]);

    return (
        <div id='adventures' className={classNames('adventures', showAdvTop && 'show')}>
            <div className='adventures-title'>
                <img src={TitleImage} alt='titleImage'/>
            </div>
            <div ref={advTopRef} className="adventures-infoWrap">
                <InfoBlock />
                <div className='adventures-infoWrap-image border'>
                    <img src={HouseImage} alt='houseImage' />
                </div>
            </div>
            <VideoPresentation loaded={loaded} />
        </div>
    )
}

export default Adventures;
