import React, { useState } from 'react'
import Top from './Dashboard-Top/Top'
import NewTransaction from './Dashboard-Middle/NewTransaction'
import RecentTransaction from './Dashboard-Top/Dashboard-End/RecentTransaction'

const Dashboard = () => {
  const [Transactions, setTransactions] = useState([])
  const addTransaction=(transaction)=>{
    setTransactions(prev =>[
      ...prev,
{
    ...transaction,amount:Number(transaction.amount)
}
    
    ])
  }
  const income=Transactions
  .filter(transaction=> transaction.type==="Income")
  .reduce(
        (total, transaction) =>
            total + Number(transaction.amount),
        0
    );
    const expense=Transactions
    .filter(transaction=> transaction.type==="Expense")
    .reduce(
      (total,transaction)=>
        total+Number(transaction.amount),0
    )
    const savings=Transactions
    .filter(transaction=> transaction.type==="Savings")
    .reduce(
      (total,transaction)=>
        total+Number(transaction.amount),0
    )
    const balance=income-expense-savings;
  return (
    <div>
      <Top
      income={income}
      expense={expense}
      savings={savings}
      balance={balance}/>
      <NewTransaction
      addTransaction={addTransaction}/>
      <RecentTransaction transactions={Transactions}/>
    </div>
  )
}

export default Dashboard