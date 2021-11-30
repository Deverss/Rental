import styled from 'styled-components';
import {BsFillLockFill} from 'react-icons/bs';
import {Link} from 'react-router-dom';

export const Outer = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    overflow: hidden;
`

export const OuterInner = styled.div`
    display: flex;
    flex-direction: column;
    flex-grow: 1;
`
export const Login = styled.div`
    display: flex;
`
export const LoginCol1 = styled.div`
       
    position: relative;
    flex-shrink: 0;
    width: 512px;
    min-height: 100vh;
  
    
    @media only screen and (max-width: 1179px){
        width: 350px;
    }
    @media only screen and (max-width: 1339px){
        width: 420px;
    }
`
export const LoginImg = styled.img`
    background-position: center;
    object-fit: cover;
    flex-shrink: 0;
    width: 512px;
    min-height: 120vh;
    
    background-repeat: no-repeat;
    background-position: 100% 50%;
    background-size: cover;
    
    @media only screen and (max-width: 1179px){
        width: 350px;
    }
    @media only screen and (max-width: 1339px){
        width: 420px;
    }`
export const LoginCol2 = styled.div`
    position: relative;
    position: relative;
    display: flex;
    flex-grow: 1;
    padding: 148px 64px 132px;
    @media only screen and (max-width: 1419px){
        padding: 124px 48px 76px;
    }
`


export const LoginHead = styled(Link)`
    position: absolute;
    top: 80px;
    right: 80px;
    left: 80px;
    text-align: right;
    font-family: 'DM Sans', sans-serif;
    font-size: 14px;
    line-height: 1.14286;
    font-weight: 700;
    text-decoration: none;
    color: #3772FF;

    &:hover {
        color: #0444ec;
    }
     
    @media only screen and (max-width: 1419px) {
        top: 56px;
        right: 64px;
        left: 64px;
    }
`

export const LoginWrap = styled.div`
    width: 380px;
    margin: auto;
`

export const Entry = styled.div`

`

export const EntryTop = styled.div`
    margin-bottom: 32px;
    padding-bottom: 32px;
    border-bottom: 1px solid #E6E8EC;
`

export const EntryTitleH3 = styled.h3`
    margin-bottom: 32px;
    text-align: center;
    font-size: 40px;
    line-height: 1.2;
    letter-spacing: -.01em;
`

export const EntryInfoP = styled.p`
    margin-bottom: 12px;
    text-align: center;
    font-size: 12px;
    line-height: 1.66667;
    color: #777E90;
`

export const EntryCorrect = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 40px;
    padding: 0 24px;
    background: #F4F5F6;
    border-radius: 20px;
    font-weight: 500;
    color: #58BD7D;
`

export const IconLock = styled(BsFillLockFill)`
    margin-right: 10px;
`

export const EntryUrl = styled.div`
`

export const EntryForm = styled.div`
`

export const EntryTab = styled.div`
`

export const EntryContainer = styled.div`
    margin-bottom: 32px;
`

export const EntryItem = styled.div`
`

export const Field = styled.form`
`

export const FieldLabel = styled.h3`
    margin-top: 12px;
    margin-bottom: 12px;
    font-size: 12px;
    line-height: 1;
    font-weight: 700;
    text-transform: uppercase;
    color: #000;
`

export const FieldWrap = styled.div`
`

export const EntryFoot = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 16px;
    font-size: 12px;
    line-height: 1.66667;
    font-weight: 600;

`

export const EntryLink = styled(Link)`
    color: #3772FF;
    transition: color .2s;
    text-decoration: none;
    font-size: 14px;

    &:hover {
        color: #0444ec; 
    }
`

export const EntryButton = styled.input`
    width: 100%;
    margin-top: 32px;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    height: 48px;
    padding: 0 24px;
    background: #3B71FE;
    border-radius: 24px;
    font-family: 'DM Sans', sans-serif;
    font-size: 16px;
    font-weight: 700;
    line-height: 1;
    text-align: center;
    color: #FCFCFD;
    transition: all .2s;
    text-decoration: none;
    border : none;
    &:hover {
        background: #0444ec;
    }
`

export const FieldInputEmail = styled.input`
    height: 48px;
    padding: 0 14px;
    width: 100%;
    border-radius: 12px;
    border: 2px solid #E6E8EC;
    box-shadow: none;
    background: none;
    
    font-size: 14px;
    line-height: 1.71429;
    font-weight: 500;
    color: #23262F;
    transition: border-color .2s;
`

export const FieldInputPassword = styled.input`

    height: 48px;
    padding: 0 14px;
    width: 100%;
    border-radius: 12px;
    border: 2px solid #E6E8EC;
    box-shadow: none;
    background: none;

    font-size: 14px;
    line-height: 1.71429;
    font-weight: 500;
    color: #23262F;
    transition: border-color .2s;
`

export const EntryWrap = styled.div`
`