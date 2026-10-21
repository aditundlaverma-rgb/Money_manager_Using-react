import React from 'react'

const Settings = () => {
  return (
    <div className='mx-auto max-w-7xl animate-fade-up'>
      <div className='card flex flex-col items-center gap-4 px-6 py-16 text-center sm:py-20'>
        <span className='grid h-16 w-16 place-items-center rounded-3xl bg-slate-100 text-slate-600 ring-1 ring-slate-200/70'>
          <svg className='h-8 w-8' fill='none' viewBox='0 0 24 24' strokeWidth={1.6} stroke='currentColor' aria-hidden='true'>
            <path d='M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992a7.03 7.03 0 0 1 0 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.955.26 1.43l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.47 6.47 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.431l1.004-.827c.292-.24.437-.613.43-.991a6.932 6.932 0 0 1 0-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.086.22-.128.332-.183.582-.495.644-.869l.214-1.281Z' />
            <path d='M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z' />
          </svg>
        </span>
        <h2 className='text-2xl font-extrabold tracking-tight text-slate-900'>Settings</h2>
        <p className='max-w-md text-sm font-medium leading-relaxed text-slate-500'>
          Preferences, currency and account options will be configurable here.
        </p>
        <span className='rounded-full bg-slate-100 px-3.5 py-1.5 text-[11px] font-extrabold uppercase tracking-[0.18em] text-slate-500'>
          Coming soon
        </span>
      </div>
    </div>
  )
}

export default Settings
