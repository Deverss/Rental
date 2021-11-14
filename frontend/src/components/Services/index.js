import React from 'react'
import Icon1 from '../../images/Renter.png'
import Icon2 from '../../images/Host.png'
import {
    ServicesContainer,
    ServicesWrapper,
    ServicesCard,
    ServicesIcon,
    ServicesMission,
    ServicesH1,
    ServicesH2,
    ServicesP
} from './ServicesElements'

const Services = () => {
    return (
        <ServicesContainer>
            <ServicesMission>OUR MISSION</ServicesMission>
            <ServicesH1>Helping you to find out which room you are looking for</ServicesH1>
            <ServicesWrapper>
                <ServicesCard>
                    <ServicesIcon src={Icon1}/>
                    <ServicesH2>For renters</ServicesH2>
                    <ServicesP>We work with many independent local property expert who know their market perfectly. </ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon2}/>
                    <ServicesH2>For hosts</ServicesH2>
                    <ServicesP>We give our partners the best tools and data to potential renters.</ServicesP>
                </ServicesCard> 
            </ServicesWrapper>
        </ServicesContainer>
    )
}

export default Services
