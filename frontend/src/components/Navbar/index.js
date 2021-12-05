import React,{useState} from 'react';
import { FaBars } from 'react-icons/fa';
import Logo from '../../images/logo.png';
import Ava1 from '../../images/Ava.jpg'
// import scroll from 'react-scroll'
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
    NavBtnLink,AvaProfile
    
} from './NavbarElements';
import {
    DropdownSection,
    Wrapperul,
    UserMenuUser,
    UserMenuAvatar,
    UserMenuInfo,
    UserMenuName,
    UserMenuUserName,
    UserMenuList,
    UserMenuli,
} from './DropdownElements';
// const toggleHome = () => {
//     scroll.scrollToTop();
// }
const Dropdown = () =>{
    return (
        <>
           <DropdownSection>
                <Wrapperul>
                    <UserMenuUser>
                        <UserMenuAvatar src={Ava1} />
                        <UserMenuInfo>
                            <UserMenuName>Mai The Son</UserMenuName>
                            <UserMenuUserName>@TesMai</UserMenuUserName>
                        </UserMenuInfo>
                    </UserMenuUser>
                    <UserMenuList>
                        <UserMenuli>
                        Message
                        </UserMenuli>
                        <UserMenuli>
                        Deposite
                        </UserMenuli>
                        <UserMenuli>
                        Wishlist
                        </UserMenuli>
                        <UserMenuli>
                        Your property
                        </UserMenuli>
                    </UserMenuList>
                    <UserMenuList>
                        <UserMenuli>
                        Log out
                        </UserMenuli>
                    </UserMenuList>
                </Wrapperul>
           </DropdownSection>
        </>
    );
}
const Navbar = ({ toggle }) => {
    const [menu,setMenu] = useState(false);
    console.log(menu);
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
                            <NavLinks to="/blog">Blogs</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="/advancedsearch">Catalog</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="/features">Features</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="/contact">Contact</NavLinks>
                        </NavItem>
                    </NavMenu>
                    <NavBtn>
                        {(false)?<NavBtnLink to="/signin">Sign In</NavBtnLink>:<AvaProfile src={Ava1} onClick={() => setMenu(!menu)} />}
                        {(menu)?<Dropdown/>:<></>}
                    </NavBtn>
                </NavbarContainer>
            </Nav>
        </>    
   );
};

export default Navbar;
