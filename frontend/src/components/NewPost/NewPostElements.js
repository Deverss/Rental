import styled from 'styled-components';
import {BsCloudUpload} from 'react-icons/bs';

export const Outer = styled.div`
overflow: hidden;
`
export const OuterInner = styled.div`
`
export const SectionUpload = styled.div`
padding: 128px 0;
@media only screen and (max-width: 1339px){
    padding: 112px 0;
    
}
`
export const UploadCenter = styled.div`
width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 80px;
    display: flex;
    align-items: flex-start;
    @media only screen and (max-width: 1023px){
        display: block;
        padding: 0 40px;
    }
`
export const UploadWrapper = styled.div`
flex: 0 0 calc(100% - 352px);
    width: calc(100% - 352px);
    padding-right: 128px;
    @media only screen and (max-width: 1023px)
    {
        width: 100%;
        padding: 0;
    }
    @media only screen and (max-width: 1179px){
        flex: 0 0 calc(100% - 304px);
    width: calc(100% - 304px);
    padding-right: 32px;

    }
    @media only screen and (max-width: 1339px){
        padding-right: 64px;
    }
`
export const UploadHead = styled.div`
display: flex;
    margin-bottom: 40px;
    @media only screen and (max-width: 1179px){
        flex-direction: column-reverse;
    align-items: flex-start;
    }
`
export const UploadTitleH2 = styled.h1`
font-family: 'DM Sans', sans-serif;
font-weight: 700;
font-size: 48px;
    line-height: 1.16667;
    letter-spacing: -.02em;
    margin-right: auto;
`
export const UploadForm = styled.div`
`
export const UploadList = styled.div`
margin-bottom: 40px;
padding-bottom: 40px;
border-bottom: 1px solid #E6E8EC;
`
export const UploadItem = styled.div`
margin-bottom: 40px;
`
export const UploadCategory = styled.h3`
    font-size: 16px;
    line-height: 1.5;
    font-weight: 500;
    font-weight: bold;
`
export const UploadNote = styled.div`
margin-top: 4px;
font-size: 12px;
line-height: 1.66667;
color: #777E90;
`
export const UploadFile = styled.div`
position: relative;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
height: 182px;
margin-top: 16px;
border-radius: 16px;
overflow: hidden;
background: #F4F5F6;
`
export const UploadInput = styled.input`
position: absolute;
    top: 0;
    left: 0;
    font-size: 400px;
    opacity: 0;
`
export const UploadIcon = styled.div`
margin-bottom: 10px;
vertical-align: middle;
`
export const IconUpload = styled(BsCloudUpload)`
position:relative;
fill: #777E90;
font-size: 24px;
vertical-align: middle;
text-align: center;
`
export const UploadFormat = styled.div`
    font-size: 12px;
    line-height: 1.66667;
    color: #777E90;

`
export const UploadFieldSet = styled.div`
margin-top: 32px;
`
export const Field = styled.div`
margin-bottom: 32px;
`
export const FieldLabel = styled.div`
margin-bottom: 12px;
    font-size: 12px;
    line-height: 1;
    font-weight: 700;
    text-transform: uppercase;
    
`
export const FieldWrap = styled.div`
position: relative;
`
export const FieldInput = styled.input`
width: 100%;
    border-radius: 12px;
    border: 2px solid #E6E8EC;
    background: none;
    font-family: 'Poppins', sans-serif;
    font-size: 14px;
    line-height: 1.71429;
    font-weight: 500;
    color: #23262F;
    transition: border-color .2s;
    height: 48px;
    padding: 0 14px;
`
export const UploadRow = styled.div`
display: flex;
    margin: 0 -10px;
`
export const UploadCol = styled.div`
flex: 0 0 calc(33.333% - 20px);
width: calc(33.333% - 20px);
margin: 0 10px;
`
export const UploadFoot = styled.div`
display: flex;
    align-items: center;
`
export const Select = styled.div`
`
export const Option = styled.div`
`
export const ButtonUpload = styled.div`
display: inline-flex;
    justify-content: center;
    align-items: center;
    height: 48px;
    padding: 0 24px;
    background: #3772FF;
    border-radius: 24px;
    font-family: 'DM Sans', sans-serif;
    font-size: 16px;
    
    line-height: 1;
    text-align: center;
    color: #FCFCFD;
    transition: all .2s;
`
export const Info = styled.div`
flex-shrink: 0;
    width: 352px;
    @media only screen and (max-width: 1179px){
        width: 304px;
    }
`
export const InfoInner = styled.div`
padding: 48px;
background: #FCFCFD;
box-shadow: 0px 64px 64px rgb(31 47 70 / 12%);
border-radius: 16px;
@media only screen and (max-width: 1179px){
    padding: 24px;
}
`
export const InfoTitle = styled.div`
margin-bottom: 24px;
    font-size: 24px;
    line-height: 1.33333;
    font-weight: 600;
    letter-spacing: -.01em;
`
export const  TipTitle  = styled.div`
font-size: 18px;
line-height: 1.33333;
font-weight: 600;
letter-spacing: -.01em;
`
export const TipDescription = styled.div`
font-size: 14px;
line-height: 1.33333;
margin-bottom: 20px;
letter-spacing: -.01em;
`
