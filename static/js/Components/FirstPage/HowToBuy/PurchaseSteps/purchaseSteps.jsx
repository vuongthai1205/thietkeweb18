import React, {useState} from "react";
import './index.scss';
import StepFirstBlock from "../StepFirstBlock";
import StepSecondBlock from "../StepSecondBlock";
import StepThirdBlock from "../StepThirdBlock";
import StepFourthBlock from "../StepFourthBlock";
import StepFifthBlock from "../StepFifthBlock";
import StepSixthBlock from "../StepSixthBlock";
import StepSeventhBlock from "../StepSeventhBlock";
import useViewportSize from "../../../../hooks/useViewportSize";
import classNames from "classnames";


const PurchaseSteps = () => {

    const [activeStep, setActiveStep] = useState(1);
    const viewportSize = useViewportSize();


    const stepNumber = (number) => {
        return viewportSize.width > 650 ? `Step ${number}` : number;
    }

    return(
        <div className='purchaseSteps'>
            <div className='purchaseSteps-stepsWrap'>
                <div className={classNames("step", "first", activeStep === 1 && "active")} onAnimationEnd={e => e.target.classList.add('anim-done')} onClick={() => setActiveStep(1)}>
                    <div
                        className='title one' style={{color: activeStep === 1 ? '#FF6ED6' : ''}}
                        onClick={() => setActiveStep(1)}>
                        {stepNumber('01')}
                    </div>
                    {/* <img src={StepOneImage} alt='StepOneImage'/> */}
                </div>
                <div className={classNames("step", "second", activeStep === 2 && "active")}  onAnimationEnd={e => e.target.classList.add('anim-done')} onClick={() => setActiveStep(2)}>
                    <div
                        className='title two' style={{color: activeStep === 2 ? '#FF6ED6' : ''}}>
                        {stepNumber('02')}
                    </div>
                    {/* <img src={StepOneImage2} alt='StepTwoImage'/> */}
                </div>
                <div className={classNames("step", "third", activeStep === 3 && "active")}  onAnimationEnd={e => e.target.classList.add('anim-done')} onClick={() => setActiveStep(3)}>
                    <div
                        className='title three' style={{color: activeStep === 3 ? '#FF6ED6' : ''}}>
                        {stepNumber('03')}
                    </div>
                    {/* <img src={StepOneImage3} alt='StepThreeImage'/> */}
                </div>
                <div className={classNames("step", "fourth", activeStep === 4 && "active")}  onAnimationEnd={e => e.target.classList.add('anim-done')} onClick={() => setActiveStep(4)}>
                    <div
                        className='title four' style={{color: activeStep === 4 ? '#FF6ED6' : ''}}>
                        {stepNumber('04')}
                    </div>
                    {/* <img src={StepOneImage4} alt='StepFourImage'/> */}
                </div>
                <div className={classNames("step", "fifth", activeStep === 5 && "active")} onAnimationEnd={e => e.target.classList.add('anim-done')} onClick={() => setActiveStep(5)}>
                    <div
                        className='title five' style={{color: activeStep === 5 ? '#FF6ED6' : ''}}>
                        {stepNumber('05')}
                    </div>
                    {/* <img src={StepOneImage5} alt='StepFiveImage'/> */}
                </div>
                <div className={classNames("step", "sixth", activeStep === 6 && "active")} onAnimationEnd={e => e.target.classList.add('anim-done')} onClick={() => setActiveStep(6)}>
                    <div
                        className='title six' style={{color: activeStep === 6 ? '#FF6ED6' : ''}}>
                        {stepNumber('06')}
                    </div>
                    {/* <img src={StepOneImage6} alt='StepSixImage'/> */}
                </div>
                <div className={classNames("step", "seventh", activeStep === 7 && "active")} onAnimationEnd={e => e.target.classList.add('anim-done')} onClick={() => setActiveStep(7)}>
                    <div
                        className='title seven' style={{color: activeStep === 7 ? '#FF6ED6' : ''}}>
                        {stepNumber('07')}
                    </div>
                    {/* <img src={StepOneImage7} alt='StepSevenImage'/> */}
                </div>
            </div>
            <StepFirstBlock activeStep={activeStep} />
            <StepSecondBlock activeStep={activeStep} />
            <StepThirdBlock activeStep={activeStep}/>
            <StepFourthBlock activeStep={activeStep} />
            <StepFifthBlock activeStep={activeStep} />
            <StepSixthBlock activeStep={activeStep} />
            <StepSeventhBlock activeStep={activeStep} />
        </div>
    )
}

export default PurchaseSteps;
