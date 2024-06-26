import React, { useState, useEffect } from "react"
import styled from "styled-components"

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 20px;
  font-size: 18px;
  width: 100%;
  gap: 20px;
  font-weight: bold;
  & input {
    padding: 10px 12px;
    border-radius: 12px;
    background: #e6e8e9;
    border: 1px solid #ccc;
    outline: none;
    width: 100%;
  }
`

const Cell = styled.div`
  display: flex;
  flex-direction: row;
  padding: 10px 15px;
  font-size: 14px;
  width: 100%;
  border-radius: 2px;
  align-items: center;
  font-weight: bold;
  justify-content: space-between;
  border: 1px solid #ccc;
  border-right: 8px solid ${(props) => (props.$isExpense ? "red" : "green")};
`

const TransactionCell = ({ payload }) => (
  <Cell $isExpense={payload?.type === "EXPENSE"}>
    <span>{payload.desc}</span>
    <span>${payload.amount}</span>
  </Cell>
)

const TransactionComponent = ({ transactions }) => {
  const [searchText, updateSearchText] = useState("")
  const [filteredTransactions, updateTxn] = useState(transactions)

  const filteredData = (searchText) => {
    if (!searchText.trim()) {
      updateTxn(transactions)
      return
    }
    let txn = transactions.filter((payload) =>
      payload.desc.toLowerCase().includes(searchText.toLowerCase().trim())
    )
    updateTxn(txn)
  }

  useEffect(() => {
    filteredData(searchText)
  }, [transactions, searchText])

  return (
    <Container>
      Transactions
      <input
        placeholder="Search"
        value={searchText}
        onChange={(e) => {
          updateSearchText(e.target.value)
          filteredData(e.target.value)
        }}
      />
      {filteredTransactions?.length
        ? filteredTransactions.map((payload) => (
            <TransactionCell key={payload.id} payload={payload} />
          ))
        : "No Transactions Found"}
    </Container>
  )
}

export default TransactionComponent
