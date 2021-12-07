import styled from 'styled-components';
import {TiLocationArrowOutline} from 'react-icons/ti';
import {
    BsCalendarRange,
    BsSearch,
} from 'react-icons/bs';

export const OuterInner = styled.div`

`

export const MainCategory = styled.div`
    margin-bottom: 80px;
`

export const CategoryCenter = styled.div`
    padding: 0 40px;
    width: 100%;
    max-width: 1280px;
    margin: 0 auto;
    padding: 0 80px;
`

export const CategoryPreview = styled.div`
    position: relative;
`

export const BackgroundImage = styled.img`
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 24px;
    object-fit: cover;
    height: 450px;
`

export const CategoryWrap = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 70px 80px 184px;
    text-align: center;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
`

export const CategoryTitle = styled.div`
    font-size: 76px;
    line-height: 1;
    letter-spacing: -.02em;
    font-weight: 700;
    margin-bottom: 240px;
    color: #ffffff;
`

export const CategoryPanel = styled.div`
    margin: -90px 80px 0;
    position: relative;
    z-index: 5;
    padding: 40px;
`

export const PanelBackground = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
    box-shadow: 0px 40px 64px -32px rgb(15 15 15 / 10%);
    content: "";
    background: linear-gradient(83.59deg, #FCFCFD 36.52%, rgba(252, 252, 253, 0.83) 98.8%);
    border: 1px solid #FCFCFD;
    backdrop-filter: blur(32px);
    border-radius: 24px;
`

export const PanelBody = styled.div`
    position: relative;
    z-index: 3;
`

export const PanelRow = styled.div`
    display: flex;

`

export const Location = styled.div`
    flex: 0 0 310px;
    height: 72px;
    position: relative;
    overflow: hidden;

`

export const LocationHead = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 16px;
    user-select: none;
    transition: box-shadow .2s, background .2s;
`

export const LocationIcon = styled.div`
    position: absolute;
    top: 20px;
    left: 16px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 32px;
    height: 32px;
    pointer-events: none;
`

export const LocationIconLogo = styled(TiLocationArrowOutline)`
    width: 30px;
    height: 30px;
    color: #B1B5C3;
    overflow: hidden;
    vertical-align: middle;
    box-sizing: inherit;
`

export const LocationInput = styled.input`
    width: 100%;
    height: 100%;
    padding: 0 16px 0 56px;
    border-radius: 16px;
    background: none;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-size: 22px;
    line-height: 1.33333;
    font-weight: 600;
    letter-spacing: -.01em;
    color: #23262F;
    cursor: auto;
    border: none;
`

export const CheckIn = styled.div`
    flex: 0 0 280px;
    height: 72px;
    position: relative;
    overflow: hidden;
`

export const CheckInHead = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 16px;
    user-select: none;
    transition: box-shadow .2s, background .2s;
`

export const CheckInIcon = styled.div`
    position: absolute;
    top: 20px;
    left: 16px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 32px;
    height: 32px;
    pointer-events: none;
`

export const CalendarLogo = styled(BsCalendarRange)`
    width: 24px;
    height: 24px;
    color: #B1B5C3;
    overflow: hidden;
    vertical-align: middle;
    box-sizing: inherit;
    position: absolute;
`

export const CheckInP = styled.p`
    width: 100%;
    height: 100%;
    padding: 0 16px 0 56px;
    border-radius: 16px;
    background: none;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-size: 22px;
    line-height: 1.33333;
    font-weight: 600;
    letter-spacing: -.01em;
    color: #23262F;
    cursor: pointer;
    border: none;
    line-height: 72px;
`

export const CheckOut = styled.div`
    flex: 0 0 310px;
    height: 72px;
    position: relative;
    overflow: hidden;
`

export const CheckOutHead = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 16px;
    user-select: none;
    transition: box-shadow .2s, background .2s;
`

export const CheckOutIcon = styled.div`
    position: absolute;
    top: 20px;
    left: 16px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 32px;
    height: 32px;
    pointer-events: none;
`

export const CheckOutP = styled.p`
    width: 100%;
    height: 100%;
    padding: 0 116px 0 56px;
    border-radius: 16px;
    background: none;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-size: 22px;
    line-height: 1.33333;
    font-weight: 600;
    letter-spacing: -.01em;
    color: #23262F;
    cursor: pointer;
    border: none;
    line-height: 72px;
` 

export const PanelSearch = styled.div`
    position: absolute;
    top: 50%;
    right: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 64px;
    height: 64px;
    -webkit-transform: translateY(-50%);
    transform: translateY(-50%);
    background: #3B71FE;
    border-radius: 50%;
    transition: background .2s;
`

export const PanelSearchIcon = styled.div`
    vertical-align: middle;
    box-sizing: inherit;
    overflow: hidden;
    cursor: pointer;
`

export const SearchLogo = styled(BsSearch)`
    width: 24px;
    height: 24px;
    color: #fcfcfd;
`

export const SectionCatalog = styled.div`
    margin-bottom: 136px;
`

export const SectionBrowse = styled.div`
    margin-bottom: 80px;
`

export const BrowseCenter = styled.div`
    width: 100%;
    max-width: 1280px;
    margin: 0 auto;
    padding: 0 80px;
`

export const BrowseInner = styled.div`
    position: relative;
`

export const BrowseHead = styled.div`
    margin-bottom: 48px;
    padding-right: 120px;
`

export const BrowseTitle = styled.h4`
    font-size: 32px;
    line-height: 1.25;
    letter-spacing: -.01em;
    font-weight: 700;
`

export const BrowseWrapper = styled.div`
    margin: 0 -16px;
`

export const BrowseSlider = styled.div`
    visibility: visible;
    position: static;
    display: block;
    box-sizing: border-box;
    user-select: none;
    touch-action: pan-y;
`

export const SlickList = styled.div`
    overflow: visible;
    transform: translate3d(0, 0, 0);
    position: relative;
    display: block;
    margin: 0;
    padding: 0
`

export const SlickTrack = styled.div`
    display: flex;
    flex-direction: column;
    flex: 0 0 calc(33.333% - 62px);
    max-width: 245px;
    margin: 32px 16px 0;
    padding: 12px;
    box-shadow: 0px 32px 32px rgb(31 47 70 / 12%);
    border-radius: 20px;

    @media only screen and (max-width: 1279px){
        flex: 0 0 calc(50% - 32px);
        max-width: calc(50% - 32px);
    }
`

export const CardPreview = styled.div`
    position: relative;
    border-radius: 16px;
    overflow: hidden;
`
 
export const CardImg = styled.img`
    vertical-align: middle;
    border-radius: 16px;
    object-fit: cover;
    max-height: 250px;
    max-width: 250px;
    transition: -webkit-transform 1s;
    transition: transform 1s;
    transition: transform 1s, -webkit-transform 1s;
`

export const CardLink = styled.div`

`

export const CardH2 = styled.h2`

`


export const PriceH3 = styled.div`

`








