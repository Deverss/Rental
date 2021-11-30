import React,{useState,useEffect} from 'react';
import {Link} from 'react-router-dom'
import { getPosts } from '../../Api/Post';
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

export const FeatureCard = (item) => (
    <FeaturesCard>
        <FeaturesImage src={item.imageAddress} />
        <FeaturesDetailCard>
            <FeaturesDetail>
                <Link to={`property/${item.id}`}><HomeName>{item.title}</HomeName></Link>
                <Address>
                    <AddressIcon /><AddressName>{item.address}</AddressName>
                </Address>
                <AreaDetail>
                    <AreaIcon /><Area>{item.area}m²</Area>
                </AreaDetail>
                <Bedroom>
                    <BedroomIcon /><Amount>{item.bed}</Amount>
                </Bedroom>
                <Price>
                    <PriceP>Price per month</PriceP>
                    <PriceRoom>{item.price}</PriceRoom>
                </Price>
            </FeaturesDetail>
        </FeaturesDetailCard>
    </FeaturesCard>);

const FeaturesSection = () => {
    const [posts,setPosts] = useState(null);
    
    useEffect(() => {
        getPosts(setPosts)
        
    }, [])
    return (
        <FeaturesContainer>
            <FeaturesH2>Featured property</FeaturesH2>
            <FeaturesP>With over 999+ rooms for rents in available</FeaturesP>
            <FeaturesWrapper>
                {/* Card features */}
                {posts && posts.map(item => FeatureCard(item))}


                {/* Card features */}
            </FeaturesWrapper>

        </FeaturesContainer>
    )
}

export default FeaturesSection
