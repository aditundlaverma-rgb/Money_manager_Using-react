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
    <div>
    <Navbar/>
    <Pages/>
    <Routes>
      <Route path='/' element={<Dashboard/>}/>
       <Route path='/analytics' element={<Analytics/>}/>
        <Route path='/budgets' element={<Budgets/>}/>
         <Route path='/reports' element={<Reports/>}/>
          <Route path='/transactions' element={<Transactions/>}/>
          <Route path='/settings'element={<Settings/>}/>
        
    </Routes>
       </div>
  )
}

export default App