import React from 'react';
import Img0 from '../../images/Room-0.jpg';
import Img1 from '../../images/Room-1.jpeg';
import Img2 from '../../images/Room-2.jpg';
import { 
    FeaturesContainer, 
    FeaturesH2,
    FeaturesP,
    FeaturesWrapper,
    FeaturesCard,
    FeaturesImage,
    FeaturesDetailCard,
    FeaturesDetail,
    HomeName,
    AddressIcon,
    AddressName,
    AreaIcon,
    Area,
    BedroomIcon,
    Amount,
    PriceP,
    PriceRoom
} from './FeaturesElements'

const FeaturesSection = () => {
    return (
        <FeaturesContainer>
            <FeaturesH2>Featured property</FeaturesH2>
            <FeaturesP>With over 999+ rooms for rents in available</FeaturesP>
            <FeaturesWrapper>
{/* Card features */}
            <FeaturesCard>
                <FeaturesImage src={Img0}/>
                <FeaturesDetailCard>
                    <FeaturesDetail>
                        <HomeName>Nhà nguyên căn</HomeName>
                        <AddressIcon /><AddressName>69 Bach Cong Tu, Vinh City</AddressName>
                        <AreaIcon /><Area>30m²</Area>
                        <BedroomIcon /><Amount>1</Amount>
                        <PriceP>Price per month</PriceP>
                        <PriceRoom>3,520,000</PriceRoom>
                    </FeaturesDetail>
                </FeaturesDetailCard>
            </FeaturesCard>
            <FeaturesCard>
                <FeaturesImage src={Img1}/>
                <FeaturesDetailCard>
                    <FeaturesDetail>
                        <HomeName>Nhà nguyên căn</HomeName>
                        <AddressIcon /><AddressName>69 Bach Cong Tu, Vinh City</AddressName>
                        <AreaIcon /><Area>30m²</Area>
                        <BedroomIcon /><Amount>1</Amount>
                        <PriceP>Price per month</PriceP>
                        <PriceRoom>3,520,000</PriceRoom>
                    </FeaturesDetail>
                </FeaturesDetailCard>
            </FeaturesCard>
            <FeaturesCard>
                <FeaturesImage src={Img2}/>
                <FeaturesDetailCard>
                    <FeaturesDetail>
                        <HomeName>Nhà nguyên căn</HomeName>
                        <AddressIcon /><AddressName>69 Bach Cong Tu, Vinh City</AddressName>
                        <AreaIcon /><Area>30m²</Area>
                        <BedroomIcon /><Amount>1</Amount>
                        <PriceP>Price per month</PriceP>
                        <PriceRoom>3,520,000</PriceRoom>
                    </FeaturesDetail>
                </FeaturesDetailCard>
            </FeaturesCard>
{/* Card features */} 
            </FeaturesWrapper>  
        </FeaturesContainer>            
    )
}

export default FeaturesSection
