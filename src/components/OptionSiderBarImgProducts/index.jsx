import styled from 'styled-components'

export default function OptionSiderBarImgProducts({ type, value, checked, onChange }) {
    return (
        <InputSideBar
            type={type}
            value={value}
            checked={checked}
            onChange={() => onChange(value)}
        />
    )
}

const InputSideBar = styled.input`

`