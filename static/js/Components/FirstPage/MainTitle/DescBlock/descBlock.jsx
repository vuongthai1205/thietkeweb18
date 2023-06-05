import React, {useEffect, useRef, useState} from "react";
import './index.scss';
import Button from "../../../Button";
import OvalIcon from '../../../../assets/images/mainBlock/oval.svg'
import useViewportSize from "../../../../hooks/useViewportSize";
import axios from "axios";

// ✅ You can use a Quick one-liner hack
// const ms = 54000000;
// console.log(new Date(ms).toISOString().slice(11, 19)); // 👉️ 15:00:00

// ✅ Or create a reusable function
function padTo2Digits(num) {
    return num.toString().padStart(2, '0');
}

function convertMsToTime(milliseconds) {
    let seconds = Math.floor(milliseconds / 1000);
    let minutes = Math.floor(seconds / 60);
    let hours = Math.floor(minutes / 60);
    let days = Math.floor(hours / 24);

    seconds = seconds % 60;
    minutes = minutes % 60;
    hours = hours % 24;

    // return `${days}D:${padTo2Digits(hours)}H:${padTo2Digits(minutes)}M:${padTo2Digits(seconds)}S`;
    return `${days} D : ${padTo2Digits(hours)}H : ${padTo2Digits(minutes)}M`;
}


const DescBlock = () => {
    const [currTime, setCurrTime] = useState();
    const [fridayTime, setFridayTime] = useState();

    useEffect(() => {
        if (fridayTime - currTime < 0) {
            setFridayTime(currTime + 7 * 24 * 60 * 60 * 1000 + 59000); // 60000
        }
    }, [currTime]);


    useEffect(() => {
        axios.get('https://worldtimeapi.org/api/timezone/Europe/Kiev')
            .then(response => {
              const utcTime = new Date(response.data.utc_datetime);
                const apiTime = utcTime.getTime();
                let day_of_week = utcTime.getUTCDay();
                if (day_of_week === 0) day_of_week = 7;
                setCurrTime(apiTime);

                const lastDays = (8 - day_of_week < 3) ? 8 - day_of_week + 3 : 5 - 1 - day_of_week;
                const hours = lastDays * 24 + 21 + (24 - response.data.utc_datetime.slice(11,13) - 1);
                const minutes = 60 - response.data.utc_datetime.slice(14,16);
                const sec = 60 - response.data.utc_datetime.slice(17,19);

                const last_time_millisec = hours * 60 * 60 * 1000 + minutes * 60 * 1000 + sec * 1000;

                setFridayTime(apiTime + last_time_millisec);

                setInterval(() => {
                    setCurrTime(stateCurrTime => stateCurrTime + 1000)  //1000
                }, 1000);
            })
    }, []);

    const wave2Ref = useRef();

    //*new updates
    const ViewportSize = useViewportSize();  //*new updates | створив новий useViewportSize хук.

    return(
        <>
            <div className='descBlock'>
                {ViewportSize.width > 650 && //*new updates | додати умову на ширину вьюпорта
                <div className='descBlock-first'>
                    <div className='descBlock-first-timer'>
                        <div className='timeWrap'>
                            {/*<div className='time'>{nowtime.day}d : {nowtime.hour}H : {59 - nowtime.minute}M</div>*/}
                            <div className='time'>
                                {convertMsToTime(fridayTime - currTime)}
                                {/*{new Date(fridayTime).getUTCDay() - new Date(currTime).getUTCDay()}d :*/}
                                {/*{new Date(fridayTime).getUTCHours() - new Date(currTime).getUTCHours()}H :*/}
                                {/*{new Date(fridayTime).getUTCMinutes() - new Date(currTime).getUTCMinutes()}M*/}
                            </div>
                        </div>
                    </div>
                    <div className='descBlock-first-videoWrap'>
                        <img
                          className='descBlock-first-videoWrap-video'
                          src={OvalIcon}
                          alt='ovalIcon'
                          onTransitionEnd={() => wave2Ref.current.classList.add('videoVisible')}
                        />
                        <div className='video2Wrap'>
                            <img ref={wave2Ref} className='video2' src={OvalIcon} alt='ovalImage' />
                        </div>

                    </div>
                </div>}
                <div className='descBlock-second'>
                    <div className='descBlock-second-titleWrap'>
                        <div className='descBlock-second-titleWrap-title'>
                            <div className='firstText'>the cutest</div>
                        </div>
                        <div className='descBlock-second-titleWrap-title'>
                            <div className='secondText'>
                                &nbsp; earner on BSC
                            </div>
                        </div>
                    </div>
                    <div className='descBlock-second-description'>
                        <div className='text'>
                            By linking the excitement of a Play-to-Earn
                            game with the rewards of a multi-reflection token,
                            ZIBU introduces VOLT, the Voters Only Loyalty Treasury,
                            a new rewards system that puts the power in the hands
                            of the holder.
                        </div>
                    </div>
                    {ViewportSize.width >= 993 &&  //*new updates | додати умову на ширину вьюпорта
                    <div className='descBlock-second-btnWrap'>
                        <a className='no-decore'
                           href="https://poocoin.app/tokens/0x580e2b3170AA36e7018eaD248298C8cc18B0f019"
                           target='_blank'
                        >
                            <Button className='priceBTN' text='price/chart' />
                        </a>
                        <Button
                          className='howToBuyBTN'
                          text='how to buy zibu'
                          onClick={() => {
                            document.getElementById('howBuy').scrollIntoView({
                                behavior: "smooth"
                            });
                          }}
                        />
                    </div>}

                </div>

                {/* //*new updates | додати увесь код нижче в дужках {} */}
                {ViewportSize.width < 993 &&
                <div className="descBlock-third">
                    <div className='descBlock-second-btnWrap'>
                        <a className='no-decore'
                           href="https://poocoin.app/tokens/0x580e2b3170AA36e7018eaD248298C8cc18B0f019"
                           target='_blank'
                        >
                            <Button className='priceBTN' text='price/chart' />
                        </a>
                        <Button
                          className='howToBuyBTN'
                          text='how to buy zibu'
                          onClick={() => {
                              document.getElementById('howBuy').scrollIntoView({
                                  behavior: "smooth"
                              });
                          }}
                        />
                    </div>
                </div>}
            </div>
        </>

    )
}

export default DescBlock;
