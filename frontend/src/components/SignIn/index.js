import React from 'react';
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
    EntryFoot,
    EntryLink,
    EntryButton,
    FieldInputEmail,
    FieldInputPassword,
    EntryWrap
} from './SignInElements'
import LoginImage from '../../images/LoginCoverImage.jpg'
const SignIn = () => 
    (<>
    <Outer>
        <OuterInner>
            <Login>
                <LoginCol1>
                    <LoginImg src={LoginImage} />
                </LoginCol1>
                <LoginCol2>
                    <LoginHead>
                        Sign up for free
                    </LoginHead>
                    <LoginWrap>
                        <Entry>
                            <EntryTop>
                                <EntryTitleH3>Sign in</EntryTitleH3>
                                <EntryInfoP>Please ensure you are visiting the correct url.</EntryInfoP>
                                <EntryCorrect>
                                    <IconLock />
                                    <EntryUrl>https://accounts.rental.com/signin</EntryUrl>
                                </EntryCorrect>
                            </EntryTop>
                            <EntryForm>
                                <EntryTab>
                                    <EntryContainer>
                                        <EntryItem>
                                            <Field action="#">
                                                <FieldLabel type='email' required>Email</FieldLabel>
                                                <FieldWrap>
                                                    <FieldInputEmail />
                                                </FieldWrap>
                                                <FieldLabel type='password' required>Password</FieldLabel>
                                                <FieldWrap>
                                                    <FieldInputPassword />
                                                        
                                                   
                                                </FieldWrap>
                                            </Field>
                                        </EntryItem>
                                    </EntryContainer>
                                </EntryTab>
                                <EntryFoot>
                                    <EntryLink>Forgot password</EntryLink>
                                </EntryFoot>
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
