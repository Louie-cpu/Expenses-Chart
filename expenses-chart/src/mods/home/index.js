import styled from "styled-components"
import OverviewComponent from "./OverviewComponent"
import TransactionComponent from "./TransactionComponent"
import { useEffect, useState } from "react"

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 30px 0 10px;
  font-family: "Inter-Tight";
  width: 450px;
  background-color: #fff;
  padding: 20px;
  border-radius: 8px;
`

const HomeComponent = (props) => {
  const [transactions, updateTransactions] = useState([])
  const [expense, updateExpense] = useState(0)
  const [income, updateIncome] = useState(0)

  const addTransaction = (payload) => {
    console.log("Adding transaction:", payload)
    const transactionArray = [...transactions]
    transactionArray.push(payload)
    updateTransactions(transactionArray)
  }

  const calculateBalance = () => {
    let exp = 0
    let inc = 0
    transactions.forEach((payload) => {
      payload.type === "EXPENSE"
        ? (exp += payload.amount)
        : (inc += payload.amount)
    })
    updateExpense(exp)
    updateIncome(inc)
  }

  useEffect(() => {
    calculateBalance()
  }, [transactions])

  return (
    <Container>
      <OverviewComponent
        addTransaction={addTransaction}
        expense={expense}
        income={income}
      />
      <TransactionComponent transactions={transactions} />
    </Container>
  )
}

export default HomeComponent
