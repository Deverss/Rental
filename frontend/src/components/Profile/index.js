import React from 'react'

const Profile = () => {
    return (
        <OuterInner>
            <User>
                <Background>
                    <BackgroundCenter>
                        <BackgroundHead>
                            <BackgroundBtn>Edit cover</BackgroundBtn>
                            
                        </BackgroundHead>
                    </BackgroundCenter>
                </Background>
                <UserBody>
                    <UserCenter>
                        <Profile>
                            <ProfileMain>
                                <ProfileAvatar>
                                    <AvatarImg/>
                                </ProfileAvatar>
                                <ProfileName>Nguyen Lee Twan Eng</ProfileName>

                            </ProfileMain>
                            <ProfileBody>
                                <ProfileParameters>
                                    <ProfileParameter>
                                        <IconTick/>
                                        <IconP>Indentity verified</IconP>
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
                                    <UserTitle>Hi, I'm Nguyen Lee Twan Eng</UserTitle>
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

export default Profile
