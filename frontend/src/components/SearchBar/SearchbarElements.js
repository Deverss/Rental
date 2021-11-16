import styled from 'styled-components'
import {BsSearch} from 'react-icons/bs';


export const InnerForm = styled.div`
    
    display: flex;
    justify-content:space-between;
    background: #FFFFFF;
    box-shadow: 0px 4px 24px 2px rgba(0, 0, 0, 0.09);
    border-radius: 8px;
    width: auto;
    padding : 13px 25px;
    
`
export const SelectionWrap = styled.div`
    display:flex;
    
`
export const InputField = styled.div`
    display:flex;
    align-items : center;
`
export const Label = styled.h3`
    font-size: 15px;
    line-height:15px;
    font-weight: 500;
    display: block;
    color: #555;
    font-weight: bold;
`
export const InputSelect = styled.div`

`
export const SearchButton = styled.div`
    background: #000;
    border-radius: 10px;
    padding : 8px 8px 0; 
    position: relative;
`
export const SearchIcon = styled(BsSearch)` 
    font-size: 20px;
    color: #fff;
    cursor: pointer;
`