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
                                            <CardPreview>
                                                <CardImg src={Image1} />
                                                <CardLink to="#">
                                                    <CardH2>Studio Apartment</CardH2>
                                                    <PriceH3>150$</PriceH3>
                                                </CardLink>
                                            </CardPreview>
                                            <CardPreview>
                                                <CardImg src={Image1} />
                                                <CardLink to="#">
                                                    <CardH2>Studio Apartment</CardH2>
                                                    <PriceH3>150$</PriceH3>
                                                </CardLink>
                                            </CardPreview>
                                            <CardPreview>
                                                <CardImg src={Image1} />
                                                <CardLink to="#">
                                                    <CardH2>Studio Apartment</CardH2>
                                                    <PriceH3>150$</PriceH3>
                                                </CardLink>
                                            </CardPreview>
                                            <CardPreview>
                                                <CardImg src={Image1} />
                                                <CardLink to="#">
                                                    <CardH2>Studio Apartment</CardH2>
                                                    <PriceH3>150$</PriceH3>
                                                </CardLink>
                                            </CardPreview>
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
