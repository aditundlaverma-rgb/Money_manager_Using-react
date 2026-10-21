import React from 'react'

const Reports = () => {
  return (
    <div className='mx-auto max-w-7xl animate-fade-up'>
      <div className='card flex flex-col items-center gap-4 px-6 py-16 text-center sm:py-20'>
        <span className='grid h-16 w-16 place-items-center rounded-3xl bg-sky-100 text-sky-600 ring-1 ring-sky-200/70'>
          <svg className='h-8 w-8' fill='none' viewBox='0 0 24 24' strokeWidth={1.6} stroke='currentColor' aria-hidden='true'>
            <path d='M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z' />
          </svg>
        </span>
        <h2 className='text-2xl font-extrabold tracking-tight text-slate-900'>Reports</h2>
        <p className='max-w-md text-sm font-medium leading-relaxed text-slate-500'>
          Downloadable monthly summaries and detailed reports will be generated here.
        </p>
        <span className='rounded-full bg-slate-100 px-3.5 py-1.5 text-[11px] font-extrabold uppercase tracking-[0.18em] text-slate-500'>
          Coming soon
        </span>
      </div>
    </div>
  )
}

export default Reports
