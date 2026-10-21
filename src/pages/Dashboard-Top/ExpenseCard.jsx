import React from 'react'

const ExpenseCard = ({expense}) => {
  return (
    <div className='card card-hover p-6 animate-fade-up stagger-3'>
      <div className='flex items-start justify-between gap-3'>
        <h3 className='pt-1 text-[11px] font-extrabold uppercase tracking-[0.2em] text-slate-400'>
          Expense
        </h3>
        <span className='grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-rose-50 text-rose-600 ring-1 ring-rose-100'>
          <svg
            className='h-5 w-5'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth={1.8}
            stroke='currentColor'
            aria-hidden='true'
          >
            <path d='M2.25 6 9 12.75l4.286-4.286a11.948 11.948 0 0 1 4.306 6.43l.776 2.898m0 0 3.182-5.511m-3.182 5.51-5.511-3.181' />
          </svg>
        </span>
      </div>

      <h4 className='mt-5 text-3xl font-extrabold tabular-nums text-slate-900'>₹{expense}</h4>
      <p className='mt-1 text-xs font-semibold text-slate-400'>Money out</p>
    </div>
  )
}

export default ExpenseCard
