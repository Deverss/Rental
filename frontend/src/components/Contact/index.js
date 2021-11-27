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

    ContactDetail,
    ContactLine,
    MailIcon,
    MapIcon,
    PhoneIcon,

    ContactForm,
    ContactField,
    FieldWrap,
    FieldInput,
    NameIcon,
    SendIcon,
    MobileIcon,
    TextIcon,
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
              <ContactDetail>
                  <ContactLine>
                      <MailIcon />
                      Rentalhere43@gmail.com
                  </ContactLine>
                  <ContactLine>
                      <MapIcon />
                      470 Tran Dai Nghia, Hoa Hai, Ngu Hanh Son, Da Nang City.
                  </ContactLine>
                  <ContactLine>
                      <PhoneIcon />
                      0912345678
                  </ContactLine>
              </ContactDetail>
              <ContactForm>
                  <ContactField>
                      <FieldWrap>
                          <FieldInput type="text" placeholder="Name"></FieldInput>
                          <NameIcon />
                      </FieldWrap>
                  </ContactField>
                  <ContactField>
                      <FieldWrap>
                          <FieldInput type="email" placeholder="Email"></FieldInput>
                          <SendIcon />
                      </FieldWrap>
                  </ContactField>
                  <ContactField>
                      <FieldWrap>
                          <FieldInput type="number" placeholder="Number Phone"></FieldInput>
                          <MobileIcon />
                      </FieldWrap>
                  </ContactField>
                  <ContactField>
                      <FieldWrap>
                          <FieldInput type="text" placeholder="Message"></FieldInput>
                          <TextIcon />
                      </FieldWrap>
                  </ContactField>

              </ContactForm>
        </ContactContainer>
    )
}

export default Contact
