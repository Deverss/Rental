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
    position: relative;
    cursor: pointer;
    grid-column: 1 / 4;
    grid-row: 1 / 4;
`

export const GalleryMainPreviewImg = styled.div`

`

export const GalleryMainImg = styled.img`
width: 100%;
height: 100%;
border-radius: 16px;
object-fit: cover;

`

export const GalleryMainPreviewButton = styled.div`

`

export const ButtonLink = styled.div`

`

export const DetailGallerySmall = styled.div`

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
border-top: 1px solid #E6E8EC;
`


export const DescriptionParametersPart = styled.div`
display: flex;
align-items: center;
margin-top: 10px;
color: #777E90;
`

export const Iconbed = styled(BiBed)`

`
export const IconRoom = styled(BiArea)`
`


export const H5 = styled.div`

`

export const DescriptionContent = styled.div`

`

export const DescriptionContentP = styled.div`

`

export const DescriptionInfo = styled.div`

`

export const DescriptionOptions = styled.div`

`
export const DetailOptions = styled.div`

`
export const GallerySmallLink = styled.div`

`
export const DescriptionOptionPart = styled.div`

`

export const IconModem = styled.div`

`


export const Receipt = styled.div`

`

