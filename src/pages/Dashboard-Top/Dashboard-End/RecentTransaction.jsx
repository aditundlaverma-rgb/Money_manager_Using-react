import React, { useState } from 'react'

const RecentTransaction = ({transactions}) => {
  const [rows, setrows] = useState([
    { id:1,name:"Row1"},
    { id:2,name:"Row2"},
    { id:3,name:"Row3"},
    { id:4,name:"Row4"},
    { id:5,name:"Row5"},
  ]

  )
  const Delete=(id)=>{setrows(prevrows => prevrows.filter(row=>row.id!==id));

  }

  const typeBadge = (type) => {
    if (type === 'Income') return 'bg-emerald-50 text-emerald-600 ring-emerald-500/15'
    if (type === 'Savings') return 'bg-violet-50 text-violet-600 ring-violet-500/15'
    return 'bg-rose-50 text-rose-600 ring-rose-500/15'
  }

  return (
    <div className='card mx-auto mt-6 max-w-7xl overflow-hidden animate-fade-up'>
      <div className='flex items-center gap-3 border-b border-slate-100 px-6 py-5'>
        <span className='grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-sky-100 text-sky-600 ring-1 ring-sky-200/70'>
          <svg className='h-5 w-5' fill='none' viewBox='0 0 24 24' strokeWidth={1.7} stroke='currentColor' aria-hidden='true'>
            <path d='M8.25 6.75h12M8.25 12h12M8.25 17.25h12M3.75 6.75h.007v.008H3.75V6.75Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0ZM4.125 12h.007v.008H4.125V12Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm-.375 5.25h.007v.008H4.125v-.008Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z' />
          </svg>
        </span>
        <div className='leading-tight'>
          <h4 className='text-lg font-extrabold tracking-tight text-slate-900'>Recent Transactions</h4>
          <p className='text-xs font-medium text-slate-500'>
            {transactions.length > 0
              ? `${transactions.length} ${transactions.length === 1 ? 'entry' : 'entries'} recorded`
              : 'Your entries will appear here'}
          </p>
        </div>
      </div>

      <div className='thin-scroll overflow-x-auto'>
          <table className='w-full min-w-[720px] text-left text-sm'>
           <thead>
             <tr key={rows.id} className='bg-slate-50/80 text-[11px] font-extrabold uppercase tracking-[0.14em] text-slate-500'>
                 <th className='px-6 py-3.5'>Date</th>
              <th className='px-6 py-3.5'>Title</th>
                <th className='px-6 py-3.5'>Category</th>
                <th className='px-6 py-3.5'>Type</th>
                <th className='px-6 py-3.5'>Amount</th>
                <th className='px-6 py-3.5'>Action</th>
            </tr>
           </thead>
           <tbody>
             {transactions.map((transaction, index) => (
      <tr key={index} className='border-t border-slate-100 transition-colors hover:bg-violet-50/40'>
        <td className='px-6 py-4 font-medium text-slate-500'>{transaction.date}</td>
        <td className='px-6 py-4 font-bold text-slate-800'> {transaction.title}</td>
        <td className='px-6 py-4 text-slate-600'>{transaction.category}</td>
        <td className='px-6 py-4'>
          <span className={`inline-flex items-center rounded-full px-2.5 py-1 text-[11px] font-extrabold uppercase tracking-wide ring-1 ${typeBadge(transaction.type)}`}>
            {transaction.type}
          </span>
        </td>
        <td className='px-6 py-4 font-extrabold tabular-nums text-slate-900'>₹{transaction.amount}</td>

        <td className='px-6 py-4'>
          <button  className='mr-2 rounded-lg bg-indigo-50 px-3.5 py-1.5 text-xs font-bold text-indigo-600 transition hover:bg-indigo-100 active:scale-95' >Edit</button>
          <button className='rounded-lg bg-rose-50 px-3.5 py-1.5 text-xs font-bold text-rose-600 transition hover:bg-rose-100 active:scale-95' onClick={()=>Delete(rows.id)} >Delete</button>
        </td>
      </tr>
    ))}

    {transactions.length === 0 && (
      <tr>
        <td colSpan={6}>
          <div className='flex flex-col items-center justify-center gap-2 px-6 py-14 text-center'>
            <span className='grid h-12 w-12 place-items-center rounded-2xl bg-slate-100 text-slate-400'>
              <svg className='h-6 w-6' fill='none' viewBox='0 0 24 24' strokeWidth={1.6} stroke='currentColor' aria-hidden='true'>
                <path d='M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m3.75 9v6m3-3H9m1.5-12H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z' />
              </svg>
            </span>
            <p className='text-sm font-extrabold text-slate-600'>No transactions yet</p>
            <p className='max-w-xs text-xs font-medium text-slate-400'>
              Add your first transaction using the form above — it will show up here.
            </p>
          </div>
        </td>
      </tr>
    )}
           </tbody>
        </table>
      </div>
    </div>
  )
}

export default RecentTransaction
