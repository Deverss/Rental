import React from 'react';
import BgrCategory from '../../images/CategoryBackground.jpg';
import Image1 from '../../images/PropertyImage1(1).jpg'
import {
    OuterInner,
    MainCategory,
    CategoryCenter,
    CategoryPreview,
    BackgroundImage,
    CategoryWrap,
    CategoryTitle,
    // Panel
    CategoryPanel,
    PanelBackground,
    PanelBody,
    PanelRow,
    // Location
    Location,
    LocationHead,
    LocationIcon,
    LocationIconLogo,
    LocationInput,
    // CheckIn
    CheckIn,
    CheckInHead,
    CheckInIcon,
    CalendarLogo,
    CheckInP,
    // CheckOut
    CheckOut,
    CheckOutHead,
    CheckOutIcon,
    CheckOutP,
    // Button Search
    PanelSearch,
    PanelSearchIcon,
    SearchLogo,
    
    //Catalog
    SectionCatalog,
    SectionBrowse,
    BrowseCenter,
    BrowseInner,
    BrowseHead,
    BrowseTitle,
    BrowseWrapper,
    BrowseSlider,
    SlickList,
    SlickTrack,
    CardPreview,
    CardImg,
    CardLink,    
    CardH2,
    PriceH3,
    BrowseCard, ImgPreview, BrowseSubtitle,
    BrowseContent, IconHome, Number,BrowsePreview
} from './CategoryElements'

const Category = () => {
    return (
        <OuterInner>
            <MainCategory>
                <CategoryCenter>
                    <CategoryPreview>
                        <BackgroundImage src={BgrCategory} />
                        <CategoryWrap>
                            <CategoryTitle>Da Nang City</CategoryTitle>
                        </CategoryWrap>
                    </CategoryPreview>
                    <CategoryPanel>
                        <PanelBackground />
                        <PanelBody>
                            <PanelRow>
                                <Location>
                                    <LocationHead>                                        
                                            <LocationIcon>
                                                <LocationIconLogo />
                                            </LocationIcon> 
                                            <LocationInput type='text' placeholder='Location'/>   
                                    </LocationHead>
                                </Location>
                                <CheckIn>
                                    <CheckInHead>           
                                        <CheckInIcon>
                                            <CalendarLogo />
                                        </CheckInIcon>
                                        <CheckInP>Check In</CheckInP>
                                    </CheckInHead>
                                </CheckIn>
                                <CheckOut>
                                    <CheckOutHead>
                                        <CheckOutIcon>
                                            <CalendarLogo />
                                        </CheckOutIcon>
                                        <CheckOutP>Check Out</CheckOutP>
                                        <PanelSearch>
                                            <PanelSearchIcon>
                                                <SearchLogo />
                                            </PanelSearchIcon>
                                        </PanelSearch>
                                    </CheckOutHead>
                                </CheckOut>                     
                            </PanelRow>
                        </PanelBody>
                    </CategoryPanel>
                </CategoryCenter>
            </MainCategory>
            <SectionCatalog>
                <SectionBrowse>
                    <BrowseCenter>
                        <BrowseInner>
                            <BrowseHead>
                                <BrowseTitle>Explore homes in Da Nang City</BrowseTitle>
                            </BrowseHead>
                            <BrowseWrapper>
                                <BrowseSlider>
                                    <SlickList>
                                        <SlickTrack>
                                            <BrowseCard>
                                                <BrowsePreview>
                                                    <ImgPreview src={Image1} />

                                                </BrowsePreview>
                                                <BrowseSubtitle>Board House</BrowseSubtitle>
                                                <BrowseContent>
                                                    <IconHome />
                                                    <Number>3000</Number>
                                                </BrowseContent>
                                            </BrowseCard>
                                        </SlickTrack>
                                    </SlickList>     
                                </BrowseSlider>
                            </BrowseWrapper>
                        </BrowseInner>
                    </BrowseCenter>
                </SectionBrowse>
            </SectionCatalog>   
        </OuterInner>
    )
}

export default Category
