import React from 'react';
import Bgr1 from '../../images/Background-1.jpg';
import AvaPrf from '../../images/ProfileAva.jpg';
import {
    OuterInner,
    User,
    Background,
    BackgroundCenter,
    BackgroundHead,
    BackgroundImg,
    BackgroundBtn,
    ButtonStroke,
    EditIcon,
    
    UserBody,
    UserCenter,
    Profile,
    ProfileMain,
    ProfileAvatar,
    AvatarImg,
    ProfileUpdate,
    ProfileUpdateIcon,
    ProfileName,
    ProfileBody,
    ProfileParameters,
    ProfileParameter,
    IconTick,
    IconP,
    IconStar,
    ProfileControl,
    ButtonControl,
    ButtonShare,
    ShareIcon,
    ProfileSocial,
    TwitterIcon,
    FacebookIcon,
    InstagramIcon,
    ProfileNote,

    UserWrapper,
    UserDetail,
    UserHead,
    UserTitle,
    UserContent,
    UserOptions,
    UserOption,
    UserCategory,
    IconHome,
    UserText,
} from './ProfileElements'

const ProfileInfo = () => {
    return (
        <OuterInner to="profile">
            <User>
                <Background>
                    <BackgroundCenter>
                        <BackgroundHead>
                            <BackgroundImg src={Bgr1} />
                            <BackgroundBtn>
                                <ButtonStroke>
                                <EditIcon />
                                    Edit cover
                                </ButtonStroke>
                            </BackgroundBtn>                
                        </BackgroundHead>
                    </BackgroundCenter>
                </Background>

                <UserBody>
                    <UserCenter>
                        <Profile>
                            <ProfileMain>
                                <ProfileAvatar>
                                    <AvatarImg src={AvaPrf}/>
                                </ProfileAvatar>
                                <ProfileUpdate>
                                    <ProfileUpdateIcon />
                                    Update avatar
                                </ProfileUpdate>
                                <ProfileName>Tom</ProfileName>
                            </ProfileMain>
                            <ProfileBody>
                                <ProfileParameters>
                                    <ProfileParameter>
                                        <IconTick/>
                                        <IconP>Identity verified</IconP>
                                    </ProfileParameter>
                                    <ProfileParameter>
                                        <IconStar/>
                                        <IconP>256 reviews</IconP>
                                    </ProfileParameter>
                                </ProfileParameters>
                                <ProfileControl>
                                    <ButtonControl>Contract</ButtonControl>
                                    <ButtonShare>
                                        <ShareIcon/>
                                    </ButtonShare>
                                </ProfileControl>
                                <ProfileSocial>
                                    <TwitterIcon/>
                                    <FacebookIcon/>
                                    <InstagramIcon/>
                                </ProfileSocial>
                                <ProfileNote>
                                    Member since Mar 15, 2021
                                </ProfileNote>

                            </ProfileBody>
                        </Profile>

                        <UserWrapper>
                            <UserDetail>
                                <UserHead>
                                    <UserTitle>Hi, I'm Tom</UserTitle>
                                </UserHead>
                                <UserContent>Described by Queenstown House & Garden magazine as having 'one of the best views we've ever seen' you will love relaxing in this newly built</UserContent>
                                <UserOptions>
                                    <UserOption>
                                        <UserCategory>
                                            <IconHome />
                                            Live in
                                        </UserCategory>
                                        <UserText>Auckland, New Zealand</UserText>
                                    </UserOption>
                                    <UserOption>
                                        <UserCategory>
                                            <IconHome />
                                            Live in
                                        </UserCategory>
                                        <UserText>Auckland, New Zealand</UserText>
                                    </UserOption>
                                    <UserOption>
                                        <UserCategory>
                                            <IconHome />
                                            Live in
                                        </UserCategory>
                                        <UserText>Auckland, New Zealand</UserText>
                                    </UserOption>
                                </UserOptions>
                            </UserDetail>
                        </UserWrapper>
                    </UserCenter>
                </UserBody>
            </User>
        </OuterInner>
    )
}

export default ProfileInfo
