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
  background-color: rgb(23, 111, 211);
  color: #fff;
  text-transform: uppercase;
  font-weight: bold;
`;

export const FileInput = styled.input`
  display: none;
`;