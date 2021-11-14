import styled from 'styled-components'
import {BsSearch} from 'react-icons/bs';

export const AdvancedSearchContainer = styled.div`
    // align-items: left;
    margin: 100px auto 0;
    max-width: 1050px;
    display: grid;
    grid-template-columns: 1fr 1fr ;
    align-items: left;
    justify-content: center;
`

export const AdvancedSearchH1 = styled.h1`
    // max-width: 1000px;
    // align-items: center;
    display: inline-block;
`

export const AdvancedSearchBox = styled.div`
    justify-content: center;
`

export const SearchType = styled.div`

`

export const AdvancedSearchBtn = styled.div`

`

export const AdvancedSearchIcon = styled(BsSearch)`
    // font-size: 20px;
    // color: #000;
    cursor: pointer;
    display: inline;
    justify-content: center;
    align-items: center;
    position: relative;
    cursor: pointer;
`

