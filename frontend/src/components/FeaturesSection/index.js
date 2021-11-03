import React from 'react';
import Img0 from '../../images/Room-0.jpg';
import Img1 from '../../images/Room-1.jpeg';
import Img2 from '../../images/Room-2.jpg';
import Img4 from '../../images/Room-4.jpg';
import Img5 from '../../images/Room-5.jpg';
import Img6 from '../../images/Room-6.jpg';
import Img7 from '../../images/Room-7.jpg';
import Img8 from '../../images/Room-8.jpg';
import Img9 from '../../images/Room-9.jpg';
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
    Address,
    AddressIcon,
    AddressName,
    AreaDetail,
    Bedroom,
    AreaIcon,
    Area,
    BedroomIcon,
    Amount,
    Price,
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
                        <HomeName>Parasite's House</HomeName>
                        <Address>
                            <AddressIcon /><AddressName>69 Bach Cong Tu, Vinh City</AddressName>
                        </Address>
                        <AreaDetail>
                            <AreaIcon /><Area>130m²</Area>
                        </AreaDetail>
                        <Bedroom>
                            <BedroomIcon /><Amount>4</Amount>
                        </Bedroom>
                        <Price>
                        <PriceP>Price per month</PriceP>
                        <PriceRoom>3,520,000</PriceRoom>
                        </Price>
                    </FeaturesDetail>
                </FeaturesDetailCard>
            </FeaturesCard>

            <FeaturesCard>
                <FeaturesImage src={Img1}/>
                <FeaturesDetailCard>
                    <FeaturesDetail>
                        <HomeName>Nhà nguyên căn</HomeName>
                        <Address>
                            <AddressIcon /><AddressName>69 Bach Cong Tu, Vinh City</AddressName>
                        </Address>
                        <AreaDetail>
                            <AreaIcon /><Area>30m²</Area>
                        </AreaDetail>
                        <Bedroom>
                            <BedroomIcon /><Amount>1</Amount>
                        </Bedroom>
                        <Price>
                        <PriceP>Price per month</PriceP>
                        <PriceRoom>3,520,000</PriceRoom>
                        </Price>
                    </FeaturesDetail>
                </FeaturesDetailCard>
            </FeaturesCard>

            <FeaturesCard>
                <FeaturesImage src={Img2}/>
                <FeaturesDetailCard>
                    <FeaturesDetail>
                        <HomeName>Nhà nguyên căn</HomeName>
                        <Address>
                            <AddressIcon /><AddressName>69 Bach Cong Tu, Vinh City</AddressName>
                        </Address>
                        <AreaDetail>
                            <AreaIcon /><Area>30m²</Area>
                        </AreaDetail>
                        <Bedroom>
                            <BedroomIcon /><Amount>1</Amount>
                        </Bedroom>
                        <Price>
                        <PriceP>Price per month</PriceP>
                        <PriceRoom>3,520,000</PriceRoom>
                        </Price>
                    </FeaturesDetail>
                </FeaturesDetailCard>
            </FeaturesCard>
            
            <FeaturesCard>
                <FeaturesImage src={Img4}/>
                <FeaturesDetailCard>
                    <FeaturesDetail>
                        <HomeName>Parasite's House</HomeName>
                        <Address>
                            <AddressIcon /><AddressName>69 Bach Cong Tu, Vinh City</AddressName>
                        </Address>
                        <AreaDetail>
                            <AreaIcon /><Area>130m²</Area>
                        </AreaDetail>
                        <Bedroom>
                            <BedroomIcon /><Amount>4</Amount>
                        </Bedroom>
                        <Price>
                        <PriceP>Price per month</PriceP>
                        <PriceRoom>3,520,000</PriceRoom>
                        </Price>
                    </FeaturesDetail>
                </FeaturesDetailCard>
            </FeaturesCard>
            <FeaturesCard>
                <FeaturesImage src={Img5}/>
                <FeaturesDetailCard>
                    <FeaturesDetail>
                        <HomeName>Parasite's House</HomeName>
                        <Address>
                            <AddressIcon /><AddressName>69 Bach Cong Tu, Vinh City</AddressName>
                        </Address>
                        <AreaDetail>
                            <AreaIcon /><Area>130m²</Area>
                        </AreaDetail>
                        <Bedroom>
                            <BedroomIcon /><Amount>4</Amount>
                        </Bedroom>
                        <Price>
                        <PriceP>Price per month</PriceP>
                        <PriceRoom>3,520,000</PriceRoom>
                        </Price>
                    </FeaturesDetail>
                </FeaturesDetailCard>
            </FeaturesCard>
            <FeaturesCard>
                <FeaturesImage src={Img6}/>
                <FeaturesDetailCard>
                    <FeaturesDetail>
                        <HomeName>Parasite's House</HomeName>
                        <Address>
                            <AddressIcon /><AddressName>69 Bach Cong Tu, Vinh City</AddressName>
                        </Address>
                        <AreaDetail>
                            <AreaIcon /><Area>130m²</Area>
                        </AreaDetail>
                        <Bedroom>
                            <BedroomIcon /><Amount>4</Amount>
                        </Bedroom>
                        <Price>
                        <PriceP>Price per month</PriceP>
                        <PriceRoom>3,520,000</PriceRoom>
                        </Price>
                    </FeaturesDetail>
                </FeaturesDetailCard>
            </FeaturesCard>
            <FeaturesCard>
                <FeaturesImage src={Img7}/>
                <FeaturesDetailCard>
                    <FeaturesDetail>
                        <HomeName>Parasite's House</HomeName>
                        <Address>
                            <AddressIcon /><AddressName>69 Bach Cong Tu, Vinh City</AddressName>
                        </Address>
                        <AreaDetail>
                            <AreaIcon /><Area>130m²</Area>
                        </AreaDetail>
                        <Bedroom>
                            <BedroomIcon /><Amount>4</Amount>
                        </Bedroom>
                        <Price>
                        <PriceP>Price per month</PriceP>
                        <PriceRoom>3,520,000</PriceRoom>
                        </Price>
                    </FeaturesDetail>
                </FeaturesDetailCard>
            </FeaturesCard>
            <FeaturesCard>
                <FeaturesImage src={Img8}/>
                <FeaturesDetailCard>
                    <FeaturesDetail>
                        <HomeName>Parasite's House</HomeName>
                        <Address>
                            <AddressIcon /><AddressName>69 Bach Cong Tu, Vinh City</AddressName>
                        </Address>
                        <AreaDetail>
                            <AreaIcon /><Area>130m²</Area>
                        </AreaDetail>
                        <Bedroom>
                            <BedroomIcon /><Amount>4</Amount>
                        </Bedroom>
                        <Price>
                        <PriceP>Price per month</PriceP>
                        <PriceRoom>3,520,000</PriceRoom>
                        </Price>
                    </FeaturesDetail>
                </FeaturesDetailCard>
            </FeaturesCard>
            <FeaturesCard>
                <FeaturesImage src={Img9}/>
                <FeaturesDetailCard>
                    <FeaturesDetail>
                        <HomeName>Parasite's House</HomeName>
                        <Address>
                            <AddressIcon /><AddressName>69 Bach Cong Tu, Vinh City</AddressName>
                        </Address>
                        <AreaDetail>
                            <AreaIcon /><Area>130m²</Area>
                        </AreaDetail>
                        <Bedroom>
                            <BedroomIcon /><Amount>4</Amount>
                        </Bedroom>
                        <Price>
                        <PriceP>Price per month</PriceP>
                        <PriceRoom>3,520,000</PriceRoom>
                        </Price>
                    </FeaturesDetail>
                </FeaturesDetailCard>
            </FeaturesCard>
{/* Card features */} 
            </FeaturesWrapper>
              
        </FeaturesContainer>            
    )
}

export default FeaturesSection
