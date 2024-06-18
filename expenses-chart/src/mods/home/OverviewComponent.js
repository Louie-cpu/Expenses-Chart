import styled from "styled-components"

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10px;
  font-family: "Inter-Tight";
  width: 100%;
`

const BalanceChart = styled.div`
  font-size: 18px;
  width: 100%;
  font-weight: bold;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

const AddTransaction = styled.button`
  background: black;
  color: white;
  padding: 5px 10px;
  border-radius: 4px;
  cursor: pointer;
  font-weight: bold;
  font-size: 15px;
`
const addTransactionContainer = styled.div``
const addTransactionView = () => {
  return <addTransactionContainer></addTransactionContainer>
}

const OverviewComponent = (props) => {
  const [isAddTxn, toggleAddTxn] = useState(false)
  return (
    <Container>
      <BalanceChart>
        Balance: $10000
        <AddTransaction>{isAddTxn ? "Cancel" : "ADD"}</AddTransaction>
      </BalanceChart>
      {isAddTxn && <addTransactionView />}
    </Container>
  )
}

export default OverviewComponent
