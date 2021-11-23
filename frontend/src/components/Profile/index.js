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
    ProfileControl,
    ButtonControl,
    ButtonShare,
    ShareIcon,
    ProfileSocial,
    TwitterLink,
    TwitterIcon,
    FacebookLink,
    FacebookIcon,
    InstagramLink,
    InstagramIcon,
    DivideLine,
    ProfileNote,
    Report,
    FlagIcon,

    UserWrapper,
    UserDetail,
    UserHead,
    UserTitle,
    UserContent,
    UserOptions,
    UserOption,
    UserCategory,
    IconHome,
    IconToolbox,
    IconSchool,
    IconRelationship,
    IconFollowers,
    IconPhone,
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
                                </ProfileParameters>
                                <ProfileControl>
                                    <ButtonControl>Contact</ButtonControl>
                                    <ButtonShare>
                                        <ShareIcon/>
                                    </ButtonShare>
                                </ProfileControl>
                                <ProfileSocial>
                                    <TwitterLink>
                                        <TwitterIcon />
                                    </TwitterLink>
                                    <FacebookLink>
                                        <FacebookIcon to=""/>   
                                    </FacebookLink>
                                    <InstagramLink>     
                                        <InstagramIcon />
                                    </InstagramLink>      
                                </ProfileSocial>
                                <DivideLine />
                                <ProfileNote>
                                    Member since Mar 15, 2021
                                </ProfileNote>
                                <Report>
                                    <FlagIcon /> Report this property
                                </Report>
                            </ProfileBody>
                        </Profile>

                        <UserWrapper>
                            <UserDetail>
                                <UserHead>
                                    <UserTitle>Hi, I'm Tom</UserTitle>
                                </UserHead>
                                <UserContent>House for rent with beautiful furniture, fully equipped facilities, reasonable prices</UserContent>
                                <UserOptions>
                                    <UserOption>
                                        <UserCategory>
                                            <IconHome />
                                            Live in
                                        </UserCategory>
                                        <UserText>Da Nang, Viet Nam</UserText>
                                    </UserOption>
                                    <UserOption>
                                        <UserCategory>
                                            <IconToolbox />
                                            Job
                                        </UserCategory>
                                        <UserText>Program Developer</UserText>
                                    </UserOption>
                                    <UserOption>
                                        <UserCategory>
                                            <IconSchool />
                                            Education
                                        </UserCategory>
                                        <UserText>VKU - Vietnam Korea University</UserText>
                                    </UserOption>
                                    <UserOption>
                                        <UserCategory>
                                            <IconRelationship />
                                            Relationship
                                        </UserCategory>
                                        <UserText>Single</UserText>
                                    </UserOption>
                                    <UserOption>
                                        <UserCategory>
                                            <IconFollowers />
                                            Followers
                                        </UserCategory>
                                        <UserText>888</UserText>
                                    </UserOption>
                                    <UserOption>
                                        <UserCategory>
                                            <IconPhone />
                                            Phone
                                        </UserCategory>
                                        <UserText>0912.788.xxx</UserText>
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
