import React from 'react'

const BalanceCard = ({balance}) => {
  return (
    <div className='card card-hover grad-balance relative overflow-hidden p-6 text-white animate-fade-up stagger-1'>
      <span
        aria-hidden='true'
        className='pointer-events-none absolute -right-10 -top-12 h-36 w-36 rounded-full bg-white/10'
      ></span>
      <span
        aria-hidden='true'
        className='pointer-events-none absolute -bottom-16 -left-10 h-32 w-32 rounded-full bg-white/10'
      ></span>

      <div className='relative flex items-start justify-between gap-3'>
        <h3 className='pt-1 text-[11px] font-extrabold uppercase tracking-[0.2em] text-white/85'>
          Balance
        </h3>
        <span className='grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-white/20 ring-1 ring-white/30'>
          <svg
            className='h-5 w-5'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth={1.7}
            stroke='currentColor'
            aria-hidden='true'
          >
            <path d='M21 12a2.25 2.25 0 0 0-2.25-2.25H15a3 3 0 1 1-6 0H5.25A2.25 2.25 0 0 0 3 12v6a2.25 2.25 0 0 0 2.25 2.25h13.5A2.25 2.25 0 0 0 21 18v-6Z' />
            <path d='M16.5 12.75h.008v.008h-.008v-.008Z' />
          </svg>
        </span>
      </div>

      <h4 className='relative mt-6 text-3xl font-extrabold tabular-nums'>₹{balance}</h4>
      <p className='relative mt-1 text-xs font-semibold text-white/75'>Available to spend</p>
    </div>
  )
}

export default BalanceCard
