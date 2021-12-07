import React from 'react';
import BgrCategory from '../../images/CategoryBackground.jpg';
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
                                    </CheckInHead>
                                </CheckIn>                      
                            </PanelRow>
                        </PanelBody>
                    </CategoryPanel>
                </CategoryCenter>
            </MainCategory>   
        </OuterInner>
    )
}

export default Category
