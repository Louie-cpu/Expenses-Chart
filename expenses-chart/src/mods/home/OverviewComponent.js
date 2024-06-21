import styled from "styled-components"
import { useState } from "react"

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
`

const BalanceChart = styled.div`
  font-size: 24px;
  width: 100%;
  font-weight: bold;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  color: #333;
  padding: 10px;
  background-color: #3b5998;
  color: white;
  border-radius: 8px;
`

const AddTransaction = styled.div`
  background: #007bff;
  color: white;
  padding: 10px 20px;
  border-radius: 4px;
  text-align: center;
  cursor: pointer;
  font-weight: bold;
  font-size: 16px;
  transition: background-color 0.3s;
  &:hover {
    background-color: #0056b3;
  }
`

const AddTransactionContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 15px;
  padding: 20px;
  margin: 20px 0;
  background-color: #fff;
  border-radius: 8px;
  opacity: ${(props) => (props.$isVisible ? 1 : 0)};
  max-height: ${(props) => (props.$isVisible ? "500px" : "0px")};
  overflow: hidden;
  transition: max-height 0.5s ease, opacity 0.5s ease;
  & input {
    outline: none;
    padding: 10px 12px;
    border-radius: 4px;
    border: 1px solid #ccc;
    font-size: 16px;
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

const AddTransactionView = (props) => {
  const [amount, setAmount] = useState("")
  const [desc, setDesc] = useState("")
  const [type, setType] = useState("EXPENSE")

  const addTransaction = () => {
    props.addTransaction({
      amount: Number(amount),
      desc,
      type,
      id: Date.now(),
    })
    props.toggleAddTxn()
  }

  return (
    <AddTransactionContainer $isVisible={props.isVisible}>
      <input
        placeholder="Amount"
        value={amount}
        type="number"
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
          onChange={(e) => setType(e.target.value)}
        />
        <label htmlFor="expense">Expense</label>
        <input
          type="radio"
          id="income"
          name="type"
          value="INCOME"
          checked={type === "INCOME"}
          onChange={(e) => setType(e.target.value)}
        />
        <label htmlFor="income">Income</label>
      </RadioBox>
      <AddTransaction onClick={addTransaction}>Add Transaction</AddTransaction>
    </AddTransactionContainer>
  )
}

const ExpenseContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
  margin: 20px 0;
`

const ExpenseBox = styled.div`
  display: flex;
  flex-direction: column;
  padding: 15px 20px;
  width: 200px;
  font-size: 14px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  & span {
    font-weight: bold;
    font-size: 20px;
    color: ${(props) => (props.$isIncome ? "green" : "red")};
  }
`

const OverviewComponent = (props) => {
  const [isAddTxn, toggleAddTxn] = useState(false)

  return (
    <Container>
      <BalanceChart>
        Balance: ${props.income - props.expense}
        <AddTransaction onClick={() => toggleAddTxn(!isAddTxn)}>
          {isAddTxn ? "Cancel" : "ADD"}
        </AddTransaction>
      </BalanceChart>
      <AddTransactionView
        isVisible={isAddTxn}
        toggleAddTxn={toggleAddTxn}
        addTransaction={props.addTransaction}
      />
      <ExpenseContainer>
        <ExpenseBox $isIncome={false}>
          Expense<span>${props.expense}</span>
        </ExpenseBox>
        <ExpenseBox $isIncome={true}>
          Income<span>${props.income}</span>
        </ExpenseBox>
      </ExpenseContainer>
    </Container>
  )
}

export default OverviewComponent
