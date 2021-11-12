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
    Icon,
    H5,
    GallerySmallLink,
    DescriptionContent,
    DescriptionContentP,
    DescriptionInfo,
    DescriptionOptions,
    DescriptionOptionPart,
    IconModem,
    Receipt,
} from './PropertyDetailElements'

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
                                    <GalleryMainImg>
                                        
                                    </GalleryMainImg>
                                </GalleryMainPreviewImg>
                                <GalleryMainPreviewButton>
                                    <ButtonLink>

                                    </ButtonLink>
                                </GalleryMainPreviewButton>
                            </DetailGalleryMain>
                {/* Image small Preview */}
                            <DetailGallerySmall>
                                <GallerySmallImg>
                                    <GallerySmallLink>
                                        
                                    </GallerySmallLink>
                                </GallerySmallImg>
                            </DetailGallerySmall>

                            <DetailGallerySmall>
                                <GallerySmallImg>
                                    <GallerySmallLink>
                                        
                                    </GallerySmallLink>
                                </GallerySmallImg>
                            </DetailGallerySmall>

                            <DetailGallerySmall>
                                <GallerySmallImg>
                                    <GallerySmallLink>
                                        
                                    </GallerySmallLink>
                                </GallerySmallImg>
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
                                <Icon />
                                <H5>1 room</H5>
                            </DescriptionParametersPart>
                        </DescriptionParameters>
                        <DescriptionParameters> 
                            <DescriptionParametersPart>
                                <Icon />
                                <H5>1 room</H5>
                            </DescriptionParametersPart>
                        </DescriptionParameters>
                        <DescriptionParameters> 
                            <DescriptionParametersPart>
                                <Icon />
                                <H5>1 room</H5>
                            </DescriptionParametersPart>
                        </DescriptionParameters>

                        <DescriptionContent>
                            <DescriptionContentP>
                                figjdwofjoisdjoifj
                            </DescriptionContentP>
                            <DescriptionContentP>
                                fjkodjfoisdj
                            </DescriptionContentP>
                            <DescriptionContentP>
                                qiweuohjiovgjsiodjgosid
                            </DescriptionContentP>
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

                    </Receipt>


                </DescriptionCenter>
            </DescriptionSection>
        </PropertyOuter>
    )
}

export default PropertyDetail
