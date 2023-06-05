import React, {useState} from "react";
import './index.scss';
import BG from '../../assets/images/headerImages/headerBG.png';
import ZibuImg from '../../assets/images/headerImages/zibuImg.png'
import BtnIcon from '../../assets/images/headerImages/iconBtn.png';
import TabletBtnMenuBG from '../../assets/images/headerImages/menu-btn-bg.png';
import TabletLogo from '../../assets/images/headerImages/tablet-logo.png';
import MobileHeaderBG from '../../assets/images/headerImages/mobile-header.png';
import {NavLink} from "react-router-dom";

const Header = ({ menuOpen, toggleMenu }) => {
    return(
        <div className='header'>
            <img className='menu-btn-bg tablet' src={TabletBtnMenuBG} alt='menu-btn-bg'/>
            <img className='tablet-logo-bg tablet' src={TabletLogo} alt="tablet-logo-bg"/>
            <img className='mobile-head-bg mobile' src={MobileHeaderBG} alt="mobile-head-bg"/>
            <div className='header-wrap'>
                <div
                  className='header-wrap-menuBtn'
                  onClick={toggleMenu}
                >
                  { menuOpen ? 'close' : 'menu' }
                </div>
                <NavLink className="main-text" to='/' smooth={(el) => el.scrollIntoView({ behavior: 'smooth', block: 'start' })} >
                  <img className='header-wrap-zibuIcon' src={ZibuImg} alt='zibuImg'/>
                </NavLink>
                <img className='header-wrap-headerBG' src={BG} alt='background'/>
            </div>
            <div className='header-btnWrap'>
                <a className="header-btnWrap-btn"
                   href='https://pancakeswap.finance/swap?outputCurrency=0x580e2b3170AA36e7018eaD248298C8cc18B0f019'
                   target='_blank'
                >
                    <div className='header-btnWrap-btn-text'>buy zibu</div>
                    <img className='header-btnWrap-btn-icon' src={BtnIcon} alt='btnIcon'/>
                </a>
            </div>
        </div>
    )
}

export default Header;
