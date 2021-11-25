import React from 'react';
import SigninImage from '../../images/SigninImage.jpg'
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

const SignIn = () => 
    (<>
    <Outer>
        <OuterInner>
            <Login>
                <LoginCol1>
                    <LoginImg src={SigninImage} />
                </LoginCol1>
                <LoginCol2>
                    <LoginHead to="/signup">
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
                                <EntryFoot>
                                    <EntryLink>Forgot password?</EntryLink>
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
