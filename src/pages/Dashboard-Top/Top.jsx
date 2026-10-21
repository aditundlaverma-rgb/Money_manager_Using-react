import React from 'react'
import BalanceCard from './BalanceCard'
import IncomeCard from './IncomeCard'
import ExpenseCard from './ExpenseCard'
import SavingsCard from './SavingsCard'

const Top = ({income,savings,expense,balance}) => {
  return (
    <div className='mx-auto max-w-7xl'>
      <div className='mb-6 flex flex-wrap items-end justify-between gap-3 animate-fade-up'>
        <div>
          <h2 className='text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl'>
            Dashboard
          </h2>
          <p className='mt-1 text-sm font-medium text-slate-500'>
            A quick snapshot of your money — updated as you add transactions.
          </p>
        </div>
        <span className='rounded-full border border-slate-200 bg-white/80 px-4 py-2 text-[11px] font-extrabold uppercase tracking-[0.18em] text-slate-500 shadow-sm'>
          Overview
        </span>
      </div>

      <div className='grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4'>
        <BalanceCard balance={balance}/>
        <IncomeCard income={income}/>
        <ExpenseCard expense={expense}/>
        <SavingsCard savings={savings}/>
      </div>
    </div>
  )
}

export default Top
