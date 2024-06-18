import styled from "styled-components"
import OverviewComponent from "./OverviewComponent"
import TransactionComponent from "./TransactionComponent"
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 30px 0 10px;
  font-family: "Inter-Tight";
`
const HomeComponent = (props) => {
  return (
    <Container>
      HomeComponent
      <OverviewComponent />
      <TransactionComponent />
    </Container>
  )
}

export default HomeComponent
