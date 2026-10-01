import React from 'react'
import { Link } from 'react-router-dom'

const Pages = () => {
  return (
    <div className='flex  flex-col h-svw  items-center text-white font-bold text-xs tracking-wide  float-left bg-blue-950 '>
        <Link className='p-5' to="/">Dashboard</Link>
        <Link className='p-5' to="/transactions">Transactions</Link>
        <Link className='p-5' to="/analytics">Analytics</Link>
        <Link className='p-5' to="/budgets">Budgets</Link>
        <Link className='p-5'to="/reports">Reports</Link>
        <Link className='p-5' to="/settings">Settings</Link>
    </div>
  )
}

export default Pages