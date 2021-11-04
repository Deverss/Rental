import React from 'react';
import ReactDOM from "react-dom";
import {
    SPP,
    SupportSection,
    SupportH2,
    SupportP,
    SearchForm,
    SearchInput,
    SearchButton,
    FAQSection,
    FAQDetail,
    FAQLabel,
    FAQH2,
    FAQDesc,
    FAQP,
    FAQLink,
    FAQTab,
    FAQcol,
    FAQNav
} from './SupportElements';

const Support = () => {
    return (
        <SPP>
            <SupportSection>
                <SupportH2>Support</SupportH2>
                <SupportP>Stacks is a production-ready library of stackable content
            blocks built in React Native.</SupportP>
                    <SearchForm>
                        <SearchInput placeholder="Search anything"  />
                        <SearchButton />
                    </SearchForm>
            </SupportSection>
            <FAQSection>
                <FAQDetail>
                    <FAQLabel>LEARN HOW TO GET STARTED</FAQLabel>
                    <FAQH2>Frequently asked questions</FAQH2>
                    <FAQDesc>
                        <FAQP>We stay here in order to answer what you are wondering. 
                            Haven’t find it yet?</FAQP>
                        <FAQLink>Contact to us</FAQLink>
                    </FAQDesc>
                </FAQDetail>
                <FAQTab>
                    <FAQcol>
                        <FAQNav>

                        </FAQNav>
                    </FAQcol>
                    
                    <FAQcol>
                        <FAQBoxItem></FAQBoxItem>
                    </FAQcol>
                </FAQTab>
            </FAQSection>
       </SPP>
    )
}

export default Support
