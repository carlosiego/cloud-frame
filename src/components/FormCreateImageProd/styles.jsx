import styled from 'styled-components'

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 300px;
  background-color: #fff;
  border-radius: 20px;
  padding: 30px 20px;
  box-shadow: 100px 100px 80px rgba(0, 0, 0, 0.03);
`;

export const Title = styled.span`
  color: black;
  font-weight: bold;
  text-align: center;
  font-size: 20px;
  margin-bottom: 4px;
`;

export const Sub = styled.span`
  text-align: center;
  color: black;
  font-size: 14px;
  width: 100%;

  &.mb {
    margin-bottom: 1px;
  }

  a {
    color: rgb(23, 111, 211);
  }
`;

export const Avatar = styled.label`
  height: 50px;
  width: 50px;
  background-color: rgb(23, 111, 211);
  border-radius: 50%;
  align-self: center;
  padding: 6px;
  cursor: pointer;
  box-shadow: 12.5px 12.5px 10px rgba(0, 0, 0, 0.015), 100px 100px 80px rgba(0, 0, 0, 0.03);

  span {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 100%;
  }
`;

export const InputForm = styled.input`
  border: none;
  outline: none;
  width: 100%;
  padding: 16px 10px;
  background-color: rgb(247, 243, 243);
  border-radius: 10px;
  box-shadow: 12.5px 12.5px 10px rgba(0, 0, 0, 0.015), 100px 100px 80px rgba(0, 0, 0, 0.03);

  &:focus {
    border: 1px solid rgb(23, 111, 211);
  }
`;

export const Button = styled.button`
  margin-top: 12px;
  padding: 10px;
  border-radius: 5px;
  background-color: rgb(23, 111, 211);
  color: #fff;
  text-transform: uppercase;
  font-weight: bold;
  cursor: pointer;

  &:hover {
    background-color: rgb(17, 77, 146);
  }

  &:active {
    width: 259px;
    background-color: rgb(4, 241, 23);
  }
`;

export const FileInput = styled.input`
  display: none;
`;

export const ContainerCheck = styled.label`
  --input-focus: #2d8cf0;
  --input-out-of-focus: #ccc;
  --bg-color: #fff;
  --bg-color-alt: #666;
  --main-color: #323232;
  position: relative;
  cursor: pointer;
  display: flex;
  flex-direction: row;
  gap: 10px;
  align-items: center;
`;

export const Input = styled.input`
  position: absolute;
  opacity: 0;
`;

export const Checkmark = styled.div`
  width: 20px;
  height: 20px;
  position: relative;
  top: 0;
  left: 0;
  border: 2px solid var(--main-color);
  border-radius: 3px;
  box-shadow: 2px 2px var(--main-color);
  background-color: var(--input-out-of-focus);
  transition: all 0.3s;

  ${Input}:checked ~ & {
    background-color: var(--input-focus);
  }

  &:after {
    content: "";
    width: 4px;
    height: 8px;
    position: absolute;
    top: 2px;
    left: 5px;
    display: none;
    border: solid var(--bg-color);
    border-width: 0 2.5px 2.5px 0;
    transform: rotate(45deg);
  }

  ${Input}:checked ~ &:after {
    display: block;
  }
`;

export const Image = styled.img`
  width: 300px;
  height: 300px;
  margin-left: 50px;
`