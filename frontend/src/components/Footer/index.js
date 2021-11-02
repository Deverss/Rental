import React from 'react';
import {
    FooterContainer,
    LineFooter,
    FooterWrap,
    FooterLinksContainer,
    FooterLinksWrapper,
    FooterLinkItems,
    FooterLinkTitle,
    DivideFooter,
    FooterLink,
    Copyright,
    TermText
} from './FooterElements';

const Footer = () => {
    return (
        <FooterContainer>
            <LineFooter />
            <FooterWrap>
                <FooterLinksContainer>
                    <FooterLinksWrapper>
                        {/* 1 */}
                        <FooterLinkItems>
                            <FooterLinkTitle>About Us</FooterLinkTitle>
                                <FooterLink to="/signin"About>About us</FooterLink>
                                <FooterLink to="/signin"About>Features</FooterLink>
                                <FooterLink to="/signin"About>News & Blog</FooterLink>
                            
                        </FooterLinkItems>
                        {/* 1 */}
                        <FooterLinkItems>
                            <FooterLinkTitle>Company</FooterLinkTitle>
                                <FooterLink to="/signin"About>How we work?</FooterLink>
                                <FooterLink to="/signin"About>Security</FooterLink>
                                
                        </FooterLinkItems>
                        {/* 1 */}
                        <FooterLinkItems>
                            <FooterLinkTitle>Support</FooterLinkTitle>
                                <FooterLink to="/signin"About>FAQs</FooterLink>
                                <FooterLink to="/signin"About>Support Center</FooterLink>
                                <FooterLink to="/signin"About>Contact us</FooterLink>
                        </FooterLinkItems>
                        {/* End */}
                    </FooterLinksWrapper>
                    
                </FooterLinksContainer>
                
            </FooterWrap>
            <DivideFooter>
                <Copyright>Copyright © 2021. All rights reserved</Copyright>
                <TermText>Terms & Agreements</TermText>
            </DivideFooter>
        </FooterContainer>
    )
};
export default Footer;