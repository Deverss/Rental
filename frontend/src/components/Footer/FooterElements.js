import styled from 'styled-components';
import {Link} from 'react-router-dom'

export const FooterContainer = styled.footer`
    background-color: #fff;
    margin-top: 150px;
`
export const LineFooter = styled.hr`
    width:75%;
    
    margin:0 auto;
    background-color: #dbdbdb;
`
export const FooterWrap = styled.div`
    padding: 48px 24px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: 1100px;
    margin: 0 auto;
`

export const FooterLinksContainer = styled.div`
    display: flex;
    justify-content: center;

    @media screen and (max-width: 820px) {
        padding-top: 32px;

    }
`

export const FooterLinksWrapper = styled.div`
    display: flex;

    @media screen and (max-width: 820px) {
        flex-direction: column;

    }
`
export const FooterLinkItems = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin: 16px;
    text-align: left;
    width: 160px;
    box-sizing: border-box;
    color: #fff;

    @media screen and (max-width:420) {
        margin: 0;
        padding: 10px;
        width: 100%;
    }
`

export const FooterLinkTitle = styled.h1`
    font-size: 24px;
    margin-bottom: 16px;
    color: #000;
`
export const FooterLink = styled(Link)`
    color: #868686;
    text-decoration: none;
    margin-bottom: 0.5 rem;
    font-size: 15px;
    font-weight: normal;
    
    &:hover {
        text-decoration: underline;
        transition: 0.3s ease-out;
        color: #000;
        font-weight: bold;
    }
`
export const DivideFooter = styled.div`
    border-top: 1px solid #dddddd;
    display: flex;
    padding: 24px 0;
    border-top: 1px solid #F4F5F6;
`
export const TermText = styled(Link)`
    color: #000;
    text-decoration: none;
    margin-bottom: 0.5 rem;
    font-size: 16px;
    font-weight: bold;
    margin-left: 145px;
    &:hover {
        color: #506FEA;
        transition: 0.3s ease-out

}
`
export const Copyright = styled.h3`
    position: flex;
    font-size: 16px;
    font-weight: bold;
    text-align: left;
    margin-left: 145px;
`


// export const FooterBio = styled.div`

// `
// export const FooterLogo = styled.img`

// `
// export const FooterLogoImage = styled.div`

// `
// export const FooterText = styled.div`

// `
