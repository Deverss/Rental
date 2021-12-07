import styled from 'styled-components';
import {BsSearch} from 'react-icons/bs';



export const OuterInner = styled.div``
export const SectionSetting = styled.div`
padding-top: 100px;
margin-top: 50px;
@media only screen and (max-width: 1179px){
    padding-top: 84px;
}
`
export const SettingCenter = styled.div`
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 80px;
    display: flex;
    align-items: flex-start;
`
export const SettingMenu = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    flex-shrink: 0;
    width: 256px;
    padding: 48px;
    border-radius: 16px;
    box-shadow: 0px 32px 32px -12px rgb(15 15 15 / 8%);
`
export const SettingLinkActive = styled.div`

    display: flex;
    align-items: center;
    font-family: 'DM Sans', sans-serif;
    font-size: 14px;
    line-height: 1.14286;
    font-weight: 700;
    color: #23262F;
    transition: color .2s;
    margin-bottom: 40px;
    cursor: pointer;
`
export const IconUser = styled.div``
export const TextH2 = styled.div``
export const SettingLink = styled.div`
    display: flex;
    align-items: center;
    font-family: 'DM Sans', sans-serif;
    font-size: 14px;
    line-height: 1.14286;
    font-weight: 700;
    color: #777E90;
    transition: color .2s;
    margin-bottom: 40px;
    &:hover {
        color: #23262F;
        cursor: pointer;
    }
`
export const SettingContainer = styled.div`
    padding-left: 128px;
    flex-grow: 1;
    @media only screen and (max-width: 1339px){
        padding-left: 64px;
    }
    @media only screen and (max-width: 1179px){
        padding-left: 32px;
    }

`
export const SettingItem = styled.div`

`
export const SettingForm = styled.form``
export const SettingHead = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 64px;
    `
export const SettingTitleH2 = styled.h2`
    font-size: 48px;
    line-height: 1.16667;
    letter-spacing: -.02em;
    margin-right: auto;
    margin-left: 10px;
`
export const ButtonStroke = styled.a`
    flex-shrink: 0;
    margin-left: 16px;
    background: none;
    box-shadow: 0 0 0 2px #e6e8ec inset;
    color: #23262F;
    border-width: 0px;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    height: 48px;
    padding: 0 24px;
    text-decoration: none;
    border-radius: 24px;
    font-family: 'DM Sans', sans-serif;
    font-size: 16px;
    
    line-height: 1;
    text-align: center;
    cursor: pointer;
    transition: all .2s;
    &:hover {
       
    }
`
export const SetttingList = styled.div`

`
export const SettingSection = styled.div`
margin-bottom: 48px;


`
export const SettingCategory = styled.h3`
    margin-bottom: 32px;
    font-size: 16px;
    line-height: 1.5;
    font-weight: 500;
    margin-left: 10px;
`
export const SettingRow = styled.div`
    display: flex;
    margin: 0 auto;
`
export const SettingFieldSet = styled.div``
export const Field = styled.div`
flex: 0 0 calc(50% - 20px);
    width: calc(50% - 20px);
    margin: 0 10px;
`
export const FieldFacebook = styled.div`
flex: 0 0 calc(50% - 20px);
    
    margin: 0 10px;
`
export const FieldText = styled.div`
margin: 0 10px;
`
export const FieldLabel = styled.label`
margin-bottom: 12px;
margin-top: 12px;
    font-size: 12px;
    line-height: 1;
    font-weight: 700;
    text-transform: uppercase;
    
`
export const FiedlWrap = styled.div`
position: relative;
`
export const FieldInput = styled.input`
width: 100%;
    border-radius: 10px;
    border: 2px solid #E6E8EC;
    box-shadow: none;
    background: none;
    font-family: 'Poppins', sans-serif;
    font-size: 14px;
    line-height: 1.71429;
    font-weight: 500;
    color: #23262F;
    transition: border-color .2s;
    height: 48px;
    padding: 0 14px;
    -webkit-appearance: none;
`
export const FieldTextarea = styled.textarea`
width: 100%;
border-radius: 12px;
border: 2px solid #E6E8EC;
box-shadow: none;
background: none;
font-family: 'Poppins', sans-serif;
font-size: 14px;
line-height: 1.71429;
font-weight: 500;
color: #23262F;
transition: border-color .2s;
height: 140px;
    padding: 10px 14px;
    resize: none;
`
export const SetttingControl = styled.div`
display: flex;
    align-items: center;
    margin-top: 48px;
    padding-top: 48px;
    border-top: 1px solid #E6E8EC;
`
export const ButtonSetting = styled.div`
display: inline-flex;
    justify-content: center;
    align-items: center;
    height: 48px;
    padding: 0 24px;
    background: #3B71FE;
    border-radius: 24px;
    font-family: 'DM Sans', sans-serif;
    font-size: 16px;
    cursor: pointer;
    line-height: 1;
    text-align: center;
    color: #FCFCFD;
    transition: all .2s;
`
