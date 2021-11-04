import React from 'react';
import {
    FeaturesSection,
    FeaturesWrap,
    FeaturesTitle,
    FeaturesText,
    FeaturesHeadline,
    FeaturesP,
    FeaturesBox,
    Midbar,
    FeaturesIconContact,
    FeaturesIconTool,
    FeaturesIconTime,
    FeaturesBoxTitle,
    FeaturesBoxDesc,
    FeaturesDetail1,
    FeaturesImage1,
    FeaturesDetailH2,
    FeaturesDetailDesc,
    FeaturesDetailText
} from './FeaturesElements';
import Img1 from '../../images/FeatureDetail1Image.png';
import Img2 from '../../images/FeatureDetail2Image.png';
import Img3 from '../../images/FeatureDetail3Image.png';
const FeaturesPage = () => {
    return (
        
    <FeaturesSection to="/features">
        
        <FeaturesText>
            <FeaturesTitle>FEATURES</FeaturesTitle>
            <FeaturesHeadline>What makes Rental different?</FeaturesHeadline>
            <FeaturesP>Everything about rent, manage house in your fingertips</FeaturesP>
        </FeaturesText>
        <FeaturesWrap>
            <FeaturesBox>
                <FeaturesIconContact />
                <FeaturesBoxTitle>Easy to contact us</FeaturesBoxTitle>
                <FeaturesBoxDesc>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </FeaturesBoxDesc>
            </FeaturesBox>
            <Midbar>
            <FeaturesBox>
                <FeaturesIconTool />
                <FeaturesBoxTitle>Super smart tool</FeaturesBoxTitle>
                <FeaturesBoxDesc>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </FeaturesBoxDesc>
            </FeaturesBox>
            </Midbar>
            <FeaturesBox>
                <FeaturesIconTime />
                <FeaturesBoxTitle>Save your time</FeaturesBoxTitle>
                <FeaturesBoxDesc>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </FeaturesBoxDesc>
            </FeaturesBox>
        </FeaturesWrap>
        <FeaturesDetail1>
            <FeaturesImage1 src={Img1} />
            <FeaturesDetailText>
                <FeaturesDetailH2>Flexible filter</FeaturesDetailH2>
                <FeaturesDetailDesc>RetailH provider provides rent home with up-to-date information, tools, and home listing across Da Nang</FeaturesDetailDesc>
            </FeaturesDetailText>
        </FeaturesDetail1>
        <FeaturesDetail1>
            <FeaturesDetailText>
                <FeaturesDetailH2>Virtual Reality 360 to preview</FeaturesDetailH2>
                <FeaturesDetailDesc>RetailH provider provides rent home with up-to-date information, tools, and home listing across Da Nang</FeaturesDetailDesc>
            </FeaturesDetailText>
            <FeaturesImage1 src={Img2} />
        </FeaturesDetail1>
        <FeaturesDetail1>
            <FeaturesImage1 src={Img3} />
            <FeaturesDetailText>
                <FeaturesDetailH2>Easy booking and planing</FeaturesDetailH2>
                <FeaturesDetailDesc>RetailH offer a clean interface consumers love, and home search tool that let home renter choose</FeaturesDetailDesc>
            </FeaturesDetailText>
        </FeaturesDetail1>
    </FeaturesSection>
    )
}

export default FeaturesPage;
