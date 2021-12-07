import React,{useState} from 'react';
import { getUser } from '../../Api/Common';
import Bgr1 from '../../images/Background-1.jpg';
import AvaPrf from '../../images/ProfileAva.jpg';
import ReviewAva1 from '../../images/ReviewAva_1.jpg'
import ReviewAva2 from '../../images/ReviewAva_2.jpg';
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

    ReviewHead,
    ReviewTitle,
    ReviewGroup,
    ReviewItem,
    ReviewAvatar,
    ReviewAvatarImg,
    ReviewDetail,
    ReviewAuthor,
    ReviewContent,
    ReviewFoot,
    ReviewTime,
    ReviewActions,
    ReviewActionsBtn,
} from './ProfileElements'

const ProfileInfo = () => {
    const [user,setUser] = useState(getUser());
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
                                    <AvatarImg src={user.image}/>
                                </ProfileAvatar>
                                <ProfileUpdate>
                                    <ProfileUpdateIcon />
                                    Update avatar
                                </ProfileUpdate>
                                <ProfileName>{user.name}</ProfileName>
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
                                    <FacebookLink href={user.facebook} target="_blank">
                                        <FacebookIcon />   
                                    </FacebookLink>
                                    <InstagramLink >     
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
                                    <UserTitle>Hi, I'm {user.name}</UserTitle>
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
                                        <UserText>{(user.phone)?user.phone:'none'}</UserText>
                                    </UserOption>
                                </UserOptions>
                            </UserDetail>
                            {/* Review Section */}
                            <ReviewHead>
                                <ReviewTitle>2 reviews</ReviewTitle> 
                            </ReviewHead>

                            <ReviewGroup>
                                <ReviewItem>
                                    <ReviewAvatar>
                                        <ReviewAvatarImg src={ReviewAva1}/>
                                    </ReviewAvatar>
                                    <ReviewDetail>
                                        <ReviewAuthor>Tobey Maguire</ReviewAuthor>
                                        <ReviewContent>I enjoyed my communication with them and wish them only the best!</ReviewContent>
                                        <ReviewFoot>
                                            <ReviewTime>3 hours ago</ReviewTime>
                                            <ReviewActions>
                                                <ReviewActionsBtn>Like</ReviewActionsBtn>
                                                <ReviewActionsBtn>Reply</ReviewActionsBtn>
                                            </ReviewActions>
                                        </ReviewFoot>
                                    </ReviewDetail>
                                </ReviewItem>
                                <ReviewItem>
                                    <ReviewAvatar>
                                        <ReviewAvatarImg src={ReviewAva2}/>
                                    </ReviewAvatar>
                                    <ReviewDetail>
                                        <ReviewAuthor>Andrew Garfield</ReviewAuthor>
                                        <ReviewContent>Tom was great guest. I enjoyed my communication with him and wish him only the best!</ReviewContent>
                                        <ReviewFoot>
                                            <ReviewTime>5 hours ago</ReviewTime>
                                            <ReviewActions>
                                                <ReviewActionsBtn>Like</ReviewActionsBtn>
                                                <ReviewActionsBtn>Reply</ReviewActionsBtn>
                                            </ReviewActions>
                                        </ReviewFoot>
                                    </ReviewDetail>
                                </ReviewItem>
                            </ReviewGroup>
                        </UserWrapper>
                    </UserCenter>
                </UserBody>
            </User>
        </OuterInner>
    )
}

export default ProfileInfo
