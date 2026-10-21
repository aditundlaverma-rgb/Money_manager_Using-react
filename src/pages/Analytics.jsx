import React from 'react'

const Analytics = () => {
  return (
    <div className='mx-auto max-w-7xl animate-fade-up'>
      <div className='card flex flex-col items-center gap-4 px-6 py-16 text-center sm:py-20'>
        <span className='grid h-16 w-16 place-items-center rounded-3xl bg-violet-100 text-violet-600 ring-1 ring-violet-200/70'>
          <svg className='h-8 w-8' fill='none' viewBox='0 0 24 24' strokeWidth={1.6} stroke='currentColor' aria-hidden='true'>
            <path d='M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z' />
          </svg>
        </span>
        <h2 className='text-2xl font-extrabold tracking-tight text-slate-900'>Analytics</h2>
        <p className='max-w-md text-sm font-medium leading-relaxed text-slate-500'>
          Spending trends, category breakdowns and smart insights about your money will live here.
        </p>
        <span className='rounded-full bg-slate-100 px-3.5 py-1.5 text-[11px] font-extrabold uppercase tracking-[0.18em] text-slate-500'>
          Coming soon
        </span>
      </div>
    </div>
  )
}

export default Analytics
