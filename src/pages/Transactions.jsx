import React from 'react'

const Transactions = () => {
  return (
    <div className='mx-auto max-w-7xl animate-fade-up'>
      <div className='card flex flex-col items-center gap-4 px-6 py-16 text-center sm:py-20'>
        <span className='grid h-16 w-16 place-items-center rounded-3xl bg-indigo-100 text-indigo-600 ring-1 ring-indigo-200/70'>
          <svg className='h-8 w-8' fill='none' viewBox='0 0 24 24' strokeWidth={1.6} stroke='currentColor' aria-hidden='true'>
            <path d='M7.5 21 3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5' />
          </svg>
        </span>
        <h2 className='text-2xl font-extrabold tracking-tight text-slate-900'>Transactions</h2>
        <p className='max-w-md text-sm font-medium leading-relaxed text-slate-500'>
          Your complete history with search, filters and sorting will appear here.
        </p>
        <span className='rounded-full bg-slate-100 px-3.5 py-1.5 text-[11px] font-extrabold uppercase tracking-[0.18em] text-slate-500'>
          Coming soon
        </span>
      </div>
    </div>
  )
}

export default Transactions
