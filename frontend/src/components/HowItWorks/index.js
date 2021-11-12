import React from 'react';
import {
    HowItWorksContainer,
    HowItWorksH2,
    HowItWorksTitle,
    HowItWorksP,
    HowItWorksBtn,
    HowItWorksBtnLink
} from './HowItWorksElements'

const HowItWorks = () => {
    return (
        <HowItWorksContainer to="howitworks">
            <HowItWorksH2>How It Works?</HowItWorksH2>
            <HowItWorksTitle>Learn more about our software and how to use it in the best way possible.</HowItWorksTitle>
            <HowItWorksBtn>
                <HowItWorksBtnLink to="/">Check it out </HowItWorksBtnLink>
            </HowItWorksBtn>
            <HowItWorksP>1. Introduction</HowItWorksP>
            <HowItWorksP>
                In order to start using our software, you would first have to create an account. 
                This process is pretty straight forward and all you need is your email address, as well as,
                you would also have to create a password for your new account.
            </HowItWorksP>
            <HowItWorksP>2. Setup</HowItWorksP>
            <HowItWorksP>2.1 Creating an account to use our software</HowItWorksP>
            <HowItWorksP>2.2 Choosing the plan that will be right for you and your business</HowItWorksP>
        </HowItWorksContainer>
    )
}

export default HowItWorks;
