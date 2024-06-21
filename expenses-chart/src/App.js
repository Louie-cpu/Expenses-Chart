import { createGlobalStyle } from "styled-components"
import styled from "styled-components"
import HomeComponent from "./mods/home"

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
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
  margin-top: 100px;
  font-family: "Inter-Tight";
  width: 550px;
  padding: 20px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`

const Header = styled.span`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: center;
  background-color: #3b5998;
  color: white;
  font-size: 50px;
  font-weight: bold;
  font-family: "Inter-Tight";
  align-items: center;
  padding: 10px 0;
  z-index: 1000;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`

function App() {
  return (
    <>
      <GlobalStyle />
      <Header>Expense Chart</Header>
      <Container>
        <HomeComponent />
      </Container>
    </>
  )
}

export default App
