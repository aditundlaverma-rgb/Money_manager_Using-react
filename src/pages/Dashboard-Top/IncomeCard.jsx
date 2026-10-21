import React from 'react'

const IncomeCard = ({income}) => {
  return (
    <div className='card card-hover p-6 animate-fade-up stagger-2'>
      <div className='flex items-start justify-between gap-3'>
        <h3 className='pt-1 text-[11px] font-extrabold uppercase tracking-[0.2em] text-slate-400'>
          Total Income
        </h3>
        <span className='grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-sky-50 text-sky-600 ring-1 ring-sky-100'>
          <svg
            className='h-5 w-5'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth={1.8}
            stroke='currentColor'
            aria-hidden='true'
          >
            <path d='M2.25 18 9 11.25l4.306 4.306a11.95 11.95 0 0 1 5.814-5.518l2.74-1.22m0 0-5.94-2.28m5.94 2.28-2.28 5.941' />
          </svg>
        </span>
      </div>

      <h4 className='mt-5 text-3xl font-extrabold tabular-nums text-slate-900'>₹{income}</h4>
      <p className='mt-1 text-xs font-semibold text-slate-400'>Money in</p>
    </div>
  )
}

export default IncomeCard
