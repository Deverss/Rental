import styled from 'styled-components'

export const ServicesContainer = styled.div`
    height: 800px;
    margin-top: -70px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    

    @media screen and (max-width: 768px) {
        height: 1100px;
    }

    @media screen and (max-width: 480px) {
        height: 1300px;
    }
`

export const ServicesWrapper = styled.div`
    max-width: 1000px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: left;
    grid-gap: 50px;
    padding: 0 50px;

    @media screen and (max-width: 1000px) {
        grid-template-columns: 1fr 1fr;
    }

    @media screen and (max-width: 768px) {
        grid-template-columns: 1fr;
        padding: 0 20px;  
    }
`

export const ServicesCard = styled.div`
    background: #fff;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: left;
    border-radius: 25px;
    max-height: 740px;
    // max-width: bold;
    padding: 70px;
    
    
    
    &:hover {
        
        background: #EDEDED;
        transition: all 0.5s ease-in-out;
        cursor: pointer;
    }
`

export const ServicesIcon = styled.img`
    height: 100px;
    width: 100px;
    margin-bottom: 10px;
    color: #000;
`

// export const ServiceTitle = styled.div``
export const ServicesMission = styled.p`
    padding-right: 615px;
    font-size: 16px;
    font-weight: bold;
    text-align: left;
    color: #868686;
    display: grid;
`


export const ServicesH1 = styled.h1`
    font-size: 48px;
    font-weight: bold;
    margin-bottom: 64px;
    width: 723px;
    height: 124px;
    @media screen and (max-width: 480px) {
        font-size: 36px;
    }
`

export const ServicesH2 = styled.h2`
    font-size: 36px;
    margin-bottom: 10px;
    color: #000;
`

export const ServicesP = styled.p`
    font-size: 18px;
    text-align: left;
    color: #868686;

`
