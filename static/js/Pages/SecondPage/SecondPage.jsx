import React, {useEffect} from "react";
import Chain from "../../Components/SecondPage/Chain/Chain";
import DogBox from "../../Components/SecondPage/DogBox/DogBox";
import Faq from "../../Components/SecondPage/Faq/Faq";
import Payment from "../../Components/SecondPage/Payment/Payment";
import Roadmap from "../../Components/SecondPage/Roadmap/Roadmap";
import VoltVideo from "../../Components/SecondPage/Volt/Volt";
import JoinUs from '../../Components/SecondPage/JoinUs2/joinUs2';
import Advisors from "../../Components/SecondPage/Advisors";
import './index.scss';

const SecondPage = ({ loaded, isShowMenu }) => {
    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);

    return (
        <div className='main-container'>
            <VoltVideo loaded={loaded} />
            <DogBox loaded={loaded} />
            {loaded && (
              <>
                <Payment loaded={loaded} />
                <Chain loaded={loaded} />
                <Roadmap loaded={loaded} />
                <Faq loaded={loaded} isShowMenu={isShowMenu} />
                <Advisors loaded={loaded} />
                <JoinUs loaded={loaded} />
              </>
            )}
        </div>
    )
}

export default SecondPage;
