import React from 'react';
import Image1 from '../../images/BoardingHouse.png';
import Image2 from '../../images/StudioApartment.png';
import Image3 from '../../images/ResidentialHouse.png';
import {
    CatalogContainer,
    CatalogWrapper,
    CatalogH2,
    CatalogP,
    CatalogCard,
    CatalogImage,
    CatalogName,
    HomeIcon,
    Amount,
    CatalogDetail
} from './CatalogElements'

const CatalogSection = () => {
    return (
        <CatalogContainer>
            <CatalogH2>Browse by catalog</CatalogH2>
            <CatalogP>Let’s see which one is suitable for you</CatalogP>
                <CatalogWrapper>
{/* Card catalog */}
                    <CatalogCard>
                        <CatalogImage src={Image1}/>
                        <CatalogName>Boarding house</CatalogName>
                        <CatalogDetail><HomeIcon /><Amount>3,213</Amount></CatalogDetail>
                    </CatalogCard>
                    <CatalogCard>
                        <CatalogImage src={Image2}/>
                        <CatalogName>Studio apartment</CatalogName>
                        <CatalogDetail><HomeIcon /><Amount>3,213</Amount></CatalogDetail>
                    </CatalogCard>
                    <CatalogCard>
                        <CatalogImage src={Image3}/>
                        <CatalogName>Residential house</CatalogName>
                        <CatalogDetail><HomeIcon /><Amount>3,213</Amount></CatalogDetail>
                    </CatalogCard>
{/* Card catalog */}
    
                </CatalogWrapper>
        </CatalogContainer>
    )
}

export default CatalogSection
