import styled from 'styled-components';
import { Link } from 'react-router-dom';


export const Nav = styled.nav`
    background: white;
    height: 80px;
    margin-top: -80px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    position: sticky;
    top: 0;
    z-index: 3;
    @media screen and (max-width: 960px) {
        transition: 0.8s all ease;
        z-index: 3;
    }
`;

export const NavbarContainer = styled.div`
    display: flex;
    justify-content: space-between;
    height: 80px;
    z-index: 1;
    width: 100%;
    padding 0 24px;
    max-width: 1100px;
`;

export const NavLogo = styled(Link)`
    color: #000000;
    font-family: 'Montserrat', sans-serif;
    justify-content: flex-start;
    cursor: pointer;
    font-size: 30px;
    display: flex;
    align-items: center;
    margin-life: 24px;
    font-weight: bold;
    text-decoration: none;
`;

export const NavLogoImage = styled.img`
    height: 42px;
    weight: 42px;
    justify-content: flex-start;
    cursor: pointer;
    display: flex;
    align-items: center;
    text-decoration: none;
`


export const MobileIcon = styled.div`
    display: none;

    @media screen and(max-width: 768px) {
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 60%)
        font-size: 1.8rem;
        cursor: pointer;
        // color: #fff;
    }
`;

export const NavMenu = styled.ul`
    display: flex;
    align-items: center;
    list-style: none;
    text-align: center;
    margin-right: -300px;

    @media and (max-width: 768px) {
        display: none;
    }
`;

export const NavItem = styled.li`
    height: 100%;
    
    &:hover {
        transition: all 0.5 ease-in-out;
        border-bottom: 5px solid #506FEA;
    }
`;

export const NavLinks = styled(Link)`
    color: black;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;
`;

export const NavBtn = styled.nav`
    display: flex;
    align-items: center;
    
    @media screen and (max-width: 768px) {
        display: none;
    }
`;


export const NavBtnLink = styled(Link)`
    border-radius: 8px;
    background: black;
    white-space: nowrap;
    padding: 13px 36px;
    color: #fff;
    font-size: 16px;
    outline: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;
    box-sizing: border-box;
    border: 2px solid #000000;
    &:hover {
        background-color: #fff;  
        color: #000;
    }
`;


