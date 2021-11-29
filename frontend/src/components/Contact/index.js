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

    ContactRow,
    ContactDetail,
    ContactLine,
    MailIcon,
    MapIcon,
    PhoneIcon,

    ContactForm,
    ContactField,
    FieldWrap,
    FieldInput,
    Icon,
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
                <ContactRow>
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
                                <FieldInput type='text' placeholder="Name" />
                                <Icon>
                                    <NameIcon />
                                </Icon>  
                            </FieldWrap>
                        </ContactField>
                        <ContactField>
                            <FieldWrap>
                                <FieldInput type='email' placeholder="Email" />
                                <Icon>
                                    <SendIcon />
                                </Icon>  
                            </FieldWrap>
                        </ContactField>
                        <ContactField>
                            <FieldWrap>
                                <FieldInput type='number' placeholder="Number Phone" />
                                <Icon>
                                    <MobileIcon />
                                </Icon>
                                </FieldWrap>
                        </ContactField>
                        <ContactField>
                                <FieldWrap>
                                <FieldInput type='text' placeholder="Message" />
                                <Icon>
                                    <TextIcon />
                                </Icon>     
                                </FieldWrap>
                        </ContactField>
                    </ContactForm>
                </ContactRow>
        </ContactContainer>
    )
}

export default Contact
