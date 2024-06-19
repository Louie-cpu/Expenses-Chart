import { createGlobalStyle } from "styled-components"
import styled from "styled-components"
import HomeComponent from "./mods/home"

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    font-family: 'Inter-Tight', sans-serif;
    background-color: #f0f0f0;
  }
`

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 30px 0 10px;
  font-family: "Inter-Tight";
  width: 360px;
`

const Header = styled.span`
  color: black;
  font-size: 25px;
  font-weight: bold;
`

function App() {
  return (
    <>
      <GlobalStyle />
      <Container>
        <Header>Expense Chart</Header>
        <HomeComponent />
      </Container>
    </>
  )
}

export default App
