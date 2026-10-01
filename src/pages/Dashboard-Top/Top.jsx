import React from 'react'
import BalanceCard from './BalanceCard'
import IncomeCard from './IncomeCard'
import ExpenseCard from './ExpenseCard'
import SavingsCard from './SavingsCard'
const Top = ({income,savings,expense,balance}) => {
  return (
    <div  className='bg-gray-100 px-3 rounded-2xl'>
        <h4 className='  font-bold text-xl px-30 py-4 '>Dashboard</h4>
        <div className='flex gap-10 px-10 justify-between items-center'>
            <BalanceCard balance={balance}/>
        <IncomeCard income={income}/>
        <ExpenseCard expense={expense}/>
        <SavingsCard savings={savings}/>
        </div>
    </div>
  )
}

export default Top