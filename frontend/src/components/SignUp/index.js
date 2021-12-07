import React,{useState} from 'react';
import { useHistory } from 'react-router';
import LoginImage from '../../images/LoginCoverImage.jpg'
import logo from '../../images/LogoText.png'
import { signUp } from '../../Api/Common';
import {
    Outer,
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
    LoginLogo,
    LoginBack
} from './SignUpElements'

const SignUp = () => {
    const [user, setUser] = useState({email: "", password: "", name: "", repassword: ""})
    const [message,setMessage] = useState(null);
    const history = useHistory();
    const changeInput = (e) => {
        setUser({...user, [e.target.name] : e.target.value})
      }
      const handleSubmit = async () => {
        const response = await signUp(user,history, setMessage);
        if(response.status == 201) {
            history.push('/signin');
        }else{
            setMessage('error');
        }
      }
    return (<>
        <Outer>
            <OuterInner>
                <Login>
                    <LoginCol1>
                        <LoginImg src={LoginImage} />
                        <LoginBack to="/">
                            <LoginLogo src={logo} />
                        </LoginBack>
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
                                                <Field >
                                                    <FieldLabel htmlFor='for'>User name</FieldLabel>
                                                    <FieldWrap>
                                                        <FieldInputEmail type='text' name='name' autoComplete='false' onChange={changeInput} required />
                                                    </FieldWrap>
                                                    <FieldLabel htmlFor='for'>Email</FieldLabel>
                                                    <FieldWrap>
                                                        <FieldInputEmail type='email' name='email' onChange={changeInput} autoComplete='true' required />
                                                    </FieldWrap>
                                                    <FieldLabel htmlFor='for'>Password</FieldLabel>
                                                    <FieldWrap>
                                                        <FieldInputPassword type='password' name='password' onChange={changeInput} required />
                                                    </FieldWrap>
                                                    <FieldLabel htmlFor='for'>Re-Password</FieldLabel>
                                                    <FieldWrap>
                                                        <FieldInputPassword type='password' name='repassword' onChange={changeInput} required />
                                                    </FieldWrap>
                                                </Field>
                                            </EntryItem>
                                        </EntryContainer>
                                    </EntryTab>

                                    <EntryButton onClick={handleSubmit} >Login</EntryButton>
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


export default SignUp
