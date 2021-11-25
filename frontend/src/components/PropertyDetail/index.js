import React from 'react';
import {
    PropertyOuter,
    DetailSection,
    DetailCenter,
    DetailHead,
    DetailBox,
    DetailTitleH2,
    DetailLine,
    DetailOptions,
    Host,
    HostAvatar,
    HostAvatarLink,
    HostName,
    PropertyType,
    PropertyIcon,
    PropertyTitle,
    DetailGallery,
    DetailGalleryList,
    DetailGalleryMain,
    GalleryMainPreviewImg,
    GalleryMainImg,
    GalleryMainPreviewButton,
    ButtonLink,
    DetailGallerySmall,
    GallerySmallImg,
    DescriptionSection,
    DescriptionCenter,
    DescriptionWrapper,
    DescriptionTextH4,
    DescriptionParameters,
    DescriptionParametersPart,
    Iconbed,
    IconRoom,
    H5,
    GallerySmallLink,
    DescriptionContent,
    // DescriptionContentP,
    DescriptionInfo,
    DescriptionOptions,
    DescriptionOptionPart,
    IconModem,
    Receipt,
    ReceiptHead,
    ReceiptPriceH3,
    ReceiptPriceNumberH4,
    ReceiptMiddle,
    Incurred,
    IncurredH2,
    ReceiptLine,
    ReceiptCell,
    ReceiptCellRight,
    ReceiptBtn,
    BtnStroke,
    BtnStrokeP,
    BtnPayment,
    BtnPaymentP,
} from './PropertyDetailElements'
import Image1 from '../../images/PropertyImage1(1).jpg'
import Image2 from '../../images/PropertyImage1(2).jpg'
import Image3 from '../../images/PropertyImage1(3).jpg'
import Image4 from '../../images/PropertyImage1(4).jpg'
const PropertyDetail = () => {
    return (
        <PropertyOuter>
            <DetailSection>
                <DetailCenter>
                    
                    <DetailHead>
                        <DetailBox>
                            <DetailTitleH2>
                            360 Tran Hung Dao Ngu Hanh Son District
                            </DetailTitleH2>

                            <DetailLine>
                                <DetailOptions>
                                    <Host>
                                        <HostAvatar>
                                            <HostAvatarLink to="/" />
                                        </HostAvatar>
                                        <HostName>Nguyen Thanh Nam</HostName>
                                    </Host>
                                    <PropertyType>
                                        <PropertyIcon />
                                        <PropertyTitle></PropertyTitle>
                                    </PropertyType>
                                </DetailOptions>
                            </DetailLine>
                        </DetailBox>

                    
                    </DetailHead>
                    <DetailGallery>
                        <DetailGalleryList>
                 {/* Image big Preview */}
                            <DetailGalleryMain>
                                <GalleryMainPreviewImg>
                                    <GalleryMainImg src={Image1} />
                                </GalleryMainPreviewImg>
                                <GalleryMainPreviewButton>
                                    <ButtonLink>

                                    </ButtonLink>
                                </GalleryMainPreviewButton>
                            </DetailGalleryMain>
                {/* Image small Preview */}
                            <DetailGallerySmall>
                                <GallerySmallImg src={Image2} />
                                    <GallerySmallLink>
                                        
                                    </GallerySmallLink>
                                
                            </DetailGallerySmall>

                            <DetailGallerySmall>
                                <GallerySmallImg src={Image3} />
                                    <GallerySmallLink>
                                        
                                    </GallerySmallLink>
                                
                            </DetailGallerySmall>

                            <DetailGallerySmall>
                                <GallerySmallImg src={Image4} />
                                    <GallerySmallLink>
                                        
                                    </GallerySmallLink>
                                
                            </DetailGallerySmall>

                        </DetailGalleryList>
                    </DetailGallery>
                
                </DetailCenter>
            </DetailSection>
            <DescriptionSection>
                <DescriptionCenter>


                    <DescriptionWrapper>
                        <DescriptionTextH4>
                             Private room in house
                        </DescriptionTextH4>
                        <DescriptionParameters> 
                            <DescriptionParametersPart>
                                <IconRoom />
                                <H5>3 rooms</H5>
                            </DescriptionParametersPart>
                            <DescriptionParametersPart>
                                <Iconbed />
                                <H5>1 bed</H5>
                            </DescriptionParametersPart>
                            
                        </DescriptionParameters>

                        <DescriptionContent>
                            {/* <DescriptionContentP>
                            Designed over 20 to 25 square meters, the intimate room consist of single room featuring a queen-size bed an ensuite bathroom. The spaces are fitted with working stations. Designed with intention in communion with the vibrant neighbourhood, the rooms accomodate up two people 
                            </DescriptionContentP>
                            <DescriptionContentP>
                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
                            </DescriptionContentP> */}
                           
                        </DescriptionContent>

                        <DescriptionInfo>Amenities</DescriptionInfo>
                        <DescriptionOptions>
                            <DescriptionOptionPart>
                                <IconModem />
                                Free wifi 24/7
                            </DescriptionOptionPart>

                            <DescriptionOptionPart>
                                <IconModem />
                                Free wifi 24/7
                            </DescriptionOptionPart>

                            <DescriptionOptionPart>
                                <IconModem />
                                Free wifi 24/7
                            </DescriptionOptionPart>

                            <DescriptionOptionPart>
                                <IconModem />
                                Free wifi 24/7
                            </DescriptionOptionPart>

                            <DescriptionOptionPart>
                                <IconModem />
                                Free wifi 24/7
                            </DescriptionOptionPart>
                        </DescriptionOptions>
                        
                    </DescriptionWrapper>
                    <Receipt>
                        <ReceiptHead>
                            <ReceiptPriceH3>
                            Price for a month:     
                            </ReceiptPriceH3>
                            <ReceiptPriceNumberH4>
                            $3000
                            </ReceiptPriceNumberH4>
                        </ReceiptHead>
                        <ReceiptMiddle>
                            <Incurred>
                            <IncurredH2>Incured</IncurredH2>
                            <ReceiptLine>
                                <ReceiptCell>Electricity pricing</ReceiptCell>
                                <ReceiptCellRight>$102 per kwh</ReceiptCellRight>
                            </ReceiptLine>
                            <ReceiptLine>
                                <ReceiptCell>Watter pricing</ReceiptCell>
                                <ReceiptCellRight>$30 per m³</ReceiptCellRight>
                            </ReceiptLine>
                            <ReceiptLine>
                                <ReceiptCell>Internet pricing</ReceiptCell>
                                <ReceiptCellRight>$50</ReceiptCellRight>
                            </ReceiptLine>
                            <ReceiptLine>
                                <ReceiptCell>Vehicle pricing</ReceiptCell>
                                <ReceiptCellRight>$10</ReceiptCellRight>
                            </ReceiptLine>
                            <ReceiptBtn>
                                <BtnStroke>
                                    <BtnStrokeP>Save</BtnStrokeP>
                                </BtnStroke>
                                <BtnPayment>
                                    <BtnPaymentP>Reserve</BtnPaymentP>
                                </BtnPayment>
                            </ReceiptBtn>
                            </Incurred>
                        </ReceiptMiddle>
                    </Receipt>


                </DescriptionCenter>
            </DescriptionSection>
        </PropertyOuter>
    )
}

export default PropertyDetail
