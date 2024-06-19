import styled from "styled-components"
import { useState } from "react"

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
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
  max-width: 500px;
  gap: 10px;
  padding: 15px 20px;
  margin: 20px;
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
  const [amount, setAmount] = useState("")
  const [desc, setDesc] = useState("")
  const [type, setType] = useState("EXPENSE")

  return (
    <AddTransactionContainer>
      <input
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <input
        placeholder="Description"
        value={desc}
        onChange={(e) => setDesc(e.target.value)}
      />
      <RadioBox>
        <input
          type="radio"
          id="expense"
          name="type"
          value="EXPENSE"
          checked={type === "EXPENSE"}
          onChange={() => setType("EXPENSE")}
        />
        <label htmlFor="expense">Expense</label>
        <input
          type="radio"
          id="income"
          name="type"
          value="INCOME"
          checked={type === "INCOME"}
          onChange={() => setType("INCOME")}
        />
        <label htmlFor="income">Income</label>
      </RadioBox>
      <AddTransaction>Add Transaction</AddTransaction>
    </AddTransactionContainer>
  )
}

const OverviewComponent = (props) => {
  const [isAddTxn, toggleAddTxn] = useState(false)

  return (
    <Container>
      <BalanceChart>
        Balance: $10000
        <AddTransaction onClick={() => toggleAddTxn(!isAddTxn)}>
          {isAddTxn ? "Cancel" : "ADD"}
        </AddTransaction>
      </BalanceChart>
      {isAddTxn && <AddTransactionView />}
    </Container>
  )
}

export default OverviewComponent
