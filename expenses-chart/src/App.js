import { createGlobalStyle } from "styled-components"
import styled from "styled-components"

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 30px 0 10px;
  font-family: "Inter-Tight";
`
const Header = styled.span`
  color: black;
  font-size: 25px;
  font-weight: bold;
`

function App() {
  return (
    <Container>
      Luis Moreno
      <Header>Expense Chart</Header>
    </Container>
  )
}

export default App
