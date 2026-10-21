import React, { useState } from 'react'




const NewTransaction = ({addTransaction}) => {

const [form, setform] = useState({
  title:"",
  amount:"",
  category:"Food",
  type:"Expense",
  date:"",

})



     const handleSubmit=(e)=>{
      e.preventDefault();
      addTransaction(form)
    setform({
    title: "",
    amount: "",
    category: "Food",
    type: "Expense",
    date: "",
  })
     }

  return (
    <div>
         <div className='card mx-auto mt-6 max-w-7xl p-6 sm:p-8 animate-fade-up'>
        <div className='mb-6 flex items-center gap-3'>
          <span className='grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-violet-100 text-violet-600 ring-1 ring-violet-200/70'>
            <svg className='h-5 w-5' fill='none' viewBox='0 0 24 24' strokeWidth={2} stroke='currentColor' aria-hidden='true'>
              <path d='M12 5v14M5 12h14' />
            </svg>
          </span>
          <div className='leading-tight'>
            <h4 className='text-lg font-extrabold tracking-tight text-slate-900'>Add New Transaction</h4>
            <p className='text-xs font-medium text-slate-500'>Log your income, expense or savings in seconds</p>
          </div>
        </div>

        <form className='grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3'
        onSubmit={handleSubmit}>
           <div className='flex flex-col gap-1.5'>
             <label className='text-xs font-extrabold uppercase tracking-[0.14em] text-slate-500' htmlFor='txn-title'>Title:</label>
             <input className="field" id='txn-title' type="text" placeholder='e.g:Lunch,Salary,Uber' value={form.title}
           onChange={(e)=>{
            setform({
              ...form,
              title:e.target.value})
           }}
         />
           </div>
           <div className='flex flex-col gap-1.5'>
             <label className='text-xs font-extrabold uppercase tracking-[0.14em] text-slate-500' htmlFor='txn-amount'>Amount:</label>
             <input className="field" id='txn-amount' type="text" value={form.amount}
            onChange={(e)=>{
            setform({
              ...form,
              amount:e.target.value})
           }}
           placeholder='e.g:250'/>
           </div>
           <div className='flex flex-col gap-1.5'>
             <label className='text-xs font-extrabold uppercase tracking-[0.14em] text-slate-500' htmlFor='txn-category'>Category:</label>
          <select className="field" id='txn-category' name="" value={form.category}
           onChange={(e)=>{
            setform({
              ...form,
              category:e.target.value})
           }}>
             <option value="Food">Food</option>
            <option value="Travel">Travel</option>
             <option value="Shopping">Shopping</option>
              <option value="Bills">Bills</option>
               <option value="Hobby">Hobby</option>
               <option value="Work">Work</option>
          </select>
           </div>
           <div className='flex flex-col gap-1.5'>
             <label className='text-xs font-extrabold uppercase tracking-[0.14em] text-slate-500' htmlFor='txn-type'>Type:</label>
           <select className="field" id='txn-type' value={form.type}
          onChange={(e)=>{
            setform({
              ...form,
              type:e.target.value})
           }}>
            <option value="Expense">Expense</option>
             <option value="Savings">Savings</option>
              <option value="Income">Income</option>
         </select>
           </div>
           <div className='flex flex-col gap-1.5'>
             <label className='text-xs font-extrabold uppercase tracking-[0.14em] text-slate-500' htmlFor='txn-date'>Date:</label>
             <input className="field" id='txn-date' type="date"value={form.date}
          onChange={(e)=>{
            setform({
              ...form,
              date:e.target.value})
           }}/>
           </div>

           <div className='flex items-end'>
         <button className='btn-gradient w-full py-3.5 text-sm font-extrabold tracking-wide active:scale-95 sm:w-auto sm:px-10'>+Add New Transaction</button>
           </div>

        </form>
    </div>
    </div>
  )
}

export default NewTransaction
