import React from "react";
import './index.scss';

const AboutToken = () => {
    return(
        <div className='aboutToken'>
            <div className='aboutToken-infoBlock'>
                <div className='aboutToken-infoBlock-title'>REFLECTIONS</div>
                <div className='aboutToken-infoBlock-text'>
                  4% of every buy and sell is distributed to ZIBU holders in the form of BUSD.
                </div>
            </div>
            <div className='aboutToken-infoBlock'>
                <div className='aboutToken-infoBlock-title'>LIQUIDITY</div>
                <div className='aboutToken-infoBlock-text'>
                  1% of every buy and sell is automatically contributed to the liquidity pool.
                </div>
            </div>
            <div className='aboutToken-infoBlock'>
                <div className='aboutToken-infoBlock-title'>PROJECT DEVELOPMENT</div>
                <div className='aboutToken-infoBlock-text'>
                  2% of every trade is used for development.
                </div>
            </div>
            <div className='aboutToken-infoBlock'>
                <div className='aboutToken-infoBlock-title'>LMS</div>
                <div className='aboutToken-infoBlock-text'>
                    2% of all trades are used for the weekly LMS rewards which
                    are distributed in the token that LMS holders choose for
                    that week using the Volt system.
                </div>
            </div>
            <div className='aboutToken-infoBlock'>
                <div className='aboutToken-infoBlock-title'>BUY BACK & BURN</div>
                <div className='aboutToken-infoBlock-text'>
                  1% of all trades are used to Buy Back & Burn S1.
                </div>
            </div>
            <div className='aboutToken-infoBlock'>
                <div className="inner-wrap">
                    <div className='aboutToken-infoBlock-circle first' />
                    <div className='aboutToken-infoBlock-circle second' />
                    <div className='aboutToken-infoBlock-circle third' />
                    <div className='aboutToken-infoBlock-circle fourth' />
                    <div className='aboutToken-infoBlock-circle fifth' />
                    <div className='aboutToken-infoBlock-circle sixth' />
                </div>
            </div>

        </div>
    )
}

export default AboutToken;
