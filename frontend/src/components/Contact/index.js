import React from 'react';
import Image from '../../images/ContactImage.jpg'
import {
    ContactContainer,
    ContactWrap,
    LineSection,
    Line,
    ContactStage,
    ContactTitle,
    ContactInfo,
    ContactImage,
} from './ContactElements';

const Contact = () => {
    return (
        <ContactContainer>
              <ContactWrap>
                  <LineSection>
                      <Line></Line>
                  </LineSection>
                  <ContactStage>Say Hello!  We Are Rental</ContactStage>
                  <ContactTitle>Let's Work Together</ContactTitle>
                  <ContactInfo>I’d love to meet up with you to discuss your venture, and potential collaborations.</ContactInfo>
              </ContactWrap>
              <ContactImage src={Image}/>
        </ContactContainer>
    )
}

export default Contact
