import React from 'react';
import { FaBars } from 'react-icons/fa';
import Logo from '../../images/logo.png';
import {   
    Nav, 
    NavbarContainer, 
    NavLogo,
    NavLogoImage,
    MobileIcon, 
    NavMenu, 
    NavItem, 
    NavLinks,
    NavBtn,
    NavBtnLink
} from './NavbarElements';

const Navbar = ({ toggle }) => {
    return (
        <>
            <Nav>
                <NavbarContainer>
                    <NavLogo to="/"><NavLogoImage src={Logo}/>Rental</NavLogo>
                    <MobileIcon onClick={toggle}>
                        <FaBars />
                    </MobileIcon>
                    <NavMenu>
                        <NavItem>
                            <NavLinks to="/">Home</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="blog">Blogs</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="catalog">Catalog</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="/features">Features</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="signup">Contact</NavLinks>
                        </NavItem>
                    </NavMenu>
                    <NavBtn>
                        <NavBtnLink to="/signin">Sign In</NavBtnLink>
                    </NavBtn>
                </NavbarContainer>
            </Nav>
        </>
    );
};

export default Navbar;
