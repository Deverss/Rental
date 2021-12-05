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
    Location,
    LocationHead,
    LocationIcon,
    LocationIconLogo,
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
                                    </LocationHead>
                                </Location>
                            </PanelRow>
                        </PanelBody>
                    </CategoryPanel>
                </CategoryCenter>
            </MainCategory>   
        </OuterInner>
    )
}

export default Category
