import React from 'react';
// import Logo from '../../images/logo.png';
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
    TermText,
    // FooterBio,
    // FooterLogo,
    // FooterLogoImage,
    // FooterText,
} from './FooterElements';


const Footer = () => {
    return (
        <FooterContainer>
            <LineFooter />
            <FooterWrap>
                <FooterLinksContainer>
                    {/* <FooterBio>
                        <FooterLogo to="/"> <FooterLogoImage src={Logo}/>Rental</FooterLogo>
                        <FooterText>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                        </FooterText>
                    </FooterBio> */}

                    <FooterLinksWrapper>
                        {/* 1 */}
                        <FooterLinkItems>
                            <FooterLinkTitle>About Us</FooterLinkTitle>
                                <FooterLink to="/signin"About>About us</FooterLink>
                                <FooterLink to="/features"About>Features</FooterLink>
                                <FooterLink to="/blog">News & Blog</FooterLink>
                            
                        </FooterLinkItems>
                        {/* 1 */}
                        <FooterLinkItems>
                            <FooterLinkTitle>Company</FooterLinkTitle>
                                <FooterLink to="/howitworks">How it work?</FooterLink>
                                <FooterLink to="/signin"About>Security</FooterLink>
                                
                        </FooterLinkItems>
                        {/* 1 */}
                        <FooterLinkItems>
                            <FooterLinkTitle>Popular Areas</FooterLinkTitle>
                                <FooterLink to="/signin"About>Hai Chau</FooterLink>
                                <FooterLink to="/signin"About>Thanh Khe</FooterLink>
                                <FooterLink to="/signin"About>Ngu Hanh Son</FooterLink>
                        </FooterLinkItems>
                        {/* 1 */}
                        <FooterLinkItems>
                            <FooterLinkTitle>Searches</FooterLinkTitle>
                                <FooterLink to="/signin"About>Properties News</FooterLink>
                                <FooterLink to="/signin"About>Home ideas</FooterLink>
                                <FooterLink to="/signin"About>Outdoor Furniture</FooterLink>
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
            </DivideFooter>
        </FooterContainer>
    )
};
export default Footer;