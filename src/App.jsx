import { useState } from 'react'
import styled from 'styled-components'
import OptionSiderBarImgProducts from './components/OptionSiderBarImgProducts'
function App() {

  const optionsActionImageProducts = [
    'Adicionar imagem',
    'Criar associação',
    'Adicionar imagem com vários códigos',
    'Visualizar',
    'Atualizar',
    'Deletar'
  ]

  const [selectedOption, setSelectedOption] = useState(optionsActionImageProducts[0]);

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value)
    console.log(selectedOption)
  }

  return (
    <>
      <Header>
         <h1>Ferramental</h1>
      </Header>
      <Body>
        <Sidebar>
          <RadioInputContainer>
            {optionsActionImageProducts.map((option, index) => (
              <div key={index}>
                <OptionSiderBarImgProducts
                  type="radio"
                  value={option}
                  checked={selectedOption === option}
                  onChange={(handleOptionChange)}
                />
              </div>
            ))}
          </RadioInputContainer>
        </Sidebar>
        <Content>
          <h1>{selectedOption}</h1>
        </Content>
      </Body>
    </>
  )
}

const Header = styled.div`
  display: flex;
  height: 80px;
  justify-content: center;
  align-items: center;
  flex: 1;
  background-color: #02111B;
  color: white;
`

const Body = styled.div`
  display: flex;
  height: 520px;
  flex: 1;
  background-color: #663bff;
`

const Sidebar = styled.div`
  display: flex;
  padding: 20px 0px 0px 10px;
  align-items: center;
  flex-direction: column;
  flex: 1;
  background-color: #E6E6E6;
`
const RadioInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  gap: 24px;
`;

const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 4;
  background-color: #FBFBFF;

`


export default App
