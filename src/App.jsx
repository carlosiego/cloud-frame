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

  const handleOptionChange = (option) => {
    setSelectedOption(option)
  }

  return (
    <>
      <Header>
         <h1>Ferramental</h1>
      </Header>
      <Body>
        <Sidebar>
          {optionsActionImageProducts.map((option, index) => (
            <div key={index}>
                <OptionSiderBarImgProducts
                  type="radio"
                  value={option}
                  checked={selectedOption === option}
                  onChange={handleOptionChange}
                />
            </div>
          ))}
        </Sidebar>
        <Content>
          <h1>Ferramental</h1>
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
  align-items: center;
  flex-direction: column;
  flex: 1;
  background-color: #faaeae;

`
const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 4;
  background-color: #663bff;

`

export default App
