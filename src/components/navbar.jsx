import React from 'react'

const navbar = () => {
  const today = new Date().toLocaleDateString('en-IN', {
    weekday: 'short',
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  })

  return (
    <header className='sticky top-0 z-40 border-b border-slate-200/70 bg-white/85 backdrop-blur-md'>
      <div className='flex items-center justify-between gap-4 px-4 py-3 sm:px-6'>
        <div className='flex items-center gap-3'>
          <span className='grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-gradient-to-br from-violet-50 to-sky-50 shadow-sm ring-1 ring-violet-200/70'>
            <img src='/favicon.svg' alt='' className='h-6 w-6' />
          </span>
          <div className='leading-tight'>
            <h1 className='text-base font-extrabold tracking-tight text-slate-900 sm:text-lg'>
              Advanced Expense Tracker
            </h1>
            <p className='text-[10px] font-bold uppercase tracking-[0.28em] text-slate-400'>
              Track · Manage · Save
            </p>
          </div>
        </div>

        <div className='hidden items-center gap-2 rounded-full border border-slate-200 bg-white/80 px-4 py-2 text-xs font-semibold text-slate-500 shadow-sm sm:flex'>
          <span className='relative flex h-2 w-2'>
            <span className='absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75'></span>
            <span className='relative inline-flex h-2 w-2 rounded-full bg-emerald-500'></span>
          </span>
          {today}
        </div>
      </div>
    </header>
  )
}

export default navbar
