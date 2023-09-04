import styled from 'styled-components'


export const RadioButton = styled.div`
  display: inline-block;
  position: relative;
  cursor: pointer;
`;

export const RadioButtonInput = styled.input.attrs({ type: 'radio' })`
  position: absolute;
  opacity: 0;
  width: 0;
  height: 0;
`;

export const RadioButtonLabel = styled.label`
  display: inline-block;
  padding-left: 30px;
  margin-bottom: 10px;
  position: relative;
  font-size: 16px;
  color: #02111B;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.23, 1, 0.32, 1);
`;

export const RadioButtonCustom = styled.span`
  position: absolute;
  top: 50%;
  left: 0;
  transform: translateY(-50%);
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: 2px solid #555;
  transition: all 0.3s cubic-bezier(0.23, 1, 0.32, 1);
`;

export const StyledRadioButtonInput = styled(RadioButtonInput)`
  &:checked + ${RadioButtonLabel} ${RadioButtonCustom} {
    transform: translateY(-50%) scale(0.9);
    border: 5px solid #119DA4;
    color: #119DA4;
  }

  &:checked + ${RadioButtonLabel} {
    color: #119DA4;
  }

  ${RadioButtonLabel}:hover ${RadioButtonCustom} {
    transform: translateY(-50%) scale(1.2);
    border-color: #4c8bf5;
    box-shadow: 0 0 10px rgba(76, 139, 245, 0.5);
  }
`;
