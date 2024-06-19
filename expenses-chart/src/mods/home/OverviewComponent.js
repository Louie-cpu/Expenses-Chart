import styled from "styled-components"
import { useState } from "react"

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

const AddTransaction = styled.div`
  background: black;
  color: white;
  padding: 5px 10px;
  border-radius: 4px;
  text-align: center;
  cursor: pointer;
  font-weight: bold;
  font-size: 15px;
`
const AddTransactionContainer = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid #e6e8e9;
  width: 100%;
  gap: 10px;
  padding: 15px 20px;
  margin: 10px 20px;
  & input {
    outline: none;
    padding: 10px 12px;
    border-radius: 4px;
    border: 1px solid #e6e8e9;
  }
`
const RadioBox = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  align-items: center;
  & input {
    width: unset;
    margin: 0 10px;
  }
`
const AddTransactionView = () => {
  return (
    <AddTransactionContainer>
      <input placeholder="Amount" />
      <input placeholder="Description" />
      <RadioBox>
        <input type="radio" id="expense" name="type" value="EXPENSE" />
        <label htmlFor="expense">Expense</label>
        <input type="radio" id="income" name="type" value="INCOME" />
        <label htmlFor="income">Income </label>
      </RadioBox>
      <AddTransaction>Add Transaction</AddTransaction>
    </AddTransactionContainer>
  )
}

const OverviewComponent = (props) => {
  const [isAddTxn, toggleAddTxn] = useState(true)
  return (
    <Container>
      <BalanceChart>
        Balance: $10000
        <AddTransaction>{isAddTxn ? "Cancel" : "ADD"}</AddTransaction>
      </BalanceChart>
      {isAddTxn && <AddTransactionView />}
    </Container>
  )
}

export default OverviewComponent
