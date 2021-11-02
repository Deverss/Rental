import styled from 'styled-components';
import {BiHomeAlt} from 'react-icons/bi';

export const CatalogContainer = styled.div`
    
`

export const CatalogWrapper = styled.div`
    max-width: 1000px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    align-items: left;
    grid-gap: 40px;
    

    @media screen and (max-width: 1000px) {
        grid-template-columns: 1fr 1fr 1fr;
    }

    @media screen and (max-width: 768px) {
        grid-template-columns: 1fr;
        padding: 0 20px;  
    }
`

export const CatalogH2 = styled.h2`
    font-size: 48px;
    text-align: center;
    color: #000;

`
export const CatalogP = styled.p`
    font-size: 18px;
    text-align: center;
    color: #868686;
    margin-bottom: 30px;
`

export const CatalogCard = styled.div`
    background: #fff;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: left;
    border-radius: 25px;
    max-height: 740px;
    max-width: bold;
    padding: 10px;
    cursor: pointer;
`


export const CatalogImage = styled.img`
    cursor: pointer;
    border-radius: 20px;
    width: 280px;
    height: 280px;
    margin-bottom: 20px;
`
export const CatalogName = styled.h3`
    font-weight: bold;
    font-size: 20px;
    margin-bottom: 5px;
`

export const HomeIcon = styled(BiHomeAlt)`
    font-size: 20px;
    color: #868686;
`
export const CatalogDetail = styled.div`
    display: flex;
    justify-content: left;
`
export const Amount = styled.p`
    color: #868686;
`
