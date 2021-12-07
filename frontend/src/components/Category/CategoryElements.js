import styled from 'styled-components';
import {TiLocationArrowOutline} from 'react-icons/ti';
import {BsCalendarRange} from 'react-icons/bs';

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
    flex: 0 0 300px;
    height: 72px;
    position: relative;
    z-index: 3;
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
    width: 24px;
    height: 24px;
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
    cursor: pointer;
    border: none;
`

export const CheckIn = styled.div`

`

export const CheckInHead = styled.div`

`

export const CheckInIcon = styled.div`

`

export const CalendarLogo = styled(BsCalendarRange)`

`






