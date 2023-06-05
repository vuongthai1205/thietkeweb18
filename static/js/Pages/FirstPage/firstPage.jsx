import React, {useEffect, useState} from "react";
import './index.scss';
import MainTitle from "../../Components/FirstPage/MainTitle";
import Adventures from "../../Components/FirstPage/Adventures";
import Tokenomics from "../../Components/FirstPage/Tokenomics";
import HowToBuy from "../../Components/FirstPage/HowToBuy";
import JoinUs from '../../Components/SecondPage/JoinUs2/joinUs2';

const FirstPage = ({ loaded }) => {
    useEffect(() => {
      window.scrollTo(0, 0);
      setTimeout(() => window.scrollTo(0, 0), 10);
    }, []);

    return (
        <div className='main-container'>
            <MainTitle show={loaded} />
            <Adventures loaded={loaded} />

            {loaded && (
              <>
                <Tokenomics loaded={loaded} />
                <HowToBuy loaded={loaded} />
                <JoinUs loaded={loaded} />
              </>
            )}
        </div>
    )
}

export default FirstPage;
