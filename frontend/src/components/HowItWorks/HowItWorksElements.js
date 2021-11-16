import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const HowItWorksContainer = styled.div`
    margin-top: 130px;
`

export const HowItWorksH2 = styled.h2`
    text-align: center;
    margin:
    font-family: DM Sans;
    font-style: normal;
    font-weight: bold;
    font-size: 48px;
    line-height: 50px;
    margin: 0 auto;
`

export const HowItWorksTitle = styled.p`
    padding: 0 350px;
    align-items: center;
    font-family: DM Sans;
    font-style: normal;
    font-weight: normal;
    font-size: 24px;
    line-height: 31px;
    text-align: center;
    // margin-bottom: 100px;
    color: #868686;
`

export const HowItWorksP = styled.p`
    padding-bottom: 3px;
    max-width: 1000px;
    margin: 0 auto;
    align-items: left;
`

export const HowItWorksBtn = styled.div`
    text-align: center;
    border-radius: 5px;
    margin: 40px auto;
`

export const HowItWorksBtnLink = styled(Link)`
    display: absolute;
    border-radius: 5px;
    background: white;
    white-space: nowrap;
    padding: 13px 36px;
    color: #fff;
    background: #000;
    font-size: 16px;
    outline: none;
    cursor: pointer;
    // transition: all 0.8s ease-in-out;
    text-decoration: none;
    box-sizing: border-box;
    border: 2px solid #000000;

    &:hover {
        transition: all 0.2s ease-in-out;
        background-color: #fff;  
        color: #000000;
`
