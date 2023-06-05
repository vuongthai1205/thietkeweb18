import React, {useEffect, useId, useRef, useState} from "react";
import './index.scss';
import classNames from "classnames";
import MenuData from "../../InfoData/menu";
import { HashLink as NavLink } from 'react-router-hash-link';
import ScrollDisabler from "../../Utils/ScrollDisabler";
import PDF_bluepaper from '../../assets/Zibu Bluepaper.pdf';

const Menu = ({ open, setShow, setLoaded }) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const menuRef = useRef();

    // const navigate = useNavigate();

    useEffect(() => {
      if (!menuRef.current) return;

      menuRef.current.addEventListener('click', (e) => {
        if (e.target.tagName === 'A') {
          if ((window.location.pathname.includes('volt') && !e.target.href.includes('volt')) ||
              !(window.location.pathname.includes('volt') && e.target.href.includes('volt'))
          ) {
            setLoaded(false);
            setTimeout(() => setLoaded(true), 100);
          }
          ScrollDisabler.enable();
          // document.getElementsByClassName('App')[0].style.height = 'auto';
          setShow(false);
        }
      });
    }, [menuRef]);

    useEffect(() => {
      const totalElements = 4;
      const interv = setInterval(() => {
        setActiveIndex(currVal => (currVal + 1) < totalElements ? ++currVal : 0);
      }, 1000);

      return () => {
        clearInterval(interv);
      }
    }, []);

    useEffect(() => {
      if (open) ScrollDisabler.disable();
      else ScrollDisabler.enable();
    }, [open]);

    const scrollParams = { behavior: 'smooth', block: 'start' };

    return(
        <div ref={menuRef} className={classNames('menu', open && 'open')}>
            <div className="wrap-menu-content container">
              <div className='menu-row top-line'>
                <span className='top-number'>1</span>
              </div>
              <div className='menu-row main-row'>
                <NavLink className="main-text" smooth={(el) => el.scrollIntoView(scrollParams)} to='/'>ZIBU</NavLink>
                <div className='wrap-images'>
                  {[0,0,0,0].map((val, index) => (
                    <div key={Math.random()} className={classNames('wrap-anim point3', activeIndex === index && 'active')} />
                  ))}
                </div>
              </div>
              <hr/>

              {/* MOBILE LINKS */}
              <div className='menu-link mobile'>
                <NavLink className='link' smooth={(el) => el.scrollIntoView(scrollParams)} to={MenuData.zibu.adventures.link}>{MenuData.zibu.adventures.text}</NavLink>
              </div>
              <div className='menu-link mobile'>
                <NavLink className='link' smooth={(el) => el.scrollIntoView(scrollParams)} to={MenuData.zibu.tokenomics.link}>{MenuData.zibu.tokenomics.text}</NavLink>
              </div>
              <div className='menu-link mobile'>
                <NavLink className='link' smooth={(el) => el.scrollIntoView(scrollParams)} to={MenuData.zibu.howBuy.link}>{MenuData.zibu.howBuy.text}</NavLink>
              </div>
              <div className='menu-link mobile'>
                <NavLink className='link' smooth={(el) => el.scrollIntoView(scrollParams)} to={MenuData.zibu.joinUs.link}>{MenuData.zibu.joinUs.text}</NavLink>
              </div>
              <div className='menu-link mobile'>
                <a className='link' href={PDF_bluepaper} target="_blank">{MenuData.zibu.bluepaper.text}</a>
              </div>
              {/* ============ */}

              <div className='menu-row no-mobile'>
                <span className='menu-link'>
                  <NavLink className='link' smooth={(el) => el.scrollIntoView(scrollParams)} to={MenuData.zibu.adventures.link}>{MenuData.zibu.adventures.text}</NavLink>
                </span>
                <span className='menu-link'>
                  <NavLink className='link' smooth={(el) => el.scrollIntoView(scrollParams)} to={MenuData.zibu.tokenomics.link}>{MenuData.zibu.tokenomics.text}</NavLink>
                </span>
                <div className='wrap-images second'>
                  {[0,0,0,0].map((val, index) => (
                    <div key={index} className='point-square' />
                  ))}
                </div>
              </div>
              <hr className='no-mobile'/>
              <div className='menu-row no-mobile zibu-second'>
                <span className='menu-link'>
                  <NavLink className='link' smooth={(el) => el.scrollIntoView(scrollParams)} to={MenuData.zibu.howBuy.link}>{MenuData.zibu.howBuy.text}</NavLink>
                </span>
                <span className='menu-link'>
                  <NavLink className='link' smooth={(el) => el.scrollIntoView(scrollParams)} to={MenuData.zibu.joinUs.link}>{MenuData.zibu.joinUs.text}</NavLink>
                </span>
                <span className='menu-link bluepaper'>
                  <a className='link' href={PDF_bluepaper} target="_blank">{MenuData.zibu.bluepaper.text}</a>
                </span>
              </div>

              <div className='menu-row top-line'>
                <span className='top-number'>2</span>
              </div>
              <div className='menu-row main-row'>
                <NavLink className="main-text" smooth={(el) => el.scrollIntoView(scrollParams)} to='/volt'>VOLT</NavLink>
                <div className='wrap-images'>
                  {[0,0,0,0].map((val, index) => (
                    <div key={Math.random()} className={classNames('wrap-anim line3', activeIndex === index && 'active')} />
                  ))}
                </div>
              </div>
              <hr/>

              {/* MOBILE LINKS */}
              <div className='menu-link mobile'>
                <NavLink className='link' smooth={(el) => el.scrollIntoView(scrollParams)} to={MenuData.volt.payment.link}>{MenuData.volt.payment.text}</NavLink>
              </div>
              <div className='menu-link mobile'>
                <NavLink className='link' smooth={(el) => el.scrollIntoView(scrollParams)} to={MenuData.volt.chain.link}>{MenuData.volt.chain.text}</NavLink>
              </div>
              <div className='menu-link mobile'>
                <a className='link' href={MenuData.volt.dashboard.link} target="_blank">{MenuData.volt.dashboard.text}</a>
              </div>
              <div className='menu-link mobile'>
                <NavLink className='link' smooth={(el) => el.scrollIntoView(scrollParams)} to={MenuData.volt.roadmap.link}>{MenuData.volt.roadmap.text}</NavLink>
              </div>
              <div className='menu-link mobile'>
                <NavLink className='link' smooth={(el) => el.scrollIntoView(scrollParams)} to={MenuData.volt.faq.link}>{MenuData.volt.faq.text}</NavLink>
              </div>
              <div className='menu-link mobile'>
                <NavLink className='link' smooth={(el) => el.scrollIntoView(scrollParams)} to={MenuData.volt.joinUs.link}>{MenuData.volt.joinUs.text}</NavLink>
              </div>
              {/* ============ */}

              <div className='menu-row no-mobile'>
                <span className='menu-link'>
                  <NavLink className='link'smooth={(el) => el.scrollIntoView(scrollParams)} to={MenuData.volt.payment.link}>{MenuData.volt.payment.text}</NavLink>
                </span>
                <span className='menu-link no-50p'>
                  <a className='link' href={MenuData.volt.dashboard.link}  target="_blank">{MenuData.volt.dashboard.text}</a>
                </span>
                <div className='wrap-images second'>
                  <div className='many-circles' />
                </div>
              </div>
              <hr className='no-mobile'/>
              <div className='menu-row last-row no-mobile'>
                <span className='menu-link w-17p'>
                  <NavLink className='link' smooth={(el) => el.scrollIntoView(scrollParams)} to={MenuData.volt.roadmap.link}>{MenuData.volt.roadmap.text}</NavLink>
                </span>
                <span className='menu-link w-17p'>
                  <NavLink className='link' smooth={(el) => el.scrollIntoView(scrollParams)} to={MenuData.volt.faq.link}>{MenuData.volt.faq.text}</NavLink>
                </span>
                <span className='menu-link w-17p'>
                  <NavLink className='link' smooth={(el) => el.scrollIntoView(scrollParams)} to={MenuData.volt.joinUs.link}>{MenuData.volt.joinUs.text}</NavLink>
                </span>
              </div>
            </div>
        </div>
    )
}

export default Menu;
