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
    max-width: 1000px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    align-items: center;
    grid-gap: 50px;
    padding: 0 50px;

    @media screen and (max-width: 1000px) {
        grid-template-columns: 1fr 1fr 1fr;
    }

    @media screen and (max-width: 768px) {
        grid-template-columns: 1fr;
        padding: 0 20px;  
}
`

export const FeaturesImage = styled.img`
    cursor: pointer;
    border-radius: 20px;
    width: 287px;
    height: 189px;
    left: 0px;
    
`

export const FeaturesDetailCard = styled.div`
    color: #868686;
`

export const FeaturesDetail = styled.div`

`

export const HomeName = styled.h5`
    text-align: left;
    font-size: 20px;
    font-weight: bold;
    color: #000;
`

export const AddressIcon = styled(BiMap)`
 
`

export const AddressName = styled.p`

`

export const AreaIcon = styled(BiArea)`

`

export const Area = styled.p`

`

export const BedroomIcon = styled(MdOutlineBedroomParent)`

`

export const Amount = styled.p`

`

export const PriceP = styled.p`

`

export const PriceRoom = styled.p`
    color: #0A944A;
    font-size: 24px;
    font-weight: bold;
`
