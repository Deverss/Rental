import styled from 'styled-components'
import {BiBed} from 'react-icons/bi';
import {BiArea} from 'react-icons/bi';

export const PropertyOuter = styled.div`

`

export const DetailSection = styled.div`
    
`

export const DetailCenter = styled.div`
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 80px;
    margin-bottom: 60px;
`

export const DetailHead = styled.div`
    display: flex;
    align-items: flex-start;
    margin-bottom: 64px;
    
`

export const DetailBox = styled.div`
    flex-grow: 1;
    padding-right: 40px;
    margin-top: 150px;
`

export const DetailTitleH2 = styled.h2`
    max-width: 640px;
    margin-bottom: 40px;
    font-size: 48px;
    line-height: 1.16667;
    letter-spacing: -.02em;
`

export const DetailLine = styled.div`
    display: flex;
    align-items: center;
    flex-wrap: wrap;
`

export const DetailOpions = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin: -4px 0 6px -20px;
    @media only screen and (max-width: 1023px){
        flex: 0 0 100%;
        margin-top: 6px;
    }
`

export const Host = styled.div`

`

export const HostAvatar = styled.div`

`

export const HostAvatarLink = styled.div`

`

export const HostName = styled.h4`

`

export const PropertyType = styled.div`

`

export const PropertyIcon = styled.div`

`


export const PropertyTitle = styled.div`

`

export const DetailGallery = styled.div`

`

export const DetailGalleryList = styled.div`
        display: grid;
        margin-right: 8px;
        grid-gap: 10px;
        grid-template-columns: repeat(4, 1fr);
        grid-template-rows: repeat(3, 1fr);
`

export const DetailGalleryMain = styled.div`
    
    cursor: pointer;
    grid-column: 1 / 4;
    grid-row: 1 / 4;
`

export const GalleryMainPreviewImg = styled.div`

`

export const GalleryMainImg = styled.img`
    max-width: 100%;
    max-height: 100%;
    border-radius: 16px;
    object-fit: cover;
    

   
`

export const GalleryMainPreviewButton = styled.div`

`

export const ButtonLink = styled.div`

`

export const DetailGallerySmall = styled.div`
    &:hover {
        cursor: pointer; 
    }
`

export const GallerySmallImg = styled.img`
max-width: 100%;
max-height: 100%;
border-radius: 16px;
object-fit: cover;

`

export const DescriptionSection = styled.div`
@media only screen and (max-width: 1179px){
    margin-bottom: 80px;
    padding-bottom: 80px;
}
`

export const DescriptionCenter = styled.div`
    display: flex;
    align-items: flex-start;
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 80px;
    @media only screen and (max-width: 1023px) {
    padding: 0 40px;
}

`

export const DescriptionWrapper = styled.div`
@media only screen and (max-width: 1023px)
{
    max-width: 100%;
    margin-bottom: 48px;
    padding-right: 0;
    overflow: visible;
}
@media only screen and (max-width: 1179px) {
    flex: 0 0 calc(100% - 400px);
    max-width: calc(100% - 400px);
    padding-right: 32px;
}

    flex: 0 0 calc(100% - 448px);
    max-width: calc(100% - 448px);
    padding-right: 48px;
    overflow: hidden;
`

export const DescriptionTextH4 = styled.h4`
    font-size: 32px;
    line-height: 1.25;
    letter-spacing: -.01em;
`

export const DescriptionParameters = styled.div`
display: flex;
flex-wrap: wrap;
margin: 24px 0 40px 0;
padding-top: 14px;
border-top: 1px solid #000;
`


export const DescriptionParametersPart = styled.div`
display: flex;
align-items: center;
margin-top: 10px;
color: #000;
`

export const Iconbed = styled(BiBed)`
    margin-left: 20px;
    font-size: 20px;
`
export const IconRoom = styled(BiArea)`
    font-size: 20px;
`


export const H5 = styled.div`
    font-size: 18px;
    font-color: #000;
    margin-left: 5px;

`

export const DescriptionContent = styled.div`
margin-bottom: 48px;
    font-size: 16px;
    line-height: 1.5;
`

export const DescriptionContentP = styled.p`
margin-bottom: 24px;
color: #878787;
`

export const DescriptionInfo = styled.h2`
    margin-bottom: 32px;
    font-size: 24px;
    line-height: 1.33333;
    font-weight: 600;
    letter-spacing: -.01em;
`

export const DescriptionOptions = styled.div`
position: relative;
display: flex;
flex-wrap: wrap;
margin: -24px 0 48px;
':before': {
    content: "";
    position: absolute;
    top: 24px;
    left: 44%;
    bottom: 0;
    width: 1px;
    background: #E6E8EC;
}
`
export const DetailOptions = styled.div`

`
export const GallerySmallLink = styled.div`

`
export const DescriptionOptionPart = styled.div`
    display: flex;
    margin-top: 24px;
    @media only screen and (max-width: 1339px){
        padding-right: 24px;
    }
`

export const IconModem = styled.div`

`


export const Receipt = styled.div`
flex-shrink: 0;
width: 448px;
padding: 40px;
border: 1px solid #fff;
border-radius: 28px;
background: #FCFCFD;
box-shadow: 0px 4px 24px 1px rgba(0, 0, 0, 0.09);
`

export const ReceiptHead = styled.div``
export const ReceiptPriceH3 = styled.h3`
font-family: DM Sans;
font-style: normal;
font-weight: bold;
font-size: 14px;
line-height: 18px;

color: #878787;
`
export const ReceiptPriceNumberH4 = styled.h4`
font-family: DM Sans;
font-style: normal;
font-weight: bold;
font-size: 48px;
line-height: 62px;

color: #000000;
`
export const ReceiptMiddle = styled.div`
border-top: 1px solid #878787;
margin-top: 30px;
`
export const Incurred = styled.div``
export const IncurredH2 = styled.h2`
font-family: DM Sans;
font-style: normal;
font-weight: bold;
font-size: 24px;
line-height: 31px;
margin-top: 15px;
color: #000000;
`
export const ReceiptLine = styled.div`
    display: flex;
    padding: 8px 0px;
`
export const ReceiptCell = styled.div`
    margin-right: auto;
    color: #777E90;
    `
export const ReceiptCellRight = styled.div`
    margin-left: auto;
    color: #777E90;
    
`
export const ReceiptBtn = styled.div``
export const BtnStroke = styled.div``
export const BtnStrokeP = styled.p``
export const BtnPayment = styled.div``
export const BtnPaymentP = styled.p``

