import styled from 'styled-components';
import { Link } from 'react-router-dom';
import {BiEdit} from 'react-icons/bi';
import {BsPencilFill} from 'react-icons/bs';
// import {TiTick} from 'react-icons/ti';
// import {AiOutlineStar} from 'react-icons/ai';
// import {TiSocialFacebook} from 'react-icons/ti-social-facebook';
// import {TiSocialTwitter} from 'react-icons/ti';
// import {IoLogoInstagram} from 'react-icons/io-logo-instagram';
// import {RiFlag2Line} from 'react-icons/ri';


export const OuterInner = styled.div`
    overflow: hidden;
    min-height: 100vh;
`

export const User = styled.div`

`

export const Background = styled.div`
    margin: 0;
    padding: 0;
    border: 0;
    vertical-align: baseline;
    outline: none;
    display: block;
    box-sizing: inherit;
    font-size: 14px;
    line-height: 1.71429;
    -webkit-font-smoothing: antialiased;
`

export const BackgroundCenter = styled.div`
    width: 100%;
    max-width: 1280px;
    margin: 0 auto;
    padding: 0 80px;
    max-width: 1440px;
    @media only screen and (max-width: 1419px){
        padding: 0 40px;
    }
`

export const BackgroundHead = styled.div`
    position: relative;
    display: flex;
    align-items: flex-end;
    height: 400px;
    border-radius: 24px;
    background-repeat: no-repeat;
    background-position: 50% 50%;
    background-size: cover;
    overflow: hidden;
`

export const BackgroundImg = styled.img`
    position: relative;
    object-fit: cover;
    display: flex;
    align-items: flex-end;
    height: 400px;
    width: 100%;
    box-sizing: inherit;
    border-radius: 24px;
    background-repeat: no-repeat;
    background-position: 50% 50%;
    background-size: cover;
    overflow: hidden;
`

export const BackgroundBtn = styled(Link)`
    position: absolute;
    right: 16px;
    bottom: 16px;
    transition: opacity .2s;
    cursor: pointer;
    text-decoration: none;
`

export const ButtonStroke = styled.div`
    background: #fcfcfd;
    color: #000;
    height: 40px;
    border-radius: 20px;
    padding: 0 16px;
    font-size: 14px;
    text-align: center;
    font-weight: 700;
    line-height: 1;
    transition: all .2s;
    align-items: center;
    border: 0px;
    justify-content: center;
    display: inline-flex;

    &:hover {
        color: #fff;
        background: #506fea;
    }
`

export const EditIcon = styled(BiEdit)`
    width: 16px;
    height: 16px;
    margin-right: 15px;
    font-weight: 700;
    line-height: 1;
    align-items: center;
    box-sizing: inherit;
    overflow: hidden;
    vertical-align: middle;

`

export const UserBody = styled.div`
    position: relative;
    z-index: 3;
    padding: 80px 0 136px;
    @media only screen and (max-width: 1179px){
        padding-bottom: 112px;
    }
`

export const UserCenter = styled.div`
    display: flex;
    align-items: flex-start;
    width: 100%;
    max-width: 1280px;
    margin: 0 auto;
    padding: 0 80px;
`

export const Profile = styled.div`
    border: 1px solid #E6E8EC;
    border-radius: 24px;
    background: #FCFCFD;
    flex-shrink: 0;
    width: 352px;
    margin-top: -193px;
    text-align: center;
    padding: 32px 20px;
`

export const ProfileMain = styled.div`
    text-align: center;
    margin-bottom: 32px;
`

export const ProfileAvatar = styled.div`
    margin: 0 auto 12px;
    width: 160px;
    height: 160px;
    position: relative;
    flex-shrink: 0;
`

export const AvatarImg = styled.img`
    vertical-align: middle;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    object-fit: cover;
    height: 160px;
    width: 160px;
`

export const ProfileUpdate = styled(Link)`
    display: inline-flex;
    align-items: center;
    text-align: center;
    margin-bottom: 24px;
    font-size: 16px;
    line-height: 1.66667;
    font-weight: 600;
    color: #777E90;
    transition: color .2s;
    text-decoration: none;

    
    &:hover {
        color: #0444ec;
    }
`

export const ProfileUpdateIcon = styled(BsPencilFill)`
    width: 20px;
    height: 20px;
    margin-right: 8px;
    transition: fill .2s;
    overflow: hidden;
    cursor: pointer;
`

export const ProfileName = styled.div`
    font-size: 32px;
    line-height: 1.25;
    letter-spacing: -.01em;
    font-weight: bold;
`

export const ProfileBody = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const ProfileParameters = styled.div`
    display: flex;
    justify-content: center;
    margin-bottom: 32px;
    padding: 8px 16px;
    border-radius: 20px;
    background: #F4F5F6;    
`

export const ProfileParameter = styled.div`

`

export const IconTick = styled.div`

`

export const IconP = styled.div`

`

export const IconStar = styled.div`

`

export const ProfileControl = styled.div`

`

export const ButtonControl = styled.div`

`

export const ButtonShare = styled.div`

`

export const ShareIcon = styled.div`

`

export const ProfileSocial = styled.div`

`

export const TwitterIcon = styled.div`

`

export const FacebookIcon = styled.div`

`

export const InstagramIcon = styled.div`

`

export const ProfileNote = styled.div`

`

export const UserWrapper = styled.div`
flex-grow: 1;
padding-left: 80px;
@media only screen and (max-width: 1179px){
    padding-left: 48px;
}
`

export const UserDetail = styled.div`
margin-bottom: 64px;
`

export const UserHead = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 32px;
`

export const UserTitle = styled.h2`
margin-right: auto;
font-size: 24px;
line-height: 1.33333;
font-weight: 600;
letter-spacing: -.01em;
`

export const UserContent = styled.span`
margin-bottom: 32px;
color: #000;
`

export const UserOptions = styled.div`

`

export const UserOption = styled.div`

`

export const UserCategory = styled.div`

`

export const IconHome = styled.div`

`

export const UserText = styled.div`

`







 