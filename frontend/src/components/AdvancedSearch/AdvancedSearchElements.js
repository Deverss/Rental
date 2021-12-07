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
    max-width: 1200px;
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

export const CatalogResult = styled.button`
position: absolute;
top: 8px;
right: 8px;
bottom: 8px;
width: 32px;
height: 32px;
border-radius: 50%;
background: #3772FF;
transition: background .2s;
border-width: 0px;
`

export const SearchIcon = styled(BsSearch)`
    width: 16px;
    height: 16px;
    color: #FCFCFD;
    
    box-sizing: inherit;
    cursor: pointer;
    overflow: hidden;
    margin: 0;
    padding: 0;
    border: 0;
    vertical-align: middle;
`


export const CatalogSorting = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 48px;
`
export const Select = styled.select`
    float: none;
    width: 100%;
    height: 48px;
    padding: 0 48px 0 16px;
    box-shadow: inset 0 0 0 2px #e6e8ec;
    background: #FCFCFD;
    border-radius: 12px;
    border: none;
    opacity: 1;
    font-size: 14px;
    font-weight: 500;
    line-height: 48px;
    width: 256px;
    margin-right: auto;
    
`
export const Option = styled.option`
font-weight: normal;
    display: block;
    white-space: nowrap;
    min-height: 1.2em;
    padding: 0px 2px 1px;
    box-sizing: inherit;
    `

export const CatalogNav = styled.div`
display: flex;`
export const CatalogLink = styled.a`
    flex-shrink: 0;
    margin: 0 6px;
    padding: 6px 12px;
    border-radius: 14px;
    background: none;
    font-family: 'DM Sans', sans-serif;
    font-size: 14px;
    line-height: 1.14286;
    font-weight: 700;
    color: #777E90;
    transition: all .2s;
    &:Hover{
        background: #353945;
        color: #FCFCFD;
        cursor: pointer;
    }
`
export const CatalogLinkActive = styled.a`
    flex-shrink: 0;
    margin: 0 6px;
    padding: 6px 12px;
    border-radius: 14px;
    background: none;
    font-family: 'DM Sans', sans-serif;
    font-size: 14px;
    line-height: 1.14286;
    font-weight: 700;
    color: #777E90;
    transition: all .2s;
    
        background: #353945;
        color: #FCFCFD;
    
`
export const CatalogRow = styled.div`

`

export const CatalogFilters = styled.div`
flex-shrink: 0;
    width: 256px;`
export const Range = styled.div`
`
export const RangeLabel = styled.h3`
margin-bottom: 20px;
font-size: 12px;
line-height: 1;
font-weight: 700;
text-transform: uppercase;
color: #000;`
export const CatalogGroup = styled.div`
margin-bottom: 24px;
padding: 24px 0;
border-width: 1px 0;
border-style: solid;
border-color: #E6E8EC;
`
export const Field = styled.div`

`
export const FieldLabel = styled.h3`
margin-top: 12px;
margin-bottom: 12px;
font-size: 12px;
line-height: 1;
font-weight: 700;
text-transform: uppercase;
`
export const CatalogWrapper = styled.div`
flex-grow: 1;
padding-left: 32px;

`


export const CatalogList = styled.div`
display: flex;
flex-wrap: wrap;
margin: -32px -16px 0;
`
export const Card = styled.div`
    display: flex;
    flex-direction: column;
    flex: 0 0 calc(33.333% - 62px);
    max-width: calc(33.333% - 62px);
    margin: 32px 16px 0;
    padding: 12px;
    box-shadow: 0px 32px 32px rgb(31 47 70 / 12%);
    border-radius: 20px;
    
    @media only screen and (max-width: 1279px){
        flex: 0 0 calc(50% - 32px);
        max-width: calc(50% - 32px);
    }
`
export const CardPreview = styled.div`
    position: relative;
    border-radius: 16px;
    overflow: hidden;
`
export const CardImg = styled.img`
    vertical-align: middle;
    border-radius: 16px;
    object-fit: cover;
    max-height: 300px;
    width: 100%;
    transition: -webkit-transform 1s;
    transition: transform 1s;
    transition: transform 1s, -webkit-transform 1s;
`
export const CardLink = styled.a`
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    padding: 20px 0;
    color: #23262F;
    cursor: pointer;
`
export const CardH2 = styled.div`
    font-size: 22px;
    font-weight: bold;
`
export const CardCatalog = styled.div``
export const PriceH3 = styled.h4`
color: #0A944A;
margin-top: 5px;
font-size: 28px;
font-weight: bold;
margin-left: auto;
`

