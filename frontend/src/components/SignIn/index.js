import React,{useState} from 'react'
import { doUserLogin } from '../../Service/AuthService';
import { setToken,setUser,getUser } from '../../Api/Common';
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

const SignIn = () => {
    const [username,setUsername] = useState(null);
    const [password,setPassword] = useState(null);
    async function handleFormSubmit(event){
        event.preventDefault();
        const postData = {
            email : username,
            password : password,
        }
        const response = await doUserLogin(postData);
        setToken(response.token);
        setUser(response.user);
        
    }
    return (<>
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
                                                <Field  onSubmit={handleFormSubmit}>
                                                    <FieldLabel htmlFor='for'>Email</FieldLabel>
                                                    <FieldWrap>
                                                        <FieldInputEmail type='email' onChange={(event)=>{setUsername(event.target.value)}} required />
                                                    </FieldWrap>
                                                        <FieldLabel htmlFor='for'>Password</FieldLabel>
                                                    <FieldWrap>
                                                        <FieldInputPassword type='password' onChange={(event)=>{setPassword(event.target.value)}} required />
                                                    </FieldWrap>
                                                    <EntryButton type='submit' value='Login' />
                                                </Field>
                                            </EntryItem>
                                        </EntryContainer>
                                    </EntryTab>
                                    <EntryFoot>
                                        <EntryLink>Forgot password?</EntryLink>
                                    </EntryFoot>
                                    
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
}
    


export default SignIn
