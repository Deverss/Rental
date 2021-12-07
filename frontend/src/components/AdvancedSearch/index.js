import React,{useState} from 'react';
import SliderFilter from './SliderFilter';
import Image1 from '../../images/PropertyImage1(1).jpg'
import { filter } from '../../Api/Post';
import {
    OuterInner,
    CatalogSection,
    CatalogCenter,
    CatalogTop,
    CatalogTitle,
    CatalogSearch,
    CatalogInput,
    CatalogResult,
    SearchIcon,
    CatalogSorting,
    Select,
    CatalogNav,
    CatalogLink,
    CatalogLinkActive,
    Option,
    CatalogRow,
    CatalogFilters,
    Range,
    RangeLabel,
    CatalogGroup,
    Field,
    FieldLabel,
    CatalogWrapper,
    CatalogList,
    Card,
    CardPreview,
    CardImg,
    CardLink,    
    CardH2,
    CardCatalog,
    PriceH3
} from './AdvancedSearchElements'

const AdvancedSearch = () => {
    const [type,setType] = useState(null);
    const handleClick = (event) => {
        // setType(event.target.name);
        // const response =  filter(event.target.name);
        // console.log(response)
    }
    
    return (
        <OuterInner>
            <CatalogSection>
                <CatalogCenter>
                    <CatalogTop>
                        <CatalogTitle>Advanced Search</CatalogTitle>
                        
                        <CatalogSearch>
                            <CatalogInput type='text' placeholder='Type something...' />
                            <CatalogResult>
                                <SearchIcon />
                            </CatalogResult>
                        </CatalogSearch>
                    </CatalogTop>
                    <CatalogSorting>
                        <Select>
                            <Option>Newest</Option>
                            <Option>Oldest</Option>
                        </Select>
                        <CatalogNav>
                            <CatalogLinkActive>All</CatalogLinkActive>
                            <CatalogLink name='nhà trọ' onClick={handleClick}>Motel</CatalogLink>
                            <CatalogLink name='căn hộ' onClick={handleClick}>Apartment</CatalogLink>
                        </CatalogNav>
                    </CatalogSorting>
                    <CatalogRow>
                        <CatalogFilters>
                            <Range>
                                <RangeLabel>Price range</RangeLabel>
                                <SliderFilter />
                            </Range>
                            <CatalogGroup>
                                <Field>
                                    <FieldLabel>Price</FieldLabel>
                                    <Select>
                                        <Option>Newest</Option>
                                        <Option>Oldest</Option>
                                    </Select>
                                </Field>
                                <Field>
                                    <FieldLabel>District</FieldLabel>
                                    <Select>
                                        <Option>Newest</Option>
                                        <Option>Oldest</Option>
                                    </Select>
                                </Field>
                                <Field>
                                    <FieldLabel>Square</FieldLabel>
                                    <Select>
                                        <Option>0 - 30m²</Option>
                                        <Option>30 - 50m²</Option>
                                        <Option>50 - 80m²</Option>
                                        <Option>80 - 100m²</Option>
                                        <Option>More than 100m²</Option>
                                    </Select>
                                </Field>
                            </CatalogGroup>

                        </CatalogFilters>
                        <CatalogWrapper>
                            <CatalogList>
                                <Card>
                                    <CardPreview>
                                        <CardImg src={Image1} />
                                        <CardLink to="#">
                                            <CardH2>The modern house</CardH2>
                                            <CardCatalog>House</CardCatalog>
                                            <PriceH3>150$</PriceH3>
                                        </CardLink>
                                    </CardPreview>
                                </Card>
                                <Card>
                                    <CardPreview>
                                        <CardImg src={Image1} />
                                        <CardLink to="#">
                                            <CardH2>The modern house</CardH2>
                                            <CardCatalog>House</CardCatalog>
                                            <PriceH3>150$</PriceH3>
                                        </CardLink>
                                    </CardPreview>
                                </Card>
                                
                            </CatalogList>
                        </CatalogWrapper>
                    </CatalogRow>
                </CatalogCenter>
            </CatalogSection>
        </OuterInner>
    )
}

export default AdvancedSearch
