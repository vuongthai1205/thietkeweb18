import React, {useRef, useState} from "react";
import "swiper/css";
import './index.scss';

import ArrowImg from '../../../../assets/images/adventures/arrow.svg';
import ScrollIcon from '../../../../assets/images/adventures/scrollIcon.svg';
import S1Icon from '../../../../assets/images/adventures/s1.svg'
import S2Icon from '../../../../assets/images/adventures/s2.svg'
import S3Icon from '../../../../assets/images/adventures/s3.svg'
import S4Icon from '../../../../assets/images/adventures/s4.svg'
import S5Icon from '../../../../assets/images/adventures/s5.svg'
import L5Icon from '../../../../assets/images/adventures/l5.svg'
import L4Icon from '../../../../assets/images/adventures/l4.svg'
import L3Icon from '../../../../assets/images/adventures/l3.svg'
import L2Icon from '../../../../assets/images/adventures/l2.svg'
import L1Icon from '../../../../assets/images/adventures/l.svg'
import Icon from "../../../Icon";
import {Swiper, SwiperSlide} from "swiper/react";
import useViewportSize from "../../../../hooks/useViewportSize";

const InfoBlock = () => {

    const [iconStateForward, setIconStateForward] = useState('#fff');
    const [iconStateBack, setIconStateBack] = useState('#fff');
    const swiperRef = useRef();

    const viewportSize = useViewportSize();

    return(
        <div className='infoBlock'>
            {viewportSize.width > 992 ?
            <Swiper
                ref={swiperRef}
                spaceBetween={0}
                slidesPerView={1.2}
                className='infoBlock-textWrap'
            >
                <SwiperSlide className='infoBlock-textWrap-firstText'>
                    <div>Born on the foothills of Mount Fuji, ZIBU, the youngest of the Honshu wolves is tasked with saving the pack from Yokai Fox, the nefarious nemesis of the Honshu.</div>
                </SwiperSlide>
                <SwiperSlide className='infoBlock-textWrap-firstText'>
                    <div>Guided by Kitsune, the shape-shifting spiritual leader, ZIBU follows the sounds of howling through the gates of Ashi Island where his adventure awaits…</div>
                </SwiperSlide>
            </Swiper>
            : <div className="infoBlock-textBox">
                <div className="infoBlock-textBox-text">
                    <div>Born on the foothills of Mount Fuji, ZIBU, the youngest of the Honshu wolves is tasked with saving the pack from Yokai Fox, the nefarious nemesis of the Honshu.</div>
                </div>
                <div className="infoBlock-textBox-text">
                    <div>Guided by Kitsune, the shape-shifting spiritual leader, ZIBU follows the sounds of howling through the gates of Ashi Island where his adventure awaits…</div>
                </div>
            </div>
        }



            <div className='infoBlock-illustrationWrap'>
                <div className='infoBlock-illustrationWrap-arrow'>
                    <img className='arrowImg' src={ArrowImg} alt='arrowImage'/>
                </div>
                {viewportSize.width > 992 ?
                <div className='infoBlock-illustrationWrap-funcIcon'>
                    <Icon
                      className='swiper-arrow'
                      onClick={() => swiperRef?.current?.swiper?.slidePrev()}
                      rotate={'180deg'}
                      bg={iconStateForward}
                    />
                    <Icon
                      className='swiper-arrow'
                      onClick={() => swiperRef?.current?.swiper?.slideNext()}
                      rotate={'0deg'}
                      bg={iconStateBack}
                    />
                </div>
                :
                <div className='infoBlock-scrollWrap'>
                    <div className="infoBlock-scrollWrap-icons">
                        <div className='sIcons'>
                            <img className='sIcon oneS' src={S1Icon} alt='iconImage'/>
                            <img className='sIcon twoS' src={S2Icon} alt='iconImage'/>
                            <img className='sIcon threeS' src={S3Icon} alt='iconImage'/>
                            <img className='sIcon fourS' src={S4Icon} alt='iconImage'/>
                            <img className='sIcon fiveS' src={S5Icon} alt='iconImage'/>
                        </div>
                        <div className='lIcons'>
                            <img className='lIcon oneL' src={L1Icon} alt='iconImage'/>
                            <img className='lIcon twoL' src={L2Icon} alt='iconImage'/>
                            <img className='lIcon threeL' src={L3Icon} alt='iconImage'/>
                            <img className='lIcon fourL' src={L4Icon} alt='iconImage'/>
                            <img className='lIcon fiveL' src={L5Icon} alt='iconImage'/>
                        </div>
                        <img src={ScrollIcon} className='infoBlock-word' alt='scrollIcon'/>
                    </div>
                </div>}
            </div>
            {viewportSize.width > 992 &&
            <div className='infoBlock-scrollWrap'>
                <div className="infoBlock-scrollWrap-icons">
                    <div className='sIcons'>
                        <img className='sIcon oneS' src={S1Icon} alt='iconImage'/>
                        <img className='sIcon twoS' src={S2Icon} alt='iconImage'/>
                        <img className='sIcon threeS' src={S3Icon} alt='iconImage'/>
                        <img className='sIcon fourS' src={S4Icon} alt='iconImage'/>
                        <img className='sIcon fiveS' src={S5Icon} alt='iconImage'/>
                    </div>
                    <div className='lIcons'>
                        <img className='lIcon oneL' src={L1Icon} alt='iconImage'/>
                        <img className='lIcon twoL' src={L2Icon} alt='iconImage'/>
                        <img className='lIcon threeL' src={L3Icon} alt='iconImage'/>
                        <img className='lIcon fourL' src={L4Icon} alt='iconImage'/>
                        <img className='lIcon fiveL' src={L5Icon} alt='iconImage'/>
                    </div>
                    <img src={ScrollIcon} className='infoBlock-word' alt='scrollIcon'/>
                </div>
            </div>}
        </div>
    )
}

export default InfoBlock;
