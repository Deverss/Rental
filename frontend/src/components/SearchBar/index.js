import React from 'react'
import Select from 'react-select'
import {
    InnerForm,
    SelectionWrap,
    InputField,
    Label,
    InputSelect,
    SearchButton,
    SearchIcon
} from './SearchbarElements';
const customStyles = {
  option: (provided, state) => ({
    ...provided,
    borderBottom: '0px dotted pink',
    color: state.isSelected ? 'black' : 'black',
    
  }),
  control: (base, state) => ({
    ...base,
    width:'170px',
    border: state.isFocused ? 0 : 0,
    // This line disable the blue border
    boxShadow: state.isFocused ? 0 : 0,
    '&:hover': {
       border: state.isFocused ? 0 : 0
    }
    ,
})
}
const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' }
  ]
const district = [
    { value: 'Hai Chau', label: 'Hai Chau' },
    { value: 'Cam Le', label: 'Cam Le' },
    { value: 'Thanh Khe', label: 'Thanh Khe' },
    { value: 'Lien Chieu', label: 'Lien Chieu' },
    { value: 'Ngu Hanh Son', label: 'Ngu Hanh Son' },
    { value: 'Son Tra', label: 'Son Tra' },
    { value: 'Hoa Vang', label: 'Hoa Vang' },
    { value: 'Hoang Sa', label: 'Hoang Sa' }
]
const SearchBar = () => {
    return (
        <InnerForm> 
            <SelectionWrap>
                {/* Field import 1 */}
                <InputField>
                    <Label>Type</Label>
                    <InputSelect>
                    <Select styles={customStyles} options={options}/>
                    </InputSelect>
                </InputField>
                 {/* Field import 2 */}
                 <InputField>
                    <Label>District</Label>
                    <InputSelect>
                    <Select styles={customStyles} options={district}/>
                    </InputSelect>
                </InputField>

            </SelectionWrap>
            <SearchButton>
                <SearchIcon />
            </SearchButton>
        </InnerForm>
    )
}

export default SearchBar;
