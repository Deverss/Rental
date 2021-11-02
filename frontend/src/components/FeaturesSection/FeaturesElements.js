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
    max-width: 1100px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    align-items: left;
    grid-gap: 40px;


    @media screen and (max-width: 768px) {
        grid-template-columns: 1fr 1fr 1fr;
    }

    @media screen and (max-width: 768px) {
        grid-template-columns: 1fr;
        padding: 0 20px;  
    }
`

export const FeaturesCard = styled.div`
    background: #fff;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: left;
    border-radius: 7px;
    max-height: 740px;
    max-width: bold;
    padding: 10px;
    cursor: pointer;

    
}
`

export const FeaturesImage = styled.img`
    cursor: pointer;
    border-radius: 8px;
    width: 300px;
    height: 200px;
    left: 0px;
    
`

export const FeaturesDetailCard = styled.div`
    color: #868686;
    padding: 20px 25px;
    margin-top: -40px;
    margin-left: 15px;
    margin-right: -15px;
    background: #fff;
    border-radius: 8px;
    box-shadow: 0px 3px 24px 1px rgba(0, 0, 0, 0.09);


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
    margin-left: 10px;
`

export const AreaIcon = styled(BiArea)`

`

export const Area = styled.p`
    margin-left: 10px;
`

export const BedroomIcon = styled(MdOutlineBedroomParent)`
    
`

export const Amount = styled.p`
    margin-left: 10px;
`

export const PriceP = styled.p`

`

export const PriceRoom = styled.p`
    color: #0A944A;
    font-size: 24px;
    font-weight: bold;
    margin-left: 30px;
`

export const Adress = styled.div`
    margin-top:5px;
    display: flex;
    justify-content: left;
`
export const AreaDetail = styled.div`
    margin-top:3px;
    display: flex;
    justify-content: left;
`
export const Bedroom = styled.div`
    margin-top:3px;
    display: flex;
    justify-content: left;
`

export const Price = styled.div`
    margin-top:5px;
    display: flex;
    justify-content: left;
`