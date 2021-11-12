import styled from 'styled-components';
import {FiPhoneCall} from 'react-icons/fi';
import {AiOutlineClockCircle} from 'react-icons/ai';
import {VscCircuitBoard} from 'react-icons/vsc';


export const FeaturesSection = styled.div`
    margin-top: 150px;
`

export const FeaturesTitle = styled.div`
    text-align: center;
    font-family: DM Sans;
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 23px;
    color: #868686;
`

export const FeaturesText = styled.div`
    
`

export const FeaturesHeadline = styled.div`
    text-align: center;
    width: 370px;
    height: 110px;
    font-family: DM Sans;
    font-style: normal;
    font-weight: bold;
    font-size: 48px;
    line-height: 50px;
    margin: 0 auto;
`
export const FeaturesWrap = styled.div`
    max-width: 1000px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    align-items: left;
    grid-gap: 40px;


        @media screen and (max-width: 900px) {
          grid-template-columns: 1fr 1fr 1fr;
            }

        @media screen and (max-width: 768px) {
            grid-template-columns: 1fr;
        padding: 0 20px;  
            }
`
export const FeaturesP = styled.p`
    font-family: DM Sans;
    font-style: normal;
    font-weight: normal;
    font-size: 24px;
    line-height: 31px;
    text-align: center;
    margin-bottom: 100px;
    color: #868686;
`
export const Midbar = styled.div`
    border-right: 1px solid #D9D9D9;
    border-left: 1px solid #D9D9D9;
    
    `
export const FeaturesBox = styled.div`
    padding-left: 30px;
    padding-right: 30px;
    height: 200px;
`

export const FeaturesIconContact = styled(FiPhoneCall)`
    font-size: 50px;
    color: #000;
`

export const FeaturesIconTool = styled(VscCircuitBoard)`
    font-size: 50px;
    color: #000;       
`

export const FeaturesIconTime = styled(AiOutlineClockCircle)`
    font-size: 50px;
    color: #000;
`

export const FeaturesBoxTitle = styled.div`
    margin-top: 30px;
    font-family: DM Sans;
    font-style: normal;
    font-weight: bold;
    font-size: 24px;
`

export const FeaturesBoxDesc = styled.div`
    font-family: DM Sans;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 18px;
    margin-top: 10px;        
    color: #868686;       
`
export const FeaturesDetail1 = styled.div`
    max-width: 1000px;
    margin-top: 100px;
    margin-right: auto;
    margin-bottom: 0px;
    margin-left: auto;
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: left;
    grid-gap: 40px;


        @media screen and (max-width: 900px) {
          grid-template-columns: 1fr 1fr;
            }

        @media screen and (max-width: 768px) {
            grid-template-columns: 1fr;
        padding: 0 20px;  
            }
`

export const FeaturesImage1 = styled.img`
    margin-left: 50px;

`
export const FeaturesDetailText = styled.div`
    margin: 0 auto;
    position: relative;
    top: 30%;
    transform : translateY(-50);
`
export const FeaturesDetailH2 = styled.h2`
    font-style: normal;
    font-weight: bold;
    font-size: 36px;
    margin-right: 150px; 
    margin-bottom: 30px;
`
export const FeaturesDetailDesc = styled.p`
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 23px;
    margin-right: 80px;      
    color: #868686;
    margin-bottom: 30px;
`
export const FeaturesBtn =styled.div`
    display: flex;
    align-items: center;

    @media screen and (max-width: 768px) {
     display: none;
    }        
`

export const FeaturesBtnLink = styled.div`
    border-radius: 8px;
    background: black;
    white-space: nowrap;
    padding: 13px 36px;
    color: #fff;
    font-size: 16px;
    outline: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;
    box-sizing: border-box;
    border: 2px solid #000000;
    &:hover {
        background-color: #fff;  
        color: #000;
}
`