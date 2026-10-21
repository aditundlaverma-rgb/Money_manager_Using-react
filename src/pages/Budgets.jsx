import React from 'react'

const Budgets = () => {
  return (
    <div className='mx-auto max-w-7xl animate-fade-up'>
      <div className='card flex flex-col items-center gap-4 px-6 py-16 text-center sm:py-20'>
        <span className='grid h-16 w-16 place-items-center rounded-3xl bg-emerald-100 text-emerald-600 ring-1 ring-emerald-200/70'>
          <svg className='h-8 w-8' fill='none' viewBox='0 0 24 24' strokeWidth={1.6} stroke='currentColor' aria-hidden='true'>
            <path d='M21 12a2.25 2.25 0 0 0-2.25-2.25H15a3 3 0 1 1-6 0H5.25A2.25 2.25 0 0 0 3 12v6a2.25 2.25 0 0 0 2.25 2.25h13.5A2.25 2.25 0 0 0 21 18v-6Z' />
            <path d='M16.5 12.75h.008v.008h-.008v-.008Z' />
          </svg>
        </span>
        <h2 className='text-2xl font-extrabold tracking-tight text-slate-900'>Budgets</h2>
        <p className='max-w-md text-sm font-medium leading-relaxed text-slate-500'>
          Set monthly limits per category and keep your spending on track.
        </p>
        <span className='rounded-full bg-slate-100 px-3.5 py-1.5 text-[11px] font-extrabold uppercase tracking-[0.18em] text-slate-500'>
          Coming soon
        </span>
      </div>
    </div>
  )
}

export default Budgets
