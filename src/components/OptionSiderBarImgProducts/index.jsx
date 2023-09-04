import React from 'react';
import {
  RadioButton,
  RadioButtonLabel,
  RadioButtonCustom,
  StyledRadioButtonInput
} from './styles'

export default function OptionSiderBarImgProducts({ type, value, checked, onChange}) {

  const uniqueId = `radio-${value.replace(/\s+/g, '-')}`;
  return (
    <>
      <RadioButton>
        <StyledRadioButtonInput 
        name="radio-group"
        type={type} 
        value={value}
        checked={checked}
        onChange={onChange}
        id={uniqueId}
        />
        <RadioButtonLabel htmlFor={uniqueId}>
          <RadioButtonCustom></RadioButtonCustom>
         <span>{value}</span>
        </RadioButtonLabel>
      </RadioButton>
    </>
  );
}
