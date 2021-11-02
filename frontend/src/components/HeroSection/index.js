import React, {useState} from 'react'
import {Button} from '../ButtonElements'
import 
{ 
    HeroContainer,
    HeroContent, 
    HeroH1,
    HeroP,
    HeroBtnWrapper,
    ArrowForward,
    ArrowRight,
} from './HeroElements'

const HeroSection = () => {
    const [hover, setHover] = useState(false)

    const onHover = () => {
        setHover(!hover)
    }
    return (
        <HeroContainer id="home">
            <HeroContent>
                <HeroH1>Rent your home at the best price</HeroH1>
                <HeroP>
                    Sign up for a new account today and receive $250 in credit towards your next payment.
                </HeroP>
                <HeroBtnWrapper>
                    <Button to="signup" onMouseEnter={onHover} 
                    onMouseLeave={onHover}
                    primary="true"
                    dark="true"
                    >
                        Get started {hover ? <ArrowForward /> : <ArrowRight />}
                    </Button>
                </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>
    )
}

export default HeroSection
