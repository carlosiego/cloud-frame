import styled from 'styled-components'

export default function OptionSiderBarImgProducts({ type, value, checked, onChange }) {
  return (
    <>
        <Label></Label>
        <RadioInputsAction>
            <RadioAction>
                <RadioInput 
                  type="radio"
                  value={value}  
                  checked={checked}
                  onChange={() => onChange(value)}
                />
                <RadioName className="name">{value}</RadioName>
            </RadioAction>    
        </RadioInputsAction>
    </>
  )
}
const RadioInputsAction = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  border-radius: 0.5rem;
  box-sizing: border-box;
  padding: 0.25rem;
  font-size: 16px;
  height: 40px;
`;

const RadioAction = styled.div`
  flex: 1 1 auto;
  text-align: center;
`;

const RadioInput = styled.input`
  display: none;
`;

const RadioName = styled.label`
  display: flex;
  cursor: pointer;
  align-items: center;
  justify-content: center;
  border-radius: 0.5rem;
  border: none;
  padding: 0.5rem 0;
  color: rgba(51, 65, 85, 1);
  transition: all 0.15s ease-in-out;
  font-weight: 500;

  &:hover {
    background-color: rgba(0, 0, 0, 0.06);
  }
`;

const CheckedRadioName = styled(RadioName)`
  box-shadow: 0 0 0px 1px rgba(0, 0, 0, 0.06);
  color: white;
  background-color: #119DA4;
  font-weight: 600;
`;

const Label = styled.div`
  color: #02111B;
  font-size: 20px;
  font-weight: bold;
  text-align: center;
  transition: color 0.2s ease-in-out;
  margin-bottom: 15px;
`;


const InputSideBar = styled.input`

`

