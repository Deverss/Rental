import React,{useState} from 'react';
import { Link,useHistory} from 'react-router-dom';
import { FaBars } from 'react-icons/fa';
import Logo from '../../images/logo.png';
import Ava1 from '../../images/Ava.jpg';
import { getUser,removeUser,removeToken } from '../../Api/Common';
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

const Dropdown = ({user}) =>{
    const history = useHistory();
    const logOut = () =>{
        removeToken();
        removeUser();
        history.push('/');
        window.location.reload();
    }
    return (
        <>
           <DropdownSection>
                <Wrapperul>
                    <UserMenuUser>
                        <UserMenuAvatar src={Ava1} />
                        <UserMenuInfo>
                            <UserMenuName>{user.name}</UserMenuName>
                            <UserMenuUserName>{user.email}</UserMenuUserName>
                        </UserMenuInfo>
                    </UserMenuUser>
                    <UserMenuList>
                        <UserMenuli>
                        <Link to='/'>Message</Link>
                        </UserMenuli>
                        <UserMenuli>
                        <Link to='/'>Deposite</Link>
                        </UserMenuli>
                        <UserMenuli>
                        <Link to='/'>Wishlist</Link>
                        </UserMenuli>
                        <UserMenuli>
                        <Link to='/'>Your property</Link>
                        </UserMenuli>
                    </UserMenuList>
                    <UserMenuList>
                        <UserMenuli>
                        <div  onClick={()=>logOut()}>Log out</div>
                        </UserMenuli>
                    </UserMenuList>
                </Wrapperul>
           </DropdownSection>
        </>
    );
}
const Navbar = ({ toggle }) => {
    const [menu,setMenu] = useState(false);
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
                            <NavLinks to="advancedsearch">Catalog</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="/features">Features</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="/contact">Contact</NavLinks>
                        </NavItem>
                    </NavMenu>
                    <NavBtn>
                        {(!getUser())?<NavBtnLink to="/signin">Sign In</NavBtnLink>:<AvaProfile  src={Ava1} onClick={() => setMenu(!menu)} />}
                        {(menu)?<Dropdown user={getUser()}/>:<></>}
                    </NavBtn>
                </NavbarContainer>
            </Nav>
        </>    
   );
};

export default Navbar;
