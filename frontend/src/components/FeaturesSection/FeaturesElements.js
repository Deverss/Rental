import styled from 'styled-components';
import {
    BiMap,
    BiArea, 
} from 'react-icons/bi'; 
import {MdOutlineBedroomParent} from 'react-icons/md'

export const FeaturesContainer = styled.div`
    margin-top: 82px;
`

export const FeaturesH2 = styled.h2`
    font-size: 48px;
    text-align: center;
    color: #000;
`

export const FeaturesP = styled.p`
    font-size: 18px;
    text-align: center;
    color: #868686;
    margin-bottom: 30px;
`

export const FeaturesWrapper = styled.div`
    max-width: 1250px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    align-items: left;
    grid-gap: 50px;


    @media screen and (max-width: 768px) {
        grid-template-columns: 1fr 1fr 1fr;
    }

    @media screen and (max-width: 768px) {
        grid-template-columns: 1fr;
        padding: 0 20px;  
    }
`

export const FeaturesCard = styled.div`

`

export const FeaturesImage = styled.img`
    cursor: pointer;
    border-radius: 20px;
    width: 350px;
    height: 200px;
    left: 0px;
    
`

export const FeaturesDetailCard = styled.div`

`

export const FeaturesDetail = styled.div`

`

export const NameHome = styled.h5`
    text-align: center;
    font-size: 20px;
    // line-height: 10px;
    color: #000;
`

export const AddressIcon = styled(BiMap)`
    color: #868686;
`

export const AddressName = styled.p`
    color: #868686;
`

export const AreaIcon = styled(BiArea)`
    color: #868686;
`

export const Area = styled.p`
    color: #868686;
`

export const BedroomIcon = styled(MdOutlineBedroomParent)`
    color: #868686;
`

export const Amount = styled.p`
    color: #868686;
`

export const PriceP = styled.p`
    color: #868686;
`

export const PriceRoom = styled.p`
    color: #868686;
`
