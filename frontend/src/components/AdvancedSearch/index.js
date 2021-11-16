import React from 'react';
import {
    AdvancedSearchContainer,
    AdvancedSearchH1,
    AdvancedSearchBox,
    SearchType,
    AdvancedSearchBtn,
    AdvancedSearchIcon,
} from './AdvancedSearchElements'

const AdvancedSearch = () => {
    return (
        <AdvancedSearchContainer to="/advancedsearch">
                <AdvancedSearchH1>Advanced Search</AdvancedSearchH1>
                <AdvancedSearchBox>
                    <SearchType></SearchType>
                    <AdvancedSearchBtn>     
                        <AdvancedSearchIcon />   
                    </AdvancedSearchBtn>     
                </AdvancedSearchBox>
        </AdvancedSearchContainer>
    )
}

export default AdvancedSearch
