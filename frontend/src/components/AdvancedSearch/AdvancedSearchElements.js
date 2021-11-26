import styled from 'styled-components';
import {BsSearch} from 'react-icons/bs';


export const OuterInner = styled.div`
    display: block;
`

export const CatalogSection = styled.div`
    padding: 128px 0;
    padding-top: 120px;
    display: block;
`

export const CatalogCenter = styled.div`
    width: 100%;
    max-width: 1280px;
    margin: 0 auto;
    padding: 0 80px;
    display: block;
`

export const CatalogTop = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 48px;
    padding-bottom: 32px;
    border-bottom: 1px solid #E6E8EC;
`

export const CatalogTitle = styled.div`
    margin-right: auto;
    font-size: 24px;
    line-height: 1.33333;
    letter-spacing: -.01em;
    font-weight: 700;
    display: block;
`

export const CatalogSearch = styled.div`
    position: relative;
    flex-shrink: 0;
    width: 320px;
    margin-left: 30px;
    display: block;
`

export const CatalogInput = styled.input`
    width: 100%;
    height: 48px;
    padding: 0 48px 0 14px;
    border-radius: 12px;
    background: none;
    border: 2px solid #E6E8EC;
    font-size: 14px;
    line-height: 1.71429;
    color: #23262F;
    letter-spacing: normal;
    display: inline-block;
    
`

export const CatalogResult = styled.div`
    position: absolute;
    top: 8px;
    right: 8px;
    /* bottom: 8px; */
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background: #3772FF;
    transition: background .2s;
    margin: 0;
    padding: 0;
    border: 0;
    vertical-align: middle;
`

export const SearchIcon = styled(BsSearch)`
    width: 16px;
    height: 16px;
    color: #FCFCFD;
    vertical-align: text-bottom;
    box-sizing: inherit;
    cursor: pointer;
    overflow: hidden;
    margin: 0;
    padding: 0;
    border: 0;
    vertical-align: middle;
`


export const CatalogSorting = styled.div`

`

export const CatalogRow = styled.div`

`



