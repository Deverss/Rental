import React from 'react';
import LoginImage from '../../images/LoginCoverImage.jpg'
import logo from '../../images/LogoText.png'
import {Outer,
    OuterInner, 
    Login, 
    LoginImg,
    LoginCol1, 
    LoginCol2, 
    LoginHead, 
    LoginWrap, 
    Entry, 
    EntryTop, 
    EntryTitleH3, 
    EntryInfoP,
    EntryCorrect,
    IconLock,
    EntryUrl,
    EntryForm,
    EntryTab,
    EntryContainer,
    EntryItem,
    Field,
    FieldLabel,
    FieldWrap,
    
    EntryButton,
    FieldInputEmail,
    FieldInputPassword,
    EntryWrap,
    LoginLogo
} from './SignUpElements'

const SignIn = () => 
    (<>
    <Outer>
        <OuterInner>
            <Login>
                <LoginCol1>
                    <LoginImg src={LoginImage} />
                    <LoginLogo src={logo} to="/"/>
                </LoginCol1>
                <LoginCol2>
                    <LoginHead to="/signin">
                        Have an account? Sign in
                    </LoginHead>
                    <LoginWrap>
                        <Entry>
                            <EntryTop>
                                <EntryTitleH3>Sign up</EntryTitleH3>
                                <EntryInfoP>Please ensure you are visiting the correct url.</EntryInfoP>
                                <EntryCorrect>
                                    <IconLock />
                                    <EntryUrl>https://accounts.rental.com/signup</EntryUrl>
                                </EntryCorrect>
                            </EntryTop>
                            <EntryForm>
                                <EntryTab>
                                    <EntryContainer>
                                        <EntryItem>
                                            <Field action="#">
                                                <FieldLabel htmlFor='for'>User name</FieldLabel>
                                                <FieldWrap>
                                                    <FieldInputEmail type='username' required />
                                                </FieldWrap>
                                                <FieldLabel htmlFor='for'>Email</FieldLabel>
                                                <FieldWrap>
                                                    <FieldInputEmail type='email' required />
                                                </FieldWrap>
                                                    <FieldLabel htmlFor='for'>Password</FieldLabel>
                                                <FieldWrap>
                                                    <FieldInputPassword type='password' required />
                                                        
                                                   
                                                </FieldWrap>
                                            </Field>
                                        </EntryItem>
                                    </EntryContainer>
                                </EntryTab>
                                
                                <EntryButton type='submit' to="/">Login</EntryButton>
                            </EntryForm>
                            <EntryWrap>

                            </EntryWrap>
                        </Entry>
                    </LoginWrap>
                </LoginCol2>
            </Login>
        </OuterInner>
    </Outer>
    </>)


export default SignIn
