import React, { useState } from 'react';
import Slider from '@mui/material/Slider'
function SliderFilter () {
    // const [value, setValue] = useState(20);
    // const changeValue = (event,value) => {
    //     setValue(value);
    // }
    const customMarks = [{
        value: 0,
        label : '0$'
    },
    
   
    {
        value: 1000,
        label : '1000$'
    }]
    
    const getText = (value) => `${value}`
    return (
        <Slider
         style={{width: 253}} 
         min={0}
         max={1000}
         defaultValue={20}
         aria-label="Default"
         size="big"
         marks={customMarks}
         getAriaValueText = {getText}
         valueLabelDisplay = 'auto'
        />
    );
}
export default SliderFilter