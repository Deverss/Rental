import styled from 'styled-components';
import { Link } from 'react-router-dom';
import {BiEdit} from 'react-icons/bi';
import {BsPencilFill} from 'react-icons/bs';
import {
    MdIosShare, 
    MdHome, 
    MdSchool,
    MdPeopleAlt
} from 'react-icons/md';
import {
    GoVerified, 
    GoDeviceMobile
} from 'react-icons/go';
import {
    TiSocialFacebookCircular, 
    TiSocialTwitter
} from 'react-icons/ti';
import {IoLogoInstagram} from 'react-icons/io';
import {RiFlag2Line, RiHeart2Fill} from 'react-icons/ri';
import {CgToolbox} from 'react-icons/cg';


export const OuterInner = styled.div`
    overflow: hidden;
    min-height: 100vh;
    margin-top: 100px;
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

export const ButtonStroke = styled.a`
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
    text-decoration: none;
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
    z-index: 2;
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
    font-size: 14px;
    line-height: 1.66667;
    font-weight: 600;
    color: #777E90;
    transition: color .2s;
    text-decoration: none;

    
    &:hover {
        color: #1e4bff;
    }
`

export const ProfileUpdateIcon = styled(BsPencilFill)`
    width: 15px;
    height: 15px;
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
    color: #777E90;   
`

export const ProfileParameter = styled.div`
    // margin-right: 12px;
    align-items: center;
`

export const IconTick = styled(GoVerified)`
    color: #1e4bff;
`

export const IconP = styled.div`

`

export const ProfileControl = styled.div`
    display: inline-flex;
    margin-bottom: 32px;
`

export const ButtonControl = styled.div`
    margin-right: 15px;
    height: 40px;
    border-radius: 20px;
    padding: 0 16px;
    font-size: 14px;
    background: none;
    box-shadow: 0 0 0 2px #e6e8ec inset;
    color: #23262F;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    font-weight: 700;
    line-height: 1;
    text-align: center;
    text-decoration: none;
    cursor: pointer;

    &:hover {
        background: #000000;
        color: #e6e8ec;
        box-shadow: none;
        transition: all .2s ease-in-out;
    }
`

export const ButtonShare = styled.div`
    flex: 0 0 40px;
    width: 40px;
    height: 40px;
    padding: 0;
    border-radius: 50%;
    box-shadow: 0 0 0 2px #e6e8ec inset;
    color: #777e90;
    background: transparent;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    font-weight: 700;
    line-height: 1;
    text-align: center;
    text-decoration: none;
    cursor: pointer;
    font-size: 18px;

    &:hover {
        background: #000000;
        color: #e6e8ec;
        box-shadow: none;
        transition: all .2s ease-in-out;
    }
`

export const ShareIcon = styled(MdIosShare)`

`

export const ProfileSocial = styled.div`
    display: flex;
    justify-content: center;
    text-decoration: none;
`

export const TwitterLink = styled(Link)`
    margin-right: 24px;
    width: 25px;
    height: 25px;
    color: #777E90;
    transition: fill .2s;
    list-styled: none;

    &:hover{
        color: #1da1f2;
    }
`

export const TwitterIcon = styled(TiSocialTwitter)`
    text-decoration: none;
    width: 25px;
    height: 25px;
`

export const FacebookLink = styled.a`
    margin-right: 24px;
    color: #777E90;
    transition: fill .2s;
    list-styled: none;

    &:hover{
        color: #4267b2;
    }
`

export const FacebookIcon = styled(TiSocialFacebookCircular)`
    text-decoration: none;
    width: 25px;
    height: 25px;
`

export const InstagramLink = styled(Link)`
    color: #777E90;
    transition: fill .2s;  
    list-styled: none;

    &:hover{
        color: #C13584;
    }
`

export const InstagramIcon = styled(IoLogoInstagram)`
    text-decoration: none;
    width: 25px;
    height: 25px;
`

export const DivideLine = styled.div`
    border: 1px solid #e6e8ec;
    width: 200px;
    margin-top: 30px;
`

export const ProfileNote = styled.div`
    position: relative;
    padding-top: 32px;
    font-size: 13px;
    line-height: 1.66667;
    color: #777E90;
`

export const Report = styled.div`
    font-size: 13px;
    line-height: 1.66667;
    color: #777E90;
    align-items: center;
    margin-top: 10px;
    cursor: pointer;

    &:hover {
        color: #1e4bff;
    }
`

export const FlagIcon = styled(RiFlag2Line)`
    width: 12px;
    height: 12px;
    margin-right: 8px;
    transition: fill .2s;
    vertical-align: middle;
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
    font-weight: 700;
    letter-spacing: -.01em;
`

export const UserContent = styled.div`
    margin-bottom: 32px;
     color: #777E90;;
`

export const UserOptions = styled.div`

`

export const UserOption = styled.div`
    margin-bottom: 20px;
    display: flex;
    align-items: flex-start;
`

export const UserCategory = styled.div`
    display: flex;
    align-items: center;
    flex-shrink: 0;
    width: 152px;
    padding-right: 24px;
    color: #777E90;
`

export const IconHome = styled(MdHome)`
    width: 25px;
    height: 25px;
    margin-right: 12px;
    color: #777E90;
`

export const IconToolbox = styled(CgToolbox)`
    width: 25px;
    height: 25px;
    margin-right: 12px;
    color: #777E90;
`

export const IconSchool = styled(MdSchool)`
    width: 25px;
    height: 25px;
    margin-right: 12px;
    color: #777E90;
`

export const IconRelationship = styled(RiHeart2Fill)`
    width: 25px;
    height: 25px;
    margin-right: 12px;
    color: #777E90;
`

export const IconFollowers = styled(MdPeopleAlt)`
    width: 25px;
    height: 25px;
    margin-right: 12px;
    color: #777E90;    
`

export const IconPhone = styled(GoDeviceMobile)`
    width: 25px;
    height: 25px;
    margin-right: 12px;
    color: #777E90;
`

export const UserText = styled.div`

`

export const ReviewHead = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 32px;
`

export const ReviewTitle = styled.div`
    margin-right: auto;
    font-size: 24px;
    line-height: 1.33333;
    font-weight: 600;
    letter-spacing: -.01em;
`

export const ReviewGroup = styled.div`

`

export const ReviewItem = styled.div`
    display: flex;
    padding-top: 32px;
    border-top: 1px solid #E6E8EC;
    margin-top: 32px;
`

export const ReviewAvatar = styled.div`
    flex-shrink: 0;
    width: 48px;
    height: 48px;
    margin-right: 20px;
`

export const ReviewAvatarImg = styled.img`
    width: 100%;
    height: 100%;
    border-radius: 50%;
    -o-object-fit: cover;
    object-fit: cover;
`

export const ReviewDetail = styled.div`

`

export const ReviewAuthor = styled.div`
    margin-bottom: 4px;
    font-weight: 700;
    color: #141416;
`

export const ReviewContent = styled.div`
    margin-bottom: 8px;
    color: #353945;
`

export const ReviewFoot = styled.div`
    display: flex;
    align-items: center;
`

export const ReviewTime = styled.div`
    font-size: 12px;
    line-height: 1.66667;
    color: #777E90;
`

export const ReviewActions = styled.div`
    display: flex;
`

export const ReviewActionsBtn = styled.button`
    margin-left: 16px;
    font-size: 12px;
    line-height: 1.66667;
    font-weight: 600;
    transition: color .1s;
    border: none;
    cursor: pointer;
    box-sizing: inherit;
    background-color: none;
    outline: none;

    &:hover {
        color: #0444ec;
    }
`







 