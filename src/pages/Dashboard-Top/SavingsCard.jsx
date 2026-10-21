import React from 'react'

const SavingsCard = ({savings}) => {
  return (
    <div className='card card-hover p-6 animate-fade-up stagger-4'>
      <div className='flex items-start justify-between gap-3'>
        <h3 className='pt-1 text-[11px] font-extrabold uppercase tracking-[0.2em] text-slate-400'>
          Savings
        </h3>
        <span className='grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-violet-50 text-violet-600 ring-1 ring-violet-100'>
          <svg
            className='h-5 w-5'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth={1.7}
            stroke='currentColor'
            aria-hidden='true'
          >
            <path d='M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Z' />
            <path d='M12 6.75v10.5m2.6-8.1c-.62-.92-1.66-1.38-2.75-1.38-1.45 0-2.66.83-2.66 2.05 0 1.44 1.34 1.95 2.88 2.16 1.54.21 2.98.72 2.98 2.16 0 1.28-1.26 2.1-2.74 2.1-1.2 0-2.27-.5-2.87-1.42' />
          </svg>
        </span>
      </div>

      <h4 className='mt-5 text-3xl font-extrabold tabular-nums text-slate-900'>₹{savings}</h4>
      <p className='mt-1 text-xs font-semibold text-slate-400'>Set aside</p>
    </div>
  )
}

export default SavingsCard
