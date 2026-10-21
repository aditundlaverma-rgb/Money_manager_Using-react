import React from 'react'
import Navbar from './components/navbar.jsx'
import Pages from './components/pages.jsx'
import { Routes,Route } from 'react-router-dom'
import Dashboard from'./pages/Dashboard.jsx'
import Analytics from './pages/Analytics.jsx'
import Budgets from './pages/Budgets.jsx'
import Reports from './pages/Reports.jsx'
import Transactions from './pages/Transactions.jsx'
import Settings from './pages/Settings.jsx'




const App = () => {
  return (
    <div className='min-h-svh'>
    <Navbar/>
    <div className='flex flex-col lg:flex-row'>
      <Pages/>
      <main className='min-w-0 flex-1 px-4 py-6 sm:px-6 lg:px-8 lg:py-8'>
      <Routes>
      <Route path='/' element={<Dashboard/>}/>
       <Route path='/analytics' element={<Analytics/>}/>
        <Route path='/budgets' element={<Budgets/>}/>
         <Route path='/reports' element={<Reports/>}/>
          <Route path='/transactions' element={<Transactions/>}/>
          <Route path='/settings'element={<Settings/>}/>

    </Routes>
      </main>
      </div>
       </div>
  )
}

export default App
