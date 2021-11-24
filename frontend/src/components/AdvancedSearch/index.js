import React from 'react';
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
    CatalogRow,
} from './AdvancedSearchElements'

const AdvancedSearch = () => {
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
                    <CatalogSorting></CatalogSorting>
                    <CatalogRow></CatalogRow>
                </CatalogCenter>
            </CatalogSection>
        </OuterInner>
    )
}

export default AdvancedSearch
