import React from 'react';
import {
    FeaturesSection,
    FeaturesTitle,
    FeaturesText,
    FeaturesHeadline,
    FeaturesP,
    FeaturesBox,
    FeaturesIconContact,
    FeaturesIconTool,
    FeaturesIconTime,
    FeaturesBoxTitle,
    FeaturesBoxDesc,
    FeaturesDetail1,
    FeaturesImage1,
    FeaturesDetailH2,
    FeaturesDetailDesc,
} from './FeaturesElements';
import Img1 from '../../images/FeatureDetail1Image.png';

const FeaturesPage = () => {
    return (
        
    <FeaturesSection to="/features">
        
        <FeaturesText>
            <FeaturesTitle>FEATURES</FeaturesTitle>
            <FeaturesHeadline>What makes Rental different?</FeaturesHeadline>
            <FeaturesP>Everything about rent, manage house in your fingertips</FeaturesP>
        </FeaturesText>
        
        <FeaturesBox>
            <FeaturesIconContact />
            <FeaturesBoxTitle>Easy to contact us</FeaturesBoxTitle>
            <FeaturesBoxDesc>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </FeaturesBoxDesc>
        </FeaturesBox>
        <FeaturesBox>
            <FeaturesIconTool />
            <FeaturesBoxTitle>Super smart tool</FeaturesBoxTitle>
            <FeaturesBoxDesc>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </FeaturesBoxDesc>
        </FeaturesBox>
        <FeaturesBox>
            <FeaturesIconTime />
            <FeaturesBoxTitle>Save your time</FeaturesBoxTitle>
            <FeaturesBoxDesc>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </FeaturesBoxDesc>
        </FeaturesBox>
        
        <FeaturesDetail1>
            <FeaturesImage1 src={Img1} />
            <FeaturesDetailH2></FeaturesDetailH2>
            <FeaturesDetailDesc></FeaturesDetailDesc>
        </FeaturesDetail1>

        
    </FeaturesSection>
    )
}

export default FeaturesPage;
